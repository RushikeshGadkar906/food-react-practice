import Navbar from './Component/navbar/Navbar';
import AllProducts from './Component/navbar/AllProducts';
import './App.css';
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container">
        <AllProducts />
      </div>
    </div>
  );
}

export default App;
