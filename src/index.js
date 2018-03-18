import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Modal from './Modal';

import './styles.scss';

render(
  <Fragment>
    <button className="btn">Launch Modal</button>
    <Modal>
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
        fringilla egestas. Nullam condimentum luctus turpis.
      </p>
    </Modal>
  </Fragment>,
  document.getElementById('root')
);
