import React, { useState, useEffect, useRef, useReducer } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import useAlbum from "../../queries/useAlbum";
import SlideItem from "./SlideItem";

import "./Album.scss"

const preloadImages = async (arr) => {
  const queue = arr.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    })
  });

  return await Promise.all(queue);
}

const Album = ({ album }) => {
  const [activeSlide, setActiveSlide] = useState(0);
    
  const photos = useAlbum(album.key);
  useEffect(() => {
    const init = async () => {
      const preloadArray = photos.map(slide => {
        return [...slide['_0'], ...slide['_1']].map(i => `/photos/${album.key}/${i}.jpg`);
      }).flat();
      //console.log(preloadArray)
      await preloadImages(preloadArray);
      console.log('--IMAGES LOADED--')
    }
    init();
  }, []);
  
  const onSlideChange = ({ currentIndex }) => {
    setActiveSlide(currentIndex)
  }

  const slides = photos.map((slide, i) => (
    <div key={`slide-${i}`}><SlideItem key={`slide-item-${i}`} slide={slide} albumKey={album.key} /></div>
  ));
  
  return <div className="album">
    <AwesomeSlider organicArrows={false} 
      bullets={false} 
      //selected={activeSlide}
      onTransitionEnd={onSlideChange}
    >
      {slides}
    </AwesomeSlider>
  </div>;
}

export default Album;