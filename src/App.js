import './App.css';


import BodyOfContent from "./components/Frontend/Body/Body";
import Home from "./components/Frontend/Home";
import Navbar from "./components/Frontend/NavBar/Navbar";




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <BodyOfContent />
    </div>
  );
}


export default App;