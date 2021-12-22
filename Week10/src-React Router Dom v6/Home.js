// import {useState} from 'react';
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  let navigate = useNavigate();
  const rediretTO = () => {
    navigate(`/about`);
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={rediretTO}>About</button>
    </>
  )
}
export default Home
