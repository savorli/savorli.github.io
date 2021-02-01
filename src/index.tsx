import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Basic} from './pages/basic';
import {Background} from './pages/background';
import reportWebVitals from './reportWebVitals';
import {Footer} from "./Footer";

ReactDOM.render(
    <React.StrictMode>
      <main className="flex-shrink-0">
        <div className="container-xl">
          <h3 className="mt-5">Personlig læring danske noter</h3>

          <ul className="nav nav-tabs" id="navMainTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#basic">Grundlæggende (Basics)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#background">Baggrund (Simple conversations)</a>
            </li>

          </ul>
          <div id="navMainTabContent" className="tab-content">
            <Basic/>
            <Background/>
          </div>
        </div>
      </main>
      <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
