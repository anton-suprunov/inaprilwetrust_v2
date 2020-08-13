import React from "react";

import useAlbum from "../../queries/useAlbum";

const Album = ({ album }) => {
  console.log(album);
  const photos = useAlbum(album.key);
  
  return <div>
    
  </div>;
}

export default Album;