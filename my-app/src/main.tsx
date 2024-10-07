import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import {Provider} from "react-redux";
import store from "./store/store";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
