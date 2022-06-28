import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodGallary from "./pages/food-gallery/FoodGallery"


function App() {
  return (
    <div className="App">
     {/* <Food/> */}
     <FoodGallary/>
    </div>
  );
}

export default App;
