import type { ReactNode } from 'react'
import { AuthContext, type AuthUser } from './AuthContext'

const MOCK_USER: AuthUser = {
  id: 'mock-user-1',
  name: 'Dev User',
  email: 'dev@example.com',
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ user: MOCK_USER }}>
      {children}
    </AuthContext.Provider>
  )
}
