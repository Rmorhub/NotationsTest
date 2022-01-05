import React, { useState, useEffect } from 'react';
import './index.scss';
import { useLocation } from 'react-router-dom';
import { createNotation, updateNotation } from '../../API/gateWay';
import ModalWindow from '../modal/ModalWindow';

const ActionsNotation = ({ onLoad, editObj }) => {
  console.log(editObj);
  const { pathname } = useLocation();

  const createPath = '/create-notation';
  const direction = pathname === createPath ? 'Create notation:' : 'Edit Notation:';
  const btnText = pathname === createPath ? 'Create' : 'Edit';

  const titleText = editObj.title ? editObj.title : '';
  const descriptionText = editObj.description ? editObj.description : '';

  const [title, setTitle] = useState(titleText);
  const [description, setDescription] = useState(descriptionText);
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = event => {
    setDescription(event.target.value);
  };

  const submit = event => {
    event.preventDefault();
    setModalOpen(true);
  };

  const actionHandler = () => {
    const notationObj = {
      title,
      description,
      date: isChecked ? editObj.date : new Date(),
    };
    if (pathname === createPath) {
      createNotation(notationObj).then(() => onLoad());
    } else {
      updateNotation(editObj.id, notationObj).then(() => onLoad());
    }
  };

  useEffect(() => {
    if (pathname === createPath) {
      setTitle('');
      setDescription('');
    }
  }, [pathname]);

  const checkbox = pathname !== createPath && (
    <label>
      <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
      Edit without change time
    </label>
  );

  return (
    <>
      <section className="action__section">
        <form className="action__form" onSubmit={event => submit(event)}>
          <h3 className="action__form_name">{direction}</h3>
          <label>
            <div className="action__form_title">Title:</div>
            <input
              type="text"
              className="action__form_title-input"
              onChange={event => titleChangeHandler(event)}
              value={title}
              placeholder="Input title..."
              required
            />
          </label>
          <label>
            <div className="action__form_description">Description:</div>
            <textarea
              cols="30"
              rows="10"
              className="action__form_description-input"
              onChange={event => descriptionChangeHandler(event)}
              value={description}
              placeholder="Input description..."
              required
            />
          </label>
          {checkbox}
          <br />
          <button className="action__form_btn">{btnText}</button>
        </form>
      </section>
      {modalOpen && (
        <ModalWindow open={modalOpen} setOpen={setModalOpen} title={title} action={actionHandler}>
          {btnText}
        </ModalWindow>
      )}
    </>
  );
};

export default ActionsNotation;
