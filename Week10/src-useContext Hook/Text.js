import React, {useContext} from 'react';
import {AppContext} from './App';
 const Text = (props) => {
  const {text} = useContext(AppContext);
  return(
    <>
      <h1>Text Component</h1>
      {text}
    </>
  )
}
export default Text;
