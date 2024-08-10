import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import NavbarMobile from './components/navbarmobile';
import { useEffect, useState } from 'react';
// what events can trigger component to render
// state update

function App() {
  const [visible, SetVisible] = useState(true)
  let company_name = "COMPANY"
  const logWidth = () => {
    console.log(window.innerWidth)
    if(window.innerWidth < 380){
      SetVisible(true)
    } else {
      SetVisible(false)
    }
  }

  useEffect(() => {

    window.addEventListener("resize", logWidth)

  },[])
 
  return (
    <div>
      {visible === false &&
        <Navbar companyname={company_name}></Navbar>
      }
      {visible === true &&
         <NavbarMobile companyname={company_name}></NavbarMobile>
      }  
    </div>
  );
}

export default App;
