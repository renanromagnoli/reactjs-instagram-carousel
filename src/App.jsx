// import logo from './logo.svg';
// import './App.css';
// import { instagramFeed } from '../public/api/instagram';

import { useEffect, useState } from "react";
import { instagramFeed } from "./components/instagram";

function App() {

  const [instaFeed, setInstaFeed] = useState()

  function getInstaFeed() {
    return instagramFeed()
  }

  useEffect(() => {
    setInstaFeed(getInstaFeed())
    // console.log(instaFeed)
  }, [])

  return (
    <div></div>
  );
}

export default App;
