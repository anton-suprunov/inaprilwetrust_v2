import React from "react";

import useAlbums from "../../queries/useAlbums";

const Album = (props) => {
  const albums = useAlbums();
  const album = albums.find(a => a.node.key === props.albumKey);

  console.log(props, album);
  
  return <div>
    
  </div>;
}

export default Album;