import React, { useEffect } from "react";

import useAlbum from "../../queries/useAlbum";

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
  console.log(album);
  const photos = useAlbum(album.key);
  useEffect(() => {
    const init = async () => {
      const preloadArray = photos.map(slide => {
        return [...slide['_0'], ...slide['_1']].map(i => `/photos/${album.key}/${i}.jpg`);
      }).flat();
      console.log(preloadArray)
      await preloadImages(preloadArray);
      console.log('--IMAGES LOADED--')
    }
    init();
  }, []);
  


  //console.log(photos)
  return <div>
    {
      photos.map((slide, i) => <div key={`slide-${i}`}>
        {slide['_0'].map(j => <img key={`slide-1-${j}`} src={`/photos/${album.key}/${j}.jpg`} style={{maxWidth: '100px'}} />)}
        <br /><br />
        {slide['_1'].map(j => <img key={`slide-2-${j}`} src={`/photos/${album.key}/${j}.jpg`} style={{maxWidth: '100px'}} />)}
      </div>)
    }
  </div>;
}

export default Album;