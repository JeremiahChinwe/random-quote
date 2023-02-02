import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaTwitter } from 'react-icons/fa';
import { CgTwitter } from 'react-icons/cg';
import './App.css';



function App() {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [hex, setHex] = useState("#fff");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(response => response.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
        setHex("#" + Math.floor(Math.random() * 16777215).toString(16));
      })
  }, []);

  let NewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(response => response.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
        setHex("#" + Math.floor(Math.random() * 16777215).toString(16));
      })

  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center transition-all duration-1000' style={{ backgroundColor: `${hex}` }}>
      <div id="quote-box" className='border bg-white mx-auto sm:w-[45%] sm:min-h-[30%] p-8 rounded'>
        <div className='flex'>
        <FaQuoteLeft size={35} style={{ color: `${hex}` }}/>
        <p id='text' className='font-bold text-2xl pb-8 flex items-center justify-center text-center indent-5 transition-all duration-1000' style={{ color: `${hex}` }}>{quote}</p>
        </div>
        
        <p id='author' style={{ color: `${hex}` }} className="flex justify-end">- {author}</p>
        <div className='flex flex-row justify-between items-center'>
          <div id="tweet-quote" className='flex items-center gap-2 mt-5'>
            <button id='tweet-quote' className='rounded hover:opacity-75' style={{ backgroundColor: `${hex}` }}><FaTwitter size={35} className="cursor-pointer text-white p-2" /></button>
            <button id='tweet-quote' className='rounded hover:opacity-75' style={{ backgroundColor: `${hex}` }}><CgTwitter size={35} className="cursor-pointer text-white p-2" /></button>
          </div>
          <button onClick={NewQuote} id="new-quote" style={{ backgroundColor: `${hex}` }} className="p-2 rounded mt-5 text-white hover:opacity-75">New quote</button>
        </div>
      </div>
      <p className='text-white mt-3'>By Jeremiah</p>
    </div>
  )
}

export default App;
