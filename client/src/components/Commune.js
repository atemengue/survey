/** @format */

import React, { useEffect, useState } from 'react';

function Commune() {
  const [communes, setCommunes] = useState([]);

  const fetchCommunes = () => {
    fetch('http://localhost:3000/api/structures', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCommunes(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {communes.map((commune, index) => {
            return (
              <tr>
                <th scope='row'>{++index}</th>
                <td>{commune.nomStructure}</td>
                <td>
                  <button className='btn btn-danger'>Supprimer</button>
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
