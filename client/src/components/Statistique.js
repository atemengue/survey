/** @format */

import React from 'react';
import {
  degres,
  quizSection2,
  quizSection3,
  quizSection4,
  quizSection5,
} from './QuizData';

function Statistique() {
  return (
    <>
      <div className='container' style={{ marginTop: '100px' }}>
        <div>
          <h3>
            Tableau 1: Situation des CTD selon qu'elles disposent ou non d'un
            PCD
          </h3>
          <table class='table table-bordered'>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Commnes ne disposant d'un PCD</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Ensemble</th>
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
            Tableau2: Répartition des CTD suivant les dimensions de performence
            susceptibles d'affecter l'évaluation de la performance
          </h3>
          <table class='table table-bordered'>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension financière </th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension humaine </th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension interne</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>
                  Dimension légitimité de la commune auprès des groupes externes
                </th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension gouvernance locale</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Autre (A préciser)</th>
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
            Tableau 3: Réartition des CTD par dimension de performance
            susceptibles d'affecter l'évaluation de la performance suivant
            qu'elle dispose d'un PCD
          </h3>
          <table class='table table-bordered'>
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
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension financière </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension humaine </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension interne</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>
                  Dimension légitimité de la commune auprès des groupes externes
                </th>
                <td></td>
                <td></td>

                <td></td>
              </tr>
              <tr>
                <th scope='row'>Dimension gouvernance locale</th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'>Autre (A préciser)</th>
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
            Tableau 4: Répartition des CTD par outil de vision stratégique selon
            l'existence ou non du PCD
          </h3>
          <table class='table table-bordered'>
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
          <table class='table table-bordered'>
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
          <table class='table table-bordered'>
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
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>
                    {degres.map((degre, index) => {
                      return <td key={index}></td>;
                    })}
                    <td></td>
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
          <table class='table table-bordered'>
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
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>
                    {degres.map((degre, index) => {
                      return <td key={index}></td>;
                    })}
                    <td></td>
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
          <table class='table table-bordered'>
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
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>
                    {degres.map((degre, index) => {
                      return <td key={index}></td>;
                    })}
                    <td></td>
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
          <table class='table table-bordered'>
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
                return (
                  <tr>
                    <th scope='row'>{question.title}</th>
                    {degres.map((degre, index) => {
                      return <td key={index}></td>;
                    })}
                    <td></td>
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
