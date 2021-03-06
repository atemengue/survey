/** @format */

import React, { useEffect, useState } from 'react';
import {
  degres,
  quizSection2,
  quizSection3,
  quizSection4,
  quizSection5,
} from './QuizData';

function Statistique() {
  const [table1, setTable1] = useState({});
  const [table2, setTable2] = useState({});
  const [table3, setTable3] = useState({});
  const [table6, setTable6] = useState(null);
  const [table7, setTable7] = useState(null);
  const [table8, setTable8] = useState(null);
  const [table9, setTable9] = useState(null);

  function sum(obj) {
    var sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  const fetchTable1 = () => {
    fetch('http://localhost:3000/api/structures/table1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable1(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTable2 = () => {
    fetch('http://localhost:3000/api/structures/table2', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable2(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTable3 = () => {
    fetch('http://localhost:3000/api/structures/table3', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable3(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTable6 = () => {
    fetch('http://localhost:3000/api/structures/table6', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable6(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTable7 = () => {
    fetch('http://localhost:3000/api/structures/table7', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable7(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTable8 = () => {
    fetch('http://localhost:3000/api/structures/table8', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable8(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchTable9 = () => {
    fetch('http://localhost:3000/api/structures/table9', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTable9(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTable1();
    fetchTable2();
    fetchTable3();
    fetchTable6();
    fetchTable7();
    fetchTable8();
    fetchTable9();
  }, []);

  return (
    <>
      {console.log(table9)}
      <div className='container' style={{ marginTop: '100px' }}>
        <div>
          <h3>
            Tableau 1: Situation des CTD selon qu'elles disposent ou non d'un
            PCD
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Situation</th>
                <th scope='col'>Valeur Absolue</th>
                <th scope='col'>Valeur Relative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Communes disposant d'un PCD</th>
                <td>{table1.with_pcd}</td>
                <td>{table1.with_pcd}</td>
              </tr>
              <tr>
                <th scope='row'>Commnes ne disposant d'un PCD</th>
                <td>{table1.without_pcd}</td>
                <td>{table1.without_pcd}</td>
              </tr>
              <tr>
                <th scope='row'>Ensemble</th>
                <td> {table1.with_pcd + table1.without_pcd}</td>
                <td> {table1.with_pcd + table1.without_pcd}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau2: Répartition des CTD suivant les dimensions de performence
            susceptibles d'affecter l'évaluation de la performance
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>
                  Dimenions pouvant affecter l'évaluation des perofrmances
                </th>
                <th scope='col'>Valeur Absolue</th>
                <th scope='col'>Valeur Relative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Dimension usagers </th>
                <td> {table2?.dimensionStrategiques?.dimensionUsagers}</td>
                <td>{table2?.dimensionStrategiques?.dimensionUsagers}</td>
              </tr>
              <tr>
                <th scope='row'>Dimension financière </th>
                <td>{table2?.dimensionStrategiques?.dimensionFinanciere}</td>
                <td>{table2?.dimensionStrategiques?.dimensionFinanciere}</td>
              </tr>
              <tr>
                <th scope='row'>Dimension humaine </th>
                <td>{table2?.dimensionStrategiques?.dimensionHumaine}</td>
                <td>{table2?.dimensionStrategiques?.dimensionHumaine}</td>
              </tr>
              <tr>
                <th scope='row'>Dimension interne</th>
                <td>{table2?.dimensionStrategiques?.dimensionInterne}</td>
                <td>{table2?.dimensionStrategiques?.dimensionInterne}</td>
              </tr>
              <tr>
                <th scope='row'>
                  Dimension légitimité de la commune auprès des groupes externes
                </th>
                <td>{table2?.dimensionStrategiques?.dimensionLegitime}</td>
                <td>{table2?.dimensionStrategiques?.dimensionLegitime}</td>
              </tr>
              <tr>
                <th scope='row'>Dimension gouvernance locale</th>
                <td>
                  {table2?.dimensionStrategiques?.dimensionGouvernanceLocale}
                </td>
                <td>
                  {table2?.dimensionStrategiques?.dimensionGouvernanceLocale}
                </td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Autre (A préciser)</th>
                <td>{table2?.dimensionStrategiques?.autre}</td>
                <td>{table2?.dimensionStrategiques?.autre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 3: Réartition des CTD par dimension de performance
            susceptibles d'affecter l'évaluation de la performance suivant
            qu'elle dispose d'un PCD
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>
                  Dimenions pouvant affecter l'évaluation des perofrmances
                </th>
                <th scope='col'>Existence d'un PCD</th>
                <th scope='col'>Absence de PCD</th>
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Dimension usagers </th>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionUsagers}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withoutPcd?.dimensionUsagers}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionUsagers +
                    table3?.dimensionStrategiques?.withoutPcd?.dimensionUsagers}
                </td>
              </tr>
              <tr>
                <th scope='row'>Dimension financière </th>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionFinanciere}
                </td>
                <td>
                  {
                    table3?.dimensionStrategiques?.withoutPcd
                      ?.dimensionFinanciere
                  }
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionFinanciere +
                    table3?.dimensionStrategiques?.withoutPcd
                      ?.dimensionFinanciere}
                </td>
              </tr>
              <tr>
                <th scope='row'>Dimension humaine </th>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionHumaine}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withoutPcd?.dimensionHumaine}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionHumaine +
                    table3?.dimensionStrategiques?.withoutPcd?.dimensionHumaine}
                </td>
              </tr>
              <tr>
                <th scope='row'>Dimension interne</th>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionInterne}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withoutPcd?.dimensionInterne}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionInterne +
                    table3?.dimensionStrategiques?.withoutPcd?.dimensionInterne}
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  Dimension légitimité de la commune auprès des groupes externes
                </th>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionLegitime}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withoutPcd?.dimensionLegitime}
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.dimensionLegitime +
                    table3?.dimensionStrategiques?.withoutPcd
                      ?.dimensionLegitime}
                </td>
              </tr>
              <tr>
                <th scope='row'>Dimension gouvernance locale</th>
                <td>
                  {
                    table3?.dimensionStrategiques?.withPcd
                      ?.dimensionGouvernanceLocale
                  }
                </td>
                <td>
                  {
                    table3?.dimensionStrategiques?.withoutPcd
                      ?.dimensionGouvernanceLocale
                  }
                </td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd
                    ?.dimensionGouvernanceLocale +
                    table3?.dimensionStrategiques?.withoutPcd
                      ?.dimensionGouvernanceLocale}
                </td>
              </tr>
              <tr>
                <th scope='row'>Autre (A préciser)</th>
                <td>{table3?.dimensionStrategiques?.withPcd?.autre}</td>
                <td>{table3?.dimensionStrategiques?.withoutPcd?.autre}</td>
                <td>
                  {table3?.dimensionStrategiques?.withPcd?.autre +
                    table3?.dimensionStrategiques?.withoutPcd?.autre}
                </td>
              </tr>
              <tr>
                <th scope='row'>Ensemble</th>
                <td>{sum(table3.dimensionStrategiques?.withPcd)}</td>
                <td>{sum(table3.dimensionStrategiques?.withoutPcd)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 4: Répartition des CTD par outil de vision stratégique selon
            l'existence ou non du PCD
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Outil de Vision stratégique </th>
                <th scope='col'>CTD disposant d'un PCD</th>
                <th scope='col'>CTD ne disposant pas de PCD</th>
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>PCD outil Vision stratégique </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Autres outils de visions stratégiques </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Ensemble</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 5: Répartition des CTD par outil de vision stratgique selon
            les dimensions pouvant affecter la performance
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Outil de Vision stratégique </th>
                {quizSection2.map((question, index) => {
                  return (
                    <th key={index} scope='col'>
                      {question.title}
                    </th>
                  );
                })}
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>Autres outils de visions stratégiques</th>
                {quizSection2.map((question, index) => {
                  return <td></td>;
                })}
                <td></td>
              </tr>

              <tr>
                <th scope='row'>Ensemble</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 6: Répartition des CTD par dimension de performance suivant
            leur(dimensions) dégré d'importance
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>
                  Dimenions pouvant affecter l'évaluation des perofrmances{' '}
                </th>
                {degres.map((degre, index) => {
                  return (
                    <th key={index} scope='col'>
                      {degre.title}
                    </th>
                  );
                })}
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              {quizSection2.map((question, index) => {
                let somme = 0;
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>

                    {degres.map((degre, index) => {
                      if (table6) {
                        somme +=
                          table6[question.parent][question.name][degre.name];
                      }
                      return (
                        <td key={index}>
                          {table6
                            ? table6[question.parent][question.name][degre.name]
                            : ''}
                        </td>
                      );
                    })}
                    <td>{somme}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope='row'>Ensemble</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 7: Répartition des CTD par facteurs clés de succès selon
            leur perception de l'importance desdits facteurs dans l'atteinte de
            la performance de la CTD
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Facteurs clés de succès </th>
                {degres.map((degre, index) => {
                  return (
                    <th key={index} scope='col'>
                      {degre.title}
                    </th>
                  );
                })}
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              {quizSection3.map((question, index) => {
                let somme = 0;
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>

                    {degres.map((degre, index) => {
                      if (table7) {
                        somme +=
                          table7[question.parent][question.name][degre.name];
                      }
                      return (
                        <td key={index}>
                          {table7
                            ? table7[question.parent][question.name][degre.name]
                            : ''}
                        </td>
                      );
                    })}

                    <td>{somme}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope='row'>Ensemble</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 8: Répartition des CTD par Indicateur de performance selon
            leur perception de l'importance desits indicateurs
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Indicateur de performance </th>
                {degres.map((degre, index) => {
                  return (
                    <th key={index} scope='col'>
                      {degre.title}
                    </th>
                  );
                })}
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              {quizSection4.map((question, index) => {
                let somme = 0;
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>

                    {degres.map((degre, index) => {
                      if (table8) {
                        somme +=
                          table8[question.parent][question.name][degre.name];
                      }
                      return (
                        <td key={index}>
                          {table8
                            ? table8[question.parent][question.name][degre.name]
                            : ''}
                        </td>
                      );
                    })}

                    <td>{somme}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope='row'>Ensemble</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className='container'>
        <div>
          <h3>
            Tableau 9: Répartition des CTD par Indicateur de performance selon
            leur perception du niveau de communication desits indicateurs pour
            la prise des décisions
          </h3>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>Indicateur de performance </th>
                {degres.map((degre, index) => {
                  return (
                    <th key={index} scope='col'>
                      {degre.title}
                    </th>
                  );
                })}
                <th scope='col'>Ensemble</th>
              </tr>
            </thead>
            <tbody>
              {quizSection5.map((question, index) => {
                let somme = 0;
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>

                    {degres.map((degre, index) => {
                      if (table9) {
                        somme +=
                          table9[question.parent][question.name][degre.name];
                      }
                      return (
                        <td key={index}>
                          {table9
                            ? table9[question.parent][question.name][degre.name]
                            : ''}
                        </td>
                      );
                    })}

                    <td>{somme}</td>
                  </tr>
                );
              })}
              <tr>
                <th scope='row'>Ensemble</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Statistique;
