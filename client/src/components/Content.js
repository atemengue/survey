/** @format */

import React, { useState } from 'react';
import Quiz from './Quiz';
import { quizSection2, quizSection3, quizSection4 } from './QuizData';
import Section from './Section';

const Content = () => {
  const [commune, setCommune] = useState({
    nomStructure: '',
    pcdExist: false,
    visionStrategique: false,
    autreDocument: null,
    dimensionStrategique: {
      dimensionUsagers: {
        status: false,
        degre: null,
      },
      dimensionFinanciere: {
        status: false,
        degre: null,
      },
      dimensionHumaine: {
        status: false,
        degre: null,
      },
      dimensionInterne: {
        status: false,
        degre: null,
      },
      dimesionLegitime: {
        status: false,
        degre: null,
      },
      dimensionGouvernanceLocale: {
        status: false,
        degre: null,
      },
      autre: {
        intitule: null,
        status: false,
        degre: null,
      },
    },
    facteurSuccessIndicateurPerformance: {
      qualiteProduitsServicesInfrastructures: null,
      capaciteInnovationPersonnel: null,
      satisfactionUsagers: null,
      rolePourperformance: null,
      imageMarqueCommune: null,
      comportementEmployeCommunaux: 5,
      adaptabiliteProcessus: null,
      savoirsEtsavoirFaire: null,
      efficaciteProcessus: 4,
      maîtriseFluxInformation: null,
      EfficaciteInfrastructures: null,
      investissementsCommerciaux: null,
      adaptabiliteInfrastructures: null,
      productiviteEmployes: null,
      satisfactionEmployes: null,
      nombreProjetsExecute: null,
      acquisitionNouveauxServices: null,
      valeurPartenarialePassee: null,
      valeurPartenarialefuture: null,
      investissementsEnFormation: null,
      gestioncCouts: null,
      valeurDegageePourLesConseillersMunicipaux: null,
      recettesCommunales: null,
      qualitéDeLaGestionPprojetsFinancesParBailleursDefonds: null,
      maitriseDesDocumentsliesAuDeveloppementlocal: null,
      implicationDesCommunautesDansLeDeveloppement: null,
      valeuDEgageePourLesCommunaute: null,
      reeditionDesCompte: null,
      partenariatsPublicsPrive: null,
      gestionParticipative: null,
      fiabiliteDesdonnee: null,
    },
    indicateursDePerformanceDegreImportance: {
      satisfactioDesUsagers: null,
      executionServicesInfrastructures: null,
      etatDeMaintenancesInfrastructures: null,
      qualiteDesProduitsEtservices: null,
      imageDeMarque: null,
      investissementCommerciaux: null,
      valeurFuturePourLesPartenairesDeLaCommune: null,
      recouvrementRecettes: null,
      maitriseDesCouts: null,
      valeurDegageePourLesConseillersMunicipaux: null,
      valeurDegageePourLesPartenairesDeLaCommune: null,
      productiviteIndividuelle: null,
      satisfactionDesEmployes: null,
      influenceDesCompetences: null,
      savoirsEtsavoirFaire: null,
      formationStratégique: null,
      comportementdesEmployes: null,
      capacitesInnovation: null,
      efficaciteProcessus: null,
      efficacitedesInfrastructures: null,
      investissementsEnREtD: null,
      adaptabiliteDesProcessus: null,
      adaptabiliteDesInfrastructures: null,
      maitrisefluxInformation: null,
      satisfactionBailleursFonds: null,
      satisfactionorganismesRegulateurs: null,
      satisfactionDelacommunaute: null,
      influenceDesCommunautes: null,
      comptesAdministratifGestionEtGestionMatieres: null,
      nombrepartenariatspublicPrive: null,
      implicationComitesQuartiersEtVillages: null,
      adaptabiliteProgicielsGestionDonnees: null,
    },
    indicateursDePerformancePriseDecision: {
      satisfactioDesUsagers: null,
      executionServicesInfrastructures: null,
      etatDeMaintenancesInfrastructures: null,
      qualiteDesProduitsEtservices: null,
      imageDeMarque: null,
      investissementCommerciaux: null,
      valeurFuturePourLesPartenairesDeLaCommune: null,
      recouvrementRecettes: null,
      maitriseDesCouts: null,
      valeurDegageePourLesConseillersMunicipaux: null,
      valeurDegageePourLesPartenairesDeLaCommune: null,
      productiviteIndividuelle: null,
      satisfactionDesEmployes: null,
      influenceDesCompetences: null,
      savoirsEtsavoirFaire: null,
      formationStratégique: null,
      comportementdesEmployes: null,
      capacitesInnovation: null,
      efficaciteProcessus: null,
      efficacitedesInfrastructures: null,
      investissementsEnREtD: null,
      adaptabiliteDesProcessus: null,
      adaptabiliteDesInfrastructures: null,
      maitrisefluxInformation: null,
      satisfactionBailleursFonds: null,
      satisfactionorganismesRegulateurs: null,
      satisfactionDelacommunaute: null,
      influenceDesCommunautes: null,
      comptesAdministratifGestionEtGestionMatieres: null,
      nombrepartenariatspublicPrive: null,
      implicationComitesQuartiersEtVillages: null,
      adaptabiliteProgicielsGestionDonnees: null,
    },
  });

  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      {console.log(commune.dimensionStrategique)}
      <form>
        <div className='section container' id='section1'>
          <h4>SECTION 1: INFORMATIONS GENERALES</h4>
          <div class='form-group row'>
            <label for='nomStructure' class='col-sm-2 col-form-label'>
              <span>S1QO1: </span>
              Commune:
            </label>
            <div class='col-sm-10'>
              <input
                required
                value={commune.nomStructure}
                name='nomStructure'
                type='type'
                class='form-control'
                id='nomStructure'
                placeholder='Nom de votre commune'
                onChange={(value) =>
                  setCommune({ ...commune, nomStructure: value.target.value })
                }
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
                  id='pcdExist1'
                  value={true}
                  name='pcdExist'
                  class='custom-control-input'
                  required
                  onChange={(value) =>
                    setCommune({ ...commune, pcdExist: value.target.value })
                  }
                />
                <label class='custom-control-label' for='pcdExist1'>
                  OUI
                </label>
              </div>
              <div class='custom-control custom-radio custom-control-inline'>
                <input
                  required
                  value={false}
                  type='radio'
                  id='pcdExist2'
                  name='pcdExist'
                  onChange={(value) =>
                    setCommune({ ...commune, pcdExist: value.target.value })
                  }
                  class='custom-control-input'
                />
                <label class='custom-control-label' for='pcdExist2'>
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
            <div class='form-check'>
              <input
                onChange={(value) =>
                  setCommune({
                    ...commune,
                    dimensionStrategique: {
                      ...commune.dimensionStrategique,
                      dimensionUsagers: {
                        ...commune.dimensionStrategique.dimensionUsagers,
                        status: value.target.checked,
                      },
                    },
                  })
                }
                class='form-check-input'
                type='checkbox'
                id='dimensionUsagers'
              />
              <label class='form-check-label' for='dimensionUsagers'>
                {' '}
                1. Dimension usagers
              </label>
            </div>
            <div class='form-check'>
              <input
                onChange={(value) =>
                  setCommune({
                    ...commune,
                    dimensionStrategique: {
                      ...commune.dimensionStrategique,
                      dimensionFinanciere: {
                        ...commune.dimensionStrategique.dimensionFinanciere,
                        status: value.target.checked,
                      },
                    },
                  })
                }
                class='form-check-input'
                type='checkbox'
                id='dimensionFinanciere'
              />
              <label class='form-check-label' for='dimensionFinanciere'>
                {' '}
                2. Dimension financière
              </label>
            </div>
            <div class='form-check'>
              <input
                onChange={(value) =>
                  setCommune({
                    ...commune,
                    dimensionStrategique: {
                      ...commune.dimensionStrategique,
                      dimensionHumaine: {
                        ...commune.dimensionStrategique.dimensionHumaine,
                        status: value.target.checked,
                      },
                    },
                  })
                }
                class='form-check-input'
                type='checkbox'
                id='dimensionHumaine'
              />
              <label class='form-check-label' for='dimensionHumaine'>
                {' '}
                3. Dimension humaine
              </label>
            </div>
            <div class='form-check'>
              <input
                onChange={(value) =>
                  setCommune({
                    ...commune,
                    dimensionStrategique: {
                      ...commune.dimensionStrategique,
                      dimensionInterne: {
                        ...commune.dimensionStrategique.dimensionInterne,
                        status: value.target.checked,
                      },
                    },
                  })
                }
                class='form-check-input'
                type='checkbox'
                id='dimensionInterne'
              />
              <label class='form-check-label' for='dimensionInterne'>
                {' '}
                4. Dimension interne
              </label>
            </div>
            <div class='form-check'>
              <input
                onChange={(value) =>
                  setCommune({
                    ...commune,
                    dimensionStrategique: {
                      ...commune.dimensionStrategique,
                      dimensionLegitime: {
                        ...commune.dimensionStrategique.dimensionLegitime,
                        status: value.target.checked,
                      },
                    },
                  })
                }
                class='form-check-input'
                type='checkbox'
                id='dimensionLegitime'
              />
              <label class='form-check-label' for='dimensionLegitime'>
                {' '}
                5. Dimension légitimité de la commune auprès des groupes
                externes
              </label>
            </div>
            <div class='form-check'>
              <input
                onChange={(value) =>
                  setCommune({
                    ...commune,
                    dimensionStrategique: {
                      ...commune.dimensionStrategique,
                      dimensionGouvernanceLocale: {
                        ...commune.dimensionStrategique
                          .dimensionGouvernanceLocale,
                        status: value.target.checked,
                      },
                    },
                  })
                }
                class='form-check-input'
                type='checkbox'
                id='dimensionGouvernanceLocale'
              />
              <label class='form-check-label' for='dimensionGouvernanceLocale'>
                {' '}
                6. Dimension gouvernance locale
              </label>
            </div>
            <div class='form-group'>
              <div class='form-check'>
                <input
                  onChange={(value) =>
                    setCommune({
                      ...commune,
                      dimensionStrategique: {
                        ...commune.dimensionStrategique,
                        autre: {
                          ...commune.dimensionStrategique.autre,
                          status: value.target.checked,
                        },
                      },
                    })
                  }
                  class='form-check-input'
                  type='checkbox'
                  id='autre'
                />
                <label class='form-check-label' for='autre'>
                  {' '}
                  7. Autres (A preciser)
                </label>
              </div>
              {commune.dimensionStrategique.autre.status && (
                <textarea
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  onChange={(value) =>
                    setCommune({
                      ...commune,
                      dimensionStrategique: {
                        ...commune.dimensionStrategique,
                        autre: {
                          ...commune.dimensionStrategique.autre,
                          intitule: value.target.value,
                        },
                      },
                    })
                  }
                ></textarea>
              )}
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
