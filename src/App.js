import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/store';
import Container from './components/Container';

const App = () => {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Container/>
        </Provider>
    </BrowserRouter>
  );
}

export default App;


