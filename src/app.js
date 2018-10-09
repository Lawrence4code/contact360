import React from 'react';
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context'

const App = () => {
  return (
    <Provider>
      <div className="App">
        <Header branding="Contact360" />
        <AddContact />
        <Contacts />
      </div>
    </Provider>
  )
}

export default App;