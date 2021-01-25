/** @format */

import React from 'react';
import Quiz from './Quiz';
import { quizSection2, quizSection3, quizSection4 } from './QuizData';
import Section from './Section';

const Content = () => {
  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      <form>
        <div className='section container' id='section1'>
          <h4>SECTION 1: INFORMATIONS GENERALES</h4>
          <div class='form-group row'>
            <label for='commune' class='col-sm-2 col-form-label'>
              <span>S1QO1: </span>
              Commune:
            </label>
            <div class='col-sm-10'>
              <input
                type='type'
                class='form-control'
                id='commune'
                placeholder='Nom de votre commune'
              />
            </div>
          </div>
        </div>
        <hr />
        <div className='section container'>
          <h4>SECTION 2: DIMENSIONS STRATEGIQUES DE LA PERFORMANCE</h4>
          <div class='form-group'>
            <label for='inputPassword' class='col-form-label'>
              <span>S2QO1: </span>
              Existe-t-il un système de planification et d’évaluation dans votre
              commune (PCD) ?
            </label>
            <div class='col-sm-12'>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline1'
                  name='customRadioInline'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline1'>
                  OUI
                </label>
              </div>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline2'
                  name='customRadioInline'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline2'>
                  NON
                </label>
              </div>
            </div>
          </div>
          <div class='form-group'>
            <label for='inputPassword' class='col-form-label'>
              <span>S2Q02: </span>
              Parmi les dimensions de la performance suivantes quelles sont
              celles qui sont susceptibles d’affecter l’évaluation de la
              performance de votre commune (par ordre d’importance) ?
            </label>
            <div class='custom-control custom-checkbox'>
              <label class='custom-control-label' for='customCheck1'>
                1. Dimension usagers (1)
              </label>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customCheck1'
              />
            </div>
            <div class='custom-control custom-checkbox'>
              <label class='custom-control-label' for='customCheck1'>
                2. Dimension financière (2)
              </label>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customCheck1'
              />
            </div>{' '}
            <div class='custom-control custom-checkbox'>
              <label class='custom-control-label' for='customCheck1'>
                3. Dimension humaine (3)
              </label>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customCheck1'
              />
            </div>
            <div class='custom-control custom-checkbox'>
              <label class='custom-control-label' for='customCheck1'>
                4. Dimension interne (4)
              </label>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customCheck1'
              />
            </div>
            <div class='custom-control custom-checkbox'>
              <label class='custom-control-label' for='customCheck1'>
                5. Dimension légitimité de la commune auprès des groupes
                externes (5)
              </label>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customCheck1'
              />
            </div>
            <div class='custom-control custom-checkbox'>
              <label class='custom-control-label' for='customCheck1'>
                6. Dimension gouvernance locale (6)
              </label>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customCheck1'
              />
            </div>
            <div class='form-group'>
              <label for='exampleFormControlTextarea1'>
                7. Autre (A preciser)
              </label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
          </div>
          <div class='form-group'>
            <label for='inputPassword' class='col-form-label'>
              <span>S2Q03 :</span>
              Selon vous le Plan communal de développement est considérée comme
              une vision stratégique dans votre commune ?{' '}
            </label>
            <div class='col-sm-12'>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline1'
                  name='customRadioInline'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline1'>
                  OUI
                </label>
              </div>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='customRadioInline2'
                  name='customRadioInline'
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='customRadioInline2'>
                  NON
                </label>
              </div>
            </div>
          </div>
          <div class='form-group'>
            <label for='inputPassword' class='col-form-label'>
              <span>S2Q04: </span>
              Si non, quel est le document qui est considéré comme une vision
              stratégique dans votre commune ?
            </label>
            <textarea
              class='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
          </div>
          <div class='form-group'>
            <Quiz
              questions={quizSection2}
              section='2'
              number='5'
              title=' Indiquez le degré d’importance que votre commune accorde a chaque dimension de la performance ? (Cocher la bonne réponse parmi les sept proposées)'
            />
          </div>
        </div>
        <hr />

        <Section
          number={3}
          title='FACTEURS CLES DE SUCCES DES INDICATEURS DE PERFORMANCE'
        >
          <Quiz
            questions={quizSection3}
            section={3}
            number={1}
            title=' Parmi les indicateurs suivants, indiquez le degré d’importance que votre commune accorde a chaque indicateur? (Cocher la bonne réponse parmi celles proposées)'
          />
        </Section>
        <hr />
        <Section number={4} title='SECTION 4 : INDICATEURS DE PERFORMANCES'>
          <Quiz
            questions={quizSection4}
            section={4}
            number={1}
            title="Parmi les indicateurs suivants, indiquez le degré d'importance que votre commune devrait accorder a chaque indicateur pour évaluer la performance communale. (Cocher la bonne réponse parmi celles proposées)."
          />
          <Quiz
            questions={quizSection4}
            section={4}
            number={2}
            title='Parmi les indicateurs suivants, indiquez ceux qui sont le plus communiqués aux  maires et aux cadres supérieurs pour la prise des décisions? (Cocher la bonne réponse parmi les six proposées)'
          />
        </Section>
        <div className='container mb-4'>
          <button type='button' class='btn btn-secondary'>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Content;
