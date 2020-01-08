import React, { useState } from 'react';


const { Provider, Consumer } = React.createContext();

function Parent () {
  const [value, setValue] = useState('');
  return (
    <>
    <input value={value} type='text' onChange={e => setValue(e.target.value)} />
    <Provider value={value}>
      <Child />
    </Provider>
    </>
  )
}

function Child() {
  return <Consumer>{value => <p>Child: {value}</p>}</Consumer>
}

export default () => (
  <Parent> 
    <Child />
  </Parent>
)