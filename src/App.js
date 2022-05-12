import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('white');

  //for alert
  const [alert, setAlert] = useState('');
  const [alertcol, setAlertCol] = useState('');



  function alertfunc(prototype, color) {
    setAlert(prototype);
    if (color === 'yellow') {
      setAlertCol('warning');
    }
    else {
      setAlertCol('success');
    }

    document.getElementById('alert').style.display = 'block';



    setTimeout(() => {
      document.getElementById('alert').style.display = 'none';
    }, 5000);
  }




  function toggle() {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#444444';
    }
  }

  return (
    <>

     
        
          
        
     <Router>
        <Navbar titles="TextUtils" aboutText="About TextUtils" mode={mode} toggle={toggle} />
        <Alert alert={alert} alertcol={alertcol} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} alertfunc={alertfunc} />}></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </Router>







    </>
  );
}
export default App;

/*<Navbar titles="TextUtils" aboutText="About TextUtils" mode={mode} toggle={toggle} />
        <Alert alert={alert} alertcol={alertcol} />
       
          <TextForm heading="Enter your text to analyze" mode={mode} alertfunc={alertfunc} />
*/

