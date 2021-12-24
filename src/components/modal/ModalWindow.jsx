import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const ModalWindow = ({ setOpen, title, action, children }) => (
  <section className="modal">
    <section className="modal__section">
      <h2 className="modal__text">
        Are you sure what you want to {children.toLowerCase()}: {title}?
      </h2>
      <nav className="modal__nav">
        <button onClick={action} className="modal__nav_item">
          <Link to="/" className="modal__nav_item-link">
            {children}
          </Link>
        </button>
        <button onClick={() => setOpen(false)} className="modal__nav_item">
          Close
        </button>
      </nav>
    </section>
  </section>
);

export default ModalWindow;
