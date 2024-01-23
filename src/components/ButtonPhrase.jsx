import React from 'react';
import phrases from '../utils/phrases.json';
import randomindex from '../services/randomindex';

const ButtonPhrase = ({setQuote}) => {

    const sentence = randomindex(phrases);
    
    const handleButton = () => {
        setQuote(sentence)
    }

  return (
    <button onClick={handleButton}>probar mi suerte</button>
  )
}

export default ButtonPhrase