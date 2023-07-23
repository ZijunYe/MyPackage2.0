import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import enTranslation from './translations/en.json';
import frTranslation from './translations/fr.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18next.init({
  resources,
  lng: 'en', // Set the default language here
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

