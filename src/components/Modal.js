import React from 'react';
import './modal.scss';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: this.props.showModal };
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleClose() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    if (this.state.isOpen) {
      document.body.classList.add('is-clipped');
    } else {
      document.body.classList.remove('is-clipped');
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
