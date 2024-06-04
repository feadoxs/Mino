import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { About, Burger, Catalog, Contacts, Deserts, Donate, Layout, Nationation, Pizza, Plow, Steaks, Sushi, Turkish } from './routes/Lazy'
import { Login } from '@mui/icons-material'
import { Suspense } from 'react'
import Home from './pages/home/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
      <Layout />
    </Suspense>,
    children: [
      {
        index: true,
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Home />
        </Suspense>
      },
      {
        path: "/каталог",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Catalog />
        </Suspense>
      },
      {
        path: "/контакты",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Contacts />
        </Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <About />
        </Suspense>
      },
      {
        path: "/турецкая",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Turkish />
        </Suspense>
      },
      {
        path: "/национальная",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Nationation />
        </Suspense>
      },
      {
        path: "/бургеры",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Burger />
        </Suspense>
      },
      {
        path: "/плов",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Plow />
        </Suspense>
      },
      {
        path: "/пицца",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Pizza />
        </Suspense>
      },
      {
        path: "/стейки",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Steaks />
        </Suspense>
      },
      {
        path: "/десерты",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Deserts />
        </Suspense>
      },
      {
        path: "/суши",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Sushi />
        </Suspense>
      },
      {
        path: "/донат",
        element: <Suspense fallback={<div className='flex justify-center h-[500px] items-center'><div className='main-loader'></div></div>}>
          <Donate />
        </Suspense>
      },
    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
