import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App =()=>{
  const pageSize = 6;
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="General" pageSize={pageSize} country="us" category="General" />}></Route>
            <Route exact path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={pageSize} country="us" category="Business" />}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={pageSize} country="us" category="Entertainment" />}></Route>
            <Route exact path="/Health" element={<News setProgress={setProgress} key="Health" pageSize={pageSize} country="us" category="Health" />}></Route>
            <Route exact path="/Science" element={<News setProgress={setProgress} key="Science" pageSize={pageSize} country="us" category="Science" />}></Route>
            <Route exact path="/Sports" element={<News setProgress={setProgress} key="Sports" pageSize={pageSize} country="us" category="Sports" />}></Route>
            <Route exact path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={pageSize} country="us" category="Technology" />}></Route>

          </Routes>
        </BrowserRouter>
      </>
    )
  }

export default App