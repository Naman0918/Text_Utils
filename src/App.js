import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null); 

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },2000)
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "cyan"
      // document.body.style.Color = "black"
      showAlert("Light mode is enabled", "success");



    }
  }
  return (
  <>
    <Router>
    {/* Here we just return the nav bar in app where as the 
    code is in component of navbar */}
   <Navbar title="TextUtils" aboutText="AboutUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="conatiner my-3">
    <Switch>
         <Route exact path ="/about">
         <About/>
         </Route>
         <Route exact path ="/">
         <TextForm showAlert={showAlert} heading ="Enter the text to Analyze" mode={mode}/>
         </Route>
      </Switch>
     </div>
     </Router>
  </>
  );
}

export default App;
