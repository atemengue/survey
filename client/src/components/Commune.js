/** @format */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Commune(props) {
  const { db } = props;
  const [communes, setCommunes] = useState([]);

  const fetchCommunes = async () => {
    const data = await db.getAllCommunes();
    setCommunes(data.rows);
  };

  const delete_structure = async (idCommune) => {
    console.log(idCommune);
    const response = await db.deleteCommune(idCommune);
    if (!response.status === 400) {
      toast.success('Commune supprime');
      fetchCommunes();
    } else {
      toast.error('Erreur de supprimer');
    }
  };

  useEffect(() => {
    fetchCommunes();
  }, []);

  return (
    <div className='container' style={{ marginTop: '100px' }}>
      {console.log(communes)}
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
          {communes.map(({ doc, id }, index) => {
            return (
              <tr>
                <th scope='row'>{++index}</th>
                <td>{doc.nomStructure}</td>
                <td>{doc.autreDocument}</td>
                <td>
                  <button
                    onClick={() => delete_structure(id)}
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
