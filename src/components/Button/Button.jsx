import PropTypes from 'prop-types';
import style from './Button.module.css';

export function ButtonLoadMore({ changePage }) {
  return (
    <button className={style.button} onClick={changePage}>
      Load more
    </button>
  );
}

ButtonLoadMore.propTypes = {
  changePage: PropTypes.func.isRequired,
};
