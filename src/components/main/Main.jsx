import React, { useState, useEffect } from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import Notation from '../notation/Notation';
import ActionsNotation from '../action-notations/ActionsNotation';
import { getNotations } from '../../API/gateWay';

const Main = () => {
  const [notations, setNotations] = useState([]);
  const [editObj, setEditObj] = useState({});
  const [sortBy, setSortBy] = useState(true);

  const buttonText = sortBy ? 'Show Later First' : 'Show recent';

  const onLoad = () => getNotations().then(result => setNotations(result));

  const handleSort = () => {
    setNotations(notations.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setSortBy(!sortBy);
  };

  useEffect(() => {
    onLoad();
  }, []);

  console.log(notations);

  return (
    <main className="main">
      <section className="main__section">
        <Route exact path="/">
          {notations
            .slice()
            .reverse()
            .map(notation => (
              <Notation
                key={notation.id}
                notation={notation}
                onLoad={onLoad}
                setEditObj={setEditObj}
              />
            ))}
        </Route>
        <Route exact path="/:direction">
          <ActionsNotation onLoad={onLoad} editObj={editObj} />
        </Route>
        <button className="main___sort-btn" onClick={handleSort}>
          {buttonText}
        </button>
      </section>
    </main>
  );
};
export default Main;
