// @ts-nocheck
import React, { type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackRender?: (props: { error: Error; resetError: () => void }) => ReactNode;
  resetKey?: string | number | null;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught a render error.', error, errorInfo);
  }

  componentDidUpdate(prevProps: Readonly<ErrorBoundaryProps>) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null });
    }
  }

  private resetError = () => {
    this.setState({ error: null });
  };

  render() {
    const { children, fallbackRender } = this.props;
    const { error } = this.state;

    if (!error) {
      return children;
    }

    if (fallbackRender) {
      return fallbackRender({ error, resetError: this.resetError });
    }

    return (
      <div className="flex min-h-[240px] items-center justify-center rounded-3xl border border-rose-300 bg-rose-50 p-6 text-center text-rose-900">
        <div>
          <p className="text-2xl font-black">문제가 발생했어요.</p>
          <button
            type="button"
            onClick={this.resetError}
            className="mt-4 rounded-full bg-rose-600 px-5 py-2 text-sm font-black text-white transition hover:bg-rose-500"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }
}
