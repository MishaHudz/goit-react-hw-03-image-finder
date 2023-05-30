import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressEscape);
  }

  handlePressEscape = evt => {
    if (evt.code !== 'Escape') return;
    this.props.hideBigImg();
  };

  handleBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.hideBigImg();
    }
  };

  render() {
    return (
      <>
        <div className={style.overlay} onClick={this.handleBackdrop}>
          <div className={style.modal}>
            <img src={this.props.bigPoster} alt="" />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  bigPoster: PropTypes.string.isRequired,
  hideBigImg: PropTypes.func.isRequired,
};
