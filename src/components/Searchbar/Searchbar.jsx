import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.input.trim()) {
      this.props.formSubmit(this.state.input);
      this.setState({ input: '' });
      return;
    }

    toast.error(' Enter text to search');
  };

  handleInputChange = evt => {
    this.setState({ input: evt.target.value });
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.searchForm_button}>
            <span className="button-label"></span>
          </button>

          <input
            className={style.searchForm_input}
            type="text"
            autoComplete="off"
            name="findFild"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.input}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
