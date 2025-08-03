import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { store } from './app/store.ts'
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
      <Toaster position="top-center" />
     <RouterProvider router={router} />
     </Provider>
  </StrictMode>,
)
