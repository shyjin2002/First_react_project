
// import './App.css';

import {Routes,Route,BrowserRouter,Link} from "react-router-dom";


// import Home2 from "./components/Home2";
import Contact from "./components/Contactus";
import Todo from "./components/Todo"
import Reacthook from "./components/ReactHook";




function App() {
  // const isdooropened=true;
  // list 
  // const homelist=[
  //   {name:"shyjin",color:"black"},
  //   {name:"shijo",color:"white"},
  //   {name:"ramesh",color:"red"}
  // ]
  // const name=`ramesh`
  // const color=`black`
  //  const homeinfo={name: "shyjin", color:"black"}
//   const Homename=['shyjin','ramesh','shijo','shajan'];

  return (
    <div className="App">

    {/* <Home name={name} color={color} /> */}

    {/* ternary operator */}
    {/* {isdooropened ?
    <Home home={homeinfo} />: null} */}
   {/* and operator */}
    {/* {isdooropened &&
    <Home home={homeinfo} />}
    <About /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/home/home1" element={<Home1/>}></Route>
        <Route path="/home/home2" element={<Home2/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter> */}
        <BrowserRouter>
        <div className="App">
            <ul className="App-header">
           
            <li>
                <Link to="/reacthook">React Hook</Link>
            </li>
            
            <li>
                <Link to="/todo">Todo list</Link>
            </li>
            </ul>
        <Routes>
               
                <Route exact path='/reacthook' element={<Reacthook />}></Route>
                <Route exact path='/contact' element={<Contact />}></Route>
                <Route exact path='/todo' element={<Todo />}></Route>
        </Routes>
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
