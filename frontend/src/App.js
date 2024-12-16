import './App.css';

import Home from './Pages/home';
import NavbarComponent from "./Components/NavbarComponent";
import Categories from "./Components/Categories";
import FooterComponent from "./Components/FooterComponent";
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <hr />
      <Categories />
      <hr />
      <Home/>
      <FooterComponent/>
      <hr />
      
    </div>
   
  );
}

export default App;
