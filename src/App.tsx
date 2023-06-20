import { Routes, Route, BrowserRouter } from 'react-router-dom'

import useAuthentication, { AuthProvider } from 'state/authContext'

import Home from 'Home/Home'

function RequireAuth ({ children }: { children: JSX.Element }) {
  const { credentials } = useAuthentication()

  if (!credentials?.accessToken) {
    window.location.href = 'http://localhost:8080/login.html'
    return null
  }

  return children
}

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
