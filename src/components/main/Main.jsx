import React, { useState, useEffect } from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import Notation from '../notation/Notation';
import ActionsNotation from '../action-notations/ActionsNotation';
import { getNotations } from '../../API/gateWay';

const Main = () => {
  const [notations, setNotations] = useState([]);
  const [editObj, setEditObj] = useState({});

  const onLoad = () => getNotations().then(result => setNotations(result));

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <main className="main">
      <section className="main__section">
        <Route exact path="/">
          {notations.map(notation => (
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
