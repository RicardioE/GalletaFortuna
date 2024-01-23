
import './App.css';
import RandomPhrases from './components/RandomPhrases';
import phrases from './utils/phrases.json';
import randomindex from './services/randomindex';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';


function App() {

  const sentence = randomindex(phrases);
  
  const [quote, setQuote] = useState(sentence);
  
  return (
   <div className='container'>
    <h1>Galleta de la fortuna</h1>
    <ButtonPhrase
      setQuote={setQuote}
    />
    <RandomPhrases
      quote={quote}
    />
   </div>
  )
}

export default App
