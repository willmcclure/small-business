import logo from './logo.svg';
import './App.css';
import Listings from './components/Listings'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './containers/NavBar'
import { Provider } from 'react-redux';
import store from './redux/store'


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <NavBar />
        <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
