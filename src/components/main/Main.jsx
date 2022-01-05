import React, { useState, useEffect } from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import Notation from '../notation/Notation';
import ActionsNotation from '../action-notations/ActionsNotation';
import { getNotations } from '../../API/gateWay';

const Main = () => {
  const [notations, setNotations] = useState([]);
  const [editObj, setEditObj] = useState({});
  const [isLatest, setIsLatest] = useState(true);

  const btnShowText = isLatest ? 'Show later first' : 'Show recent first';

  const onLoad = () => getNotations().then(result => setNotations(result));

  const handleSort = () => {
    setIsLatest(!isLatest);
    setNotations(prev => prev.slice().reverse());
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <main className="main">
      <section className="main__section">
        <Route exact path="/">
          {notations.length >= 2 && (
            <button className="main__sort-btn" onClick={handleSort}>
              {btnShowText}
            </button>
          )}
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
      </section>
    </main>
  );
};
export default Main;
