import PropTypes from "prop-types"
import { FC } from "react"

interface ImageCmpProps {
  width: string;
  height: string;
  alt: string;
  src: string;
}

const ImageCmp: FC<ImageCmpProps> = ({ width, height, alt, src }) => {

  return (
    <>
      <img
        width={width}
        height={height}
        alt={alt}
        src={src} />
    </>
  )
}

ImageCmp.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default ImageCmp