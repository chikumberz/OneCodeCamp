import React from 'react'
import '../assests/css/Gallery.css'

const Photography = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mh-800 py-8">
          <h1 className="title-custom mb-5">Photography</h1>
          <p>
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            <br />
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="gallery flex flex-col gap-5 flex-wrap justify-items-stretch items-stretch">
            <div className="gallery-item"><img src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/13260611/pexels-photo-13260611.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/13973602/pexels-photo-13973602.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/12317894/pexels-photo-12317894.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/13965987/pexels-photo-13965987.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/9244258/pexels-photo-9244258.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/7640687/pexels-photo-7640687.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/13918457/pexels-photo-13918457.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/6690416/pexels-photo-6690416.jpeg" alt="" /></div>
            <div className="gallery-item"><img src="https://images.pexels.com/photos/12330055/pexels-photo-12330055.jpeg" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Photography