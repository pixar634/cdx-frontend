import React, { useState,useEffect,lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import store from './store'
import { Provider } from "react-redux";
const Layout = lazy(() => import('./containers/Layout'))
const StepperForm = lazy(() => import('./components/StepperForm'))

function App() {

const [data , setData] = useState([{}])

useEffect(() =>{
  fetch("/all").then (
  res => res.json()
  ).then(
    data => {
      setData(data)
      console.log(data)
    }
  )

},[])

  return (
    <>
    {/* We will need to check the structure of store  */}
      {/* <Provider store={store}> */}
        <Router>
      
          <Routes>
            
            {/* Place new routes over this */}
            {/* <Route path="/app" element={<Layout/>} /> */}
            <Route path="/*" element={<Layout/>} />
            {/* If you have an index page, you can remothis Navigate */}
           
          </Routes>
          {/* <Navigate exact from="/" to="/app" /> */}
        </Router>      {/* </Provider> */}

    </>
  );
}

export default App;
