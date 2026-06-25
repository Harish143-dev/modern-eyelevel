import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error inside ErrorBoundary:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-[#F8FFE8] text-[#173229]">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 animate-bounce">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="font-dela text-xl sm:text-2xl uppercase tracking-wide mb-3">
            Something went wrong
          </h2>
          <p className="font-bricolage text-sm text-[#173229]/70 max-w-md mb-8 leading-relaxed">
            We encountered an unexpected error while rendering this calendar booking system.
            {this.state.error && (
              <span className="block mt-2 font-mono text-xs bg-red-50 text-red-700 p-2.5 rounded-lg border border-red-200/50 break-all">
                {this.state.error.message}
              </span>
            )}
          </p>
          <Button
            onClick={this.handleReset}
            className="flex items-center gap-2 font-bricolage font-semibold text-sm tracking-wider uppercase rounded-full hover:translate-y-0.5 hover:shadow-none transition-all duration-150 py-5 px-6"
            style={{
              backgroundColor: "#173229",
              color: "#F8FFE8",
              border: "3px solid #0a0a0a",
              boxShadow: "0 4px 0 #0a0a0a",
            }}
          >
            <RefreshCw className="w-4 h-4" />
            Try Resetting
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
