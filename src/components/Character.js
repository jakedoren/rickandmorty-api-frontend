import React, {useState, useEffect} from 'react'
import './Character.css'
import axios from 'axios'

const Character = () => {
    const [apiData, setApiData] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get('https://myrickandmorty-api.herokuapp.com/api/quotes/')
      .then(res => setApiData(res))
  }, [])

  function updateQuote() {
    if(current < apiData.data.length-1) {
      setCurrent(prev => prev+1)
    }
    else {
      setCurrent(0)
    }
  }
    return (
      <div className="character-container">
        <div className="name-wrap">
            {apiData ? <h1> {apiData.data[current].name} </h1> : 'loading...'}
        </div>
        <div className='img-wrap'>
          {apiData ? <img className="img" src={apiData.data[current].image} /> : 'loading...'}
        </div>
        <div className='quote-wrap'>
          {apiData ? 
          <div className="quote-button-wrap">
           <p>"{apiData.data[current].quote}"</p> 
           <button className="character-btn" onClick={updateQuote}>Next Character</button>
          </div> : 'loading...'}
        </div>
      </div> 
    )
}

export default Character
