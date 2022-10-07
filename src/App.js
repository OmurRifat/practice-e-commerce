import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './component/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
    {
      path: '*',
      element: <div className='App'><strong>404</strong></div>
    }
  ]);
  return (
    <div >
      <RouterProvider router={ router }></RouterProvider>
    </div>
  );
}

export default App;
