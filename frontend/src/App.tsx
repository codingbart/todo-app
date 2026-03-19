import { RouterProvider } from 'react-router'
import { AuthProvider } from '@/screens/auth/AuthProvider'
import { ErrorBoundary } from '@/components/feedback/ErrorBoundary'
import { router } from '@/router'

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ErrorBoundary>
  )
}
