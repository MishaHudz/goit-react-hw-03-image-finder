import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export function ImageGallery({ imageList, showBigImg }) {
  return (
    <ul className={style.imageGallery}>
      {imageList.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            largeImageURL={image.largeImageURL}
            webformatURL={image.webformatURL}
            showBigImg={showBigImg}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  showBigImg: PropTypes.func.isRequired,
  imageList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
