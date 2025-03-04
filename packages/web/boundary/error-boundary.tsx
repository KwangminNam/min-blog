
import { Error } from '@kwangmins-blog/ui'
import type { ErrorBoundaryProps } from 'next/dist/client/components/error-boundary'
import React, { Component, ErrorInfo, ReactNode } from 'react'


interface IErrorBoundaryProps extends ErrorBoundaryProps {
    children: ReactNode
    errorMessage?: string
}

interface IState {
    hasError: boolean
    errorMessage?: string
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IState> {
    public state: IState = {
        hasError: false,
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo)
    }

    public render() {
        const { hasError } = this.state
        const { errorMessage } = this.props
        if (hasError) {
            return <Error errorMessage={errorMessage} />
        }

        return this.props.children
    }
}

export default ErrorBoundary
