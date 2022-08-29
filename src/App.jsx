// import logo from './logo.svg';
// import './App.css';
// import { instagramFeed } from '../public/api/instagram';

import { useEffect, useState } from "react";
import { Carousel } from "./components/carousel";
import { instagramFeed } from "./components/instagram";

function App() {

  const [instaFeed, setInstaFeed] = useState()

  // function getInstaFeed() {
  //   return instagramFeed()
  // }
  instagramFeed()

  useEffect(() => {
    const feed = instagramFeed()
    setInstaFeed(feed)
    // console.log(instaFeed)
  }, [])

  

  return Carousel(instaFeed);
}

export default App;
