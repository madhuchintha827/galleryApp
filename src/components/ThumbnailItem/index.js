// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    updateActiveImageId(id)
  }

  const isActiveChangeBackground = isActive ? 'change-background' : 'thumbnail '

  return (
    <>
      <li className="thumbnail-list">
        <button className="button" type="button" onClick={onClickImage}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`${isActiveChangeBackground}`}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
