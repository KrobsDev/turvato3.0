import { createContext, useState } from 'react'

// create a context object to handle the auth process
const AuthContext = createContext({})

// create the auth provider that will provide context to the rest of the app
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
