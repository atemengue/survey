/** @format */

import React, { useEffect, useState } from 'react';
import DB from '../db';

function Commune() {
  const [db, setDb] = useState(new DB('survey'));

  const [communes, setCommunes] = useState([]);

  const fetchCommunes = async () => {
    const communes = await db.getAllCommunes();
  };

  useEffect(() => {
    fetchCommunes();
  }, []);

  return (
    <div className='container' style={{ marginTop: '100px' }}>
      <h3>Listes des Communes</h3>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Noms</th>
            <th scope='col'>Document de vision stratégique de la commmune</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {communes.map((commune, index) => {
            return (
              <tr>
                <th scope='row'>{++index}</th>
                <td>{commune.nomStructure}</td>
                <td>{commune.autreDocument}</td>
                <td>
                  <button
                    // onClick={() => delete_structure(commune.idStructure)}
                    className='btn btn-danger'
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Commune;
