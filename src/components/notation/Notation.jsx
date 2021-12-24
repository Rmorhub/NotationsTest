import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import ModalWindow from '../modal/ModalWindow';
import { deleteNotation } from '../../API/gateWay';

const Notation = ({ notation, onLoad, setEditObj }) => {
  const { title, description, id } = notation;
  const [active, setActive] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const desctiptionStyle = {
    display: active ? 'block' : 'none',
  };

  const arrowBtnStyle = {
    transform: active ? 'rotate(-180deg)' : 'rotate(-0deg)',
    transition: 'transform 150ms ease',
  };

  const rollDownHandler = () => {
    setActive(!active);
  };

  const deleteHandler = () => {
    deleteNotation(id)
      .then(() => setModalOpen(false))
      .then(() => onLoad());
  };

  return (
    <>
      {modalOpen && (
        <ModalWindow open={modalOpen} setOpen={setModalOpen} title={title} action={deleteHandler}>
          Delete
        </ModalWindow>
      )}
      <article className="notation">
        <section className="notation__section">
          <h3 className="notation__title">{title}</h3>
          <nav className="notation__nav">
            <button className="notation__btn" onClick={() => setModalOpen(true)}>
              <i className="fas fa-trash" />
            </button>
            <button className="notation__btn" onClick={() => setEditObj(notation)}>
              <Link to="/edit-notation" className="link__btn">
                <i className="fas fa-edit" />
              </Link>
            </button>
            <button className="notation__btn" onClick={rollDownHandler}>
              <i className="fas fa-chevron-up" style={arrowBtnStyle} />
            </button>
          </nav>
        </section>
        <p className="notation__description" style={desctiptionStyle}>
          {description}
        </p>
      </article>
    </>
  );
};

export default Notation;
