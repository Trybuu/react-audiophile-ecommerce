import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import Error from './pages/Error'
import ProductDetail from './pages/ProductDetail'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/headphones',
        element: <Headphones />,
      },
      {
        path: '/speakers',
        element: <Speakers />,
      },
      {
        path: '/earphones',
        element: <Earphones />,
      },
      {
        path: '/headphones/:id',
        element: <ProductDetail />,
      },
      {
        path: '/speakers/:id',
        element: <ProductDetail />,
      },
      {
        path: '/earphones/:id',
        element: <ProductDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
