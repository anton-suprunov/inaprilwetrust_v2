import React, { useReducer, useEffect } from "react";

function countReducer(state, action) {
  console.log('state', state)
  switch (action.type) {
    case 'increase':
      return state + 1;
    case 'reset': 
      return 0;
  }
}

function reducer(state, action) {
  const newState = { ...state };
  console.log(state)
  switch (action.type) {
    case 'tick':
    if (newState.left < newState.totalLeft-1) {
      newState.left = newState.left + 1; 
    } else {
      newState.left = 0;
    }
    if (newState.right < newState.totalRight-1) {
      newState.right = newState.right + 1; 
    } else {
      newState.right = 0;
    }
    return newState;
  }
}

const SlideItem = ({ slide, albumKey }) => {  
  const [state, dispatch] = useReducer(reducer, { left: 0, right: 0, totalLeft: slide['_0'].length, totalRight: slide['_1'].length })  
  
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearInterval(id);
  }, [])
  
  return <div className="album__slide">
    <div className="album__slide-part">
      {slide['_0'].map((j,k) => (
        state.left === k ? <img key={`slide-1-${j}`} src={`/photos/${albumKey}/${j}.jpg`} className={`album__img album__img_${k}`} /> : null
      ))}
    </div>
    <div className="album__slide-part">
      {slide['_1'].map((j,k) => (
        state.right === k ? <img key={`slide-2-${j}`} src={`/photos/${albumKey}/${j}.jpg`} className={`album__img album__img_${k}`} /> : null
      ))}
    </div>
  </div>
}

export default SlideItem;