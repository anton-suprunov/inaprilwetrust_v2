import React from "react";

import useAlbum from "../../queries/useAlbum";

const Album = ({ album }) => {
  console.log(album);
  const photos = useAlbum(album.key);
  console.log(photos)
  return <div>
    {photos.map(slide => <div>
      {/*<a href={`/static/${p}`}></a>*/}
      {slide['_0'].map(i => <img src={`/photos/${album.key}/${i}.jpg`} style={{maxWidth: '100px'}} />)}
      <br /><br />
      {slide['_1'].map(i => <img src={`/photos/${album.key}/${i}.jpg`} style={{maxWidth: '100px'}} />)}
    </div>)}
  </div>;
}

export default Album;