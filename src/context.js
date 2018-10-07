import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  console.log(state);
  console.log(action.payload);

  switch (action.type) {
    case 'DELETE_CONTACT':
      console.log('DELETE CONTACT TRIGGERED.')
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          console.log(contact.id, action.payload);
          contact.id !== action.payload;
        })
      }

    default:
      console.log('DEFAULT TRIGGERED.')
      return state;
  }
}

export class Provider extends Component {

  state = {
    contacts: [
      { id: '1', name: 'John Doe', email: 'Johndoe@gmail.com', phone: '555-555-5555' },
      { id: '2', name: 'Jane Doe', email: 'Janed@gmail.com', phone: '555-111-1111' },
      { id: '3', name: 'Peter Doe', email: 'Pete@gmail.com', phone: '555 -333-4444' },
    ],
    dispatch: action => {

      this.setState(state => {
        console.log(reducer(state, action));
        return reducer(state, action)
      })
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;