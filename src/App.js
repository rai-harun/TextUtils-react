import './App.css';
import { useState, useEffect } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Contanct from './components/Contanct';
// import PageNotFound from './components/PageNotFound';


function App() {
  const [mode, setMode] = useState(); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState('grey');
  const [textareaColor, setTextareaColor] = useState('black')


  // console.log("document.cookie: ",document.cookie)
  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
    let cookies = document.cookie.split("; ")
    // console.log("Cookies: ", cookies)
    cookies.forEach((cookie) => {
      // console.log("Cookie: ", cookie)
      if (cookie === "navbarmode=light") {
        // console.log("document.cookie: ", document.cookie)
        let saved_cookie = cookie.split("=")
        setMode(saved_cookie[1])
        setThemeColor('white')
        setTextareaColor('grey')
        // console.log("saved_cookie[1]: ", saved_cookie[1])
        document.body.style.backgroundColor = themeColor
      } else if (cookie === "navbarmode=dark") {
        console.log("cookie: ", cookie)
        let saved_cookie = cookie.split("=")
        setMode(saved_cookie[1])
        setThemeColor(themeColor)
        setTextareaColor(textareaColor)
        // console.log("saved_cookie[1]: ", saved_cookie[1])
        document.body.style.backgroundColor = themeColor
      }
      else {
        setMode("light")
      }
    }, [themeColor])
  })


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = themeColor
      // document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.cookie = "navbarmode=dark";
      document.title = "TextUtils - Dark Mode"
      setThemeColor('grey')
      setTextareaColor('black')

      setInterval(() => {
        document.title = "Dark mode is great"
      }, 2000);

      setInterval(() => {
        document.title = "Check out Light mode once"
      }, 1500);
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.cookie = "navbarmode=light";
      document.title = "TextUtils - Light Mode"
    }
  }

  // color Handling
  const colorChangeHandle = () => {
    let seletedColor = document.getElementById("colorCode").value;
    setThemeColor(seletedColor)

    // document.body.style.backgroundColor = themeColor
    // document.cookie =`themeColor=${themeColor}`

    let randomColorCode = '#';
    let hashRemovedSelectedColor = seletedColor.substr(1)

    for (let i = 1; i < hashRemovedSelectedColor.length + 1; i++) {
      randomColorCode += hashRemovedSelectedColor[Math.floor(Math.random() * 6)]
    }
    setTextareaColor(randomColorCode)
  }

  return (
    <>
    {/* <Router> */}
      <Navbar brand_name="TextUtils" mode={mode} toggleMode={toggleMode} colorHandle={colorChangeHandle} />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      {/* <Switch> */}
        {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} textareaColor={textareaColor} />
        {/* </Route> */}
        {/* <Route exact path="/about"> */}
          {/* <About mode={mode}/> */}
        {/* </Route> */}
        {/* <Route exact path="/contact"> */}
          {/* <Contanct mode={mode}/> */}
        {/* </Route> */}
        {/* <Route exact> */}
          {/* <PageNotFound /> */}
        {/* </Route> */}
      {/* </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
