import React, { Component, Fragment } from 'react';

import Contact from './Contact';
import { Consumer } from '../context'

class Contacts extends Component {


  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value
          console.log(contacts)
          return (
            <Fragment>
              {contacts.map(contact => <Contact
                key={contact.id}
                {...contact}
              />)}
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts;