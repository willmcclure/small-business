import logo from './logo.svg';
import './App.css';
import Listings from './components/Listings'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './containers/NavBar'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <h1>Austin Small Business Directory</h1>
      <Provider store={store}>
        <BrowserRouter>
        <NavBar />
        <Router />
        <Listings></Listings>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
