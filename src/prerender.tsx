import React, { Children, isValidElement } from "react";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { StaticRouter } from "react-router";

type HeadElement = {
  type: string;
  props: Record<string, unknown>;
  children?: string;
};

const toArray = (value: ReactNode) => Children.toArray(value);

const toHeadElements = (value: ReactNode) =>
  toArray(value)
    .filter(isValidElement)
    .map((element) => ({
      type:
        typeof element.type === "string" ? element.type : String(element.type),
      props: Object.fromEntries(
        Object.entries((element as React.ReactElement).props)
          .filter(
            ([key, val]) =>
              key !== "children" &&
              key !== "dangerouslySetInnerHTML" &&
              key !== "data-rh" &&
              val != null &&
              (typeof val === "string" ||
                typeof val === "number" ||
                typeof val === "boolean"),
          )
          .map(([key, val]) => [key, String(val)]),
      ),
      children:
        typeof (element as React.ReactElement).props.children === "string"
          ? (element as React.ReactElement).props.children
          : typeof (element as React.ReactElement).props.dangerouslySetInnerHTML
                ?.__html === "string"
            ? (element as React.ReactElement).props.dangerouslySetInnerHTML
                .__html
            : undefined,
    })) as HeadElement[];

const getTitle = (value: ReactNode) => {
  const [element] = toArray(value).filter(isValidElement);
  if (!element) return undefined;

  const children = (element as React.ReactElement).props.children;
  if (Array.isArray(children)) {
    return children.join("");
  }

  return typeof children === "string" ? children : undefined;
};

const createMockElement = (tagName = "div") => ({
  tagName,
  style: {},
  children: [] as unknown[],
  setAttribute: () => undefined,
  removeAttribute: () => undefined,
  appendChild(child: unknown) {
    this.children.push(child);
    return child;
  },
  removeChild: () => undefined,
  querySelector: () => null,
  getAttribute: () => null,
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
});

const ensurePrerenderDom = () => {
  const globalScope = globalThis as typeof globalThis & {
    window?: Window & typeof globalThis;
    document?: {
      body: ReturnType<typeof createMockElement>;
      head: ReturnType<typeof createMockElement>;
      documentElement: ReturnType<typeof createMockElement>;
      cookie: string;
      createElement: (tagName: string) => ReturnType<typeof createMockElement>;
      querySelector: () => null;
      addEventListener: () => void;
      removeEventListener: () => void;
    };
    navigator?: { userAgent: string };
    HTMLElement?: typeof globalThis.Object;
    Node?: typeof globalThis.Object;
    requestAnimationFrame?: (callback: FrameRequestCallback) => number;
    cancelAnimationFrame?: (id: number) => void;
    IntersectionObserver?: typeof globalThis.IntersectionObserver;
    MutationObserver?: typeof globalThis.MutationObserver;
    Event?: typeof globalThis.Event;
  };

  if (!globalScope.window) {
    globalScope.window = globalScope as unknown as Window & typeof globalThis;
  }

  if (!globalScope.window.addEventListener) {
    globalScope.window.addEventListener = () => undefined;
  }

  if (!globalScope.window.removeEventListener) {
    globalScope.window.removeEventListener = () => undefined;
  }

  if (!globalScope.window.dispatchEvent) {
    globalScope.window.dispatchEvent = () => true;
  }

  if (!globalScope.document) {
    globalScope.document = {
      body: createMockElement("body"),
      head: createMockElement("head"),
      documentElement: createMockElement("html"),
      cookie: "",
      createElement: (tagName: string) => createMockElement(tagName),
      querySelector: () => null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
    } as any;
  }

  if (!globalScope.navigator) {
    globalScope.navigator = { userAgent: "prerender" } as any;
  }

  if (!globalScope.Event) {
    globalScope.Event = class {
      type: string;

      constructor(type: string) {
        this.type = type;
      }
    } as typeof globalThis.Event;
  }

  if (!globalScope.HTMLElement) {
    globalScope.HTMLElement = Object as any;
  }

  if (!globalScope.Node) {
    globalScope.Node = Object as any;
  }

  if (!globalScope.requestAnimationFrame) {
    globalScope.requestAnimationFrame = (callback) =>
      setTimeout(() => callback(Date.now()), 0) as unknown as number;
  }

  if (!globalScope.cancelAnimationFrame) {
    globalScope.cancelAnimationFrame = (id) => clearTimeout(id);
  }

  if (!globalScope.IntersectionObserver) {
    globalScope.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    } as unknown as typeof globalThis.IntersectionObserver;
  }

  if (!globalScope.MutationObserver) {
    globalScope.MutationObserver = class {
      observe() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    } as unknown as typeof globalThis.MutationObserver;
  }
};

export async function prerender({ url }: { url: string }) {
  ensurePrerenderDom();

  const [{ TooltipProvider }, { default: AppContent }] = await Promise.all([
    import("@/components/ui/tooltip"),
    import("./AppContent"),
  ]);

  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppContent />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  const helmet = helmetContext.helmet;
  const title = helmet
    ? getTitle(helmet.title.toComponent() as unknown as ReactNode)
    : undefined;
  const elements = new Set<HeadElement>([
    ...toHeadElements(helmet?.meta.toComponent() as unknown as ReactNode),
    ...toHeadElements(helmet?.link.toComponent() as unknown as ReactNode),
    ...toHeadElements(helmet?.script.toComponent() as unknown as ReactNode),
  ]);

  const { parseLinks } = await import("vite-prerender-plugin/parse");
  const links = new Set(parseLinks(html));

  return {
    html,
    links,
    head: {
      title,
      elements,
    },
  };
}
