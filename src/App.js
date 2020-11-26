import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Routeviews from './route'


function App() {
  return (
    <div className="App ">
      <Router>      
      <Navbar />
      <Routeviews/>
      </Router>
    </div>
  );
}

export default App;
