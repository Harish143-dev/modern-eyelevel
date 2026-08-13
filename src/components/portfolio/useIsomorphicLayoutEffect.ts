import { useEffect, useLayoutEffect } from "react";

/**
 * The portfolio grids measure the viewport before paint, which is a layout
 * effect. The site is prerendered with `vite-prerender-plugin`, and React warns
 * about useLayoutEffect during renderToString — so fall back to useEffect on the
 * server, where neither runs anyway.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
