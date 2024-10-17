import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { AppLayout } from './components/Layout/AppLayout'
import { ErrorPage } from './pages/ErrorPage'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "country",
          element: <Country />
        },
        {
          path: "Contact",
          element: <Contact />
        },
      ]

    }
    

  ])

  return(<>
  <RouterProvider router={router}></RouterProvider>
  </>)
}

export default App
