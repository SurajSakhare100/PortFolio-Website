import React from 'react'

function Image({src}) {
  return (
    <div>
      <img
        src={src}
        alt="Hover Me"
        className="clip-path-circle hover:clip-path-full transition-all duration-400 ease-in-out"
      />
    </div>
  )
}

export default Image
