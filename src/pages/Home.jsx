import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const GoToAbout =()=>{
        navigate('/about')
    }
  return (
    <div>
        Home
        <button onClick={GoToAbout}>go to about</button>
    </div>
  )
}

export default Home