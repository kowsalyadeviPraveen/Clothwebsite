import './App.css';
import Home from './Pages/home';
function App() {
  return (
    <div className="App">
       <NavbarComponent />
      <hr />
      <Categories />
      <hr />
      <Home/>
      <FooterComponent />
      <hr />
      
    </div>
   
  );
}

export default App;
