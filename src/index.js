import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FifthsForm from './intervals/FifthsForm';
import FourthsForm from './intervals/FourthsForm';
import ThirdsForm from './intervals/ThirdsForm';
import IntervalsIndex from './intervals/IntervalsIndex';
import HomePage from './common/HomePage';
import DiatonicChordsMajorForm from './chords/DiatonicChordsMajorForm';
import ChordsIndex from './chords/ChordsIndex';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/intervals/fifths" element={<FifthsForm />}/>
        <Route path="/intervals/fourths" element={<FourthsForm />}/>
        <Route path="/intervals/thirds" element={<ThirdsForm />}/>
        <Route path="/intervals" element={<IntervalsIndex />}/>

        <Route path="/chords" element={<ChordsIndex />} />
        <Route path="/chords/diatonic/major" element={<DiatonicChordsMajorForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
