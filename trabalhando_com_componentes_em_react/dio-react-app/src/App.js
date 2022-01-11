import React from 'react';
import Item from './components/item';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <Item>Item 1</Item>
      </ul>
      <Card/>
    </div>
  )

}

export default App