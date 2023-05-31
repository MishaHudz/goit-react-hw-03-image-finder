import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import { fetchImages } from 'services/images-api';

import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { ButtonLoadMore } from 'components/Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    imageList: [],
    filter: '',
    page: 1,
    loading: false,
    totalHits: 0,
    image: '',
  };

  componentDidUpdate(_, prevState) {
    const { filter, page } = this.state;

    if (prevState.filter !== filter || prevState.page !== page) {
      this.setState({ loading: true });
      this.getImages(page, filter);
    }
  }

  getImages = async (page, inputedString) => {
    const {
      data: { hits, totalHits },
    } = await fetchImages(inputedString, page);
    this.setState({ loading: false });
    this.setState(prev => ({
      totalHits,
      imageList:
        prev.imageList.length !== 0 ? [...prev.imageList, ...hits] : hits,
    }));

    if (totalHits === 0) {
      toast.error('Nothing found');
    }

    if (totalHits !== 0 && !(totalHits > page * 12)) {
      toast.error('You have reached the end of the page');
    }
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  formSubmit = inputedString => {
    if (this.state.filter === inputedString) return;
    this.setState({ filter: inputedString, page: 1, imageList: [] });
  };

  showBigImg = bigImg => {
    this.setState({ image: bigImg });
  };

  hideBigImg = () => {
    this.setState({ image: '' });
  };

  render() {
    const { imageList, loading, page, totalHits, image } = this.state;

    return (
      <>
        <Searchbar formSubmit={this.formSubmit} />
        {imageList.length > 0 && (
          <ImageGallery imageList={imageList} showBigImg={this.showBigImg} />
        )}

        {loading && <Loader />}

        {imageList.length > 0 && totalHits > page * 12 && (
          <ButtonLoadMore changePage={this.changePage} />
        )}

        {}
        {image && <Modal bigPoster={image} hideBigImg={this.hideBigImg} />}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
