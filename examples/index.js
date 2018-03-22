import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from '../src';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handleOpenModal}>
          Launch Modal
        </button>
        <Modal isOpen={this.state.showModal}>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
            fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </Modal>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
