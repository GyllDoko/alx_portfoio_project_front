import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'flag-icon-css/css/flag-icons.min.css'
import { InfinitySpin } from "react-loader-spinner"

import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// translation paths 
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

//axios config
axios.defaults.baseURL = "http://127.0.0.1:8000" //"https://dive-original-app-backend.herokuapp.com"//  api 
// axios.defaults.headers.common["Authorization"] = "Bearer gtvthkceyzqvuzevhzeezulvyjezjeceucecececeze"
axios.defaults.headers.common['Content-Type'] = 'application/json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['fr', 'en'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    }
  });

const loader = (
  <div className="" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <InfinitySpin
      width='200'
      color="blue"
    />
  </div >

)


ReactDOM.render(
  <Suspense fallback={loader}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
