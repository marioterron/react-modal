import React, { Component } from 'react';
import './modal.scss';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: true };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    if (this.state.isOpen) {
      document.getElementById('root').classList.toggle('clipped');
    }

    return (
      <div className={this.state.isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box">{this.props.children}</div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.handleClose} />
      </div>
    );
  }
}
