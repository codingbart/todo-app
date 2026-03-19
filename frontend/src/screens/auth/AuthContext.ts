import { createContext } from 'react'

export interface AuthUser {
  id: string
  name: string
  email: string
}

export interface AuthContextType {
  user: AuthUser
}

export const AuthContext = createContext<AuthContextType | null>(null)
