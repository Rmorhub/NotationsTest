import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
    transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
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
      <article className="notation">
        <section className="notation__section">
          <h3 className="notation__title">{title}</h3>
          <nav className="notation__nav">
            <IconButton onClick={() => setModalOpen(true)}>
              <DeleteIcon />
            </IconButton>
            <Link to="/edit-notation" className="link__btn" onClick={() => setEditObj(notation)}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton onClick={rollDownHandler}>
              <KeyboardArrowDownIcon style={arrowBtnStyle} />
            </IconButton>
          </nav>
        </section>
        <p className="notation__description" style={desctiptionStyle}>
          {description}
        </p>
      </article>
      {modalOpen && (
        <ModalWindow open={modalOpen} setOpen={setModalOpen} title={title} action={deleteHandler}>
          delete
        </ModalWindow>
      )}
    </>
  );
};

export default Notation;
