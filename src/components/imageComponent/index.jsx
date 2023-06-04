import { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'

export const ImageComponent = ({ src, hash, compClassName }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src
  }, [src])

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash hash={hash} width={5000} height={5000} punch={1} />
      </div>
      <img
        src={src}
        loading='lazy'
        alt={src}
        style={{ display: !imageLoaded ? 'none' : 'inline' }}
        className={compClassName}
      />
    </>
  )
}
