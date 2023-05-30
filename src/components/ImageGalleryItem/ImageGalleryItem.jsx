import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ webformatURL, largeImageURL, showBigImg }) {
  return (
    <li
      className={style.imageGalleryItem}
      onClick={() => showBigImg(largeImageURL)}
    >
      <img src={webformatURL} alt="" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showBigImg: PropTypes.func.isRequired,
};
