import logo from './logo.svg';
import './App.css';
import ProductListPage from './components/ProductListPage';
import CartPage from './components/CartPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='bg-gray-100'>
        {/* // TODO: Create header & routes for productlistpage & cartpage */}
        <ProductListPage />
        <CartPage />
      </div>
    </Provider>
  );
}

export default App;
