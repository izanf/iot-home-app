import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

function useQuery () {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}

interface AuthContextType {
  credentials: any
  signout: (callback: VoidFunction) => void
}

const AuthContext = React.createContext<AuthContextType>({ credentials: null, signout: () => null })

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const query = useQuery()
  const refreshToken = query.get('refreshToken')
  const expirationTime = query.get('expirationTime')
  const accessToken = query.get('accessToken')
  const [credentials, setCredentials] = useState<any>({ expirationTime, accessToken, refreshToken })

  const signout = (callback: VoidFunction) => {
    setCredentials(null)
    callback()
  }

  const value = { credentials, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuthentication = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthentication must be used within a AuthenticationProvider')
  }

  return context
}

export default useAuthentication
