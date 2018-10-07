import React from 'react';
import Contacts from './components/Contacts'
import Header from './components/Header';

import { Provider } from './context'

const App = () => {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact360" />
        <Contacts />
      </div>
    </Provider>
  )
}

export default App;