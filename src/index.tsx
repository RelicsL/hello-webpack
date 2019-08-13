import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './style/base.scss';
import { App } from './containers/App';

const rootEl = document.getElementById('root');

function renderApp() {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    rootEl
  )
}

renderApp();