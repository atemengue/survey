/** @format */

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Quiz from './Quiz';
import {
  degres,
  quizSection2,
  quizSection3,
  quizSection4,
  quizSection5,
} from './QuizData';
import Section from './Section';

const Content = (props) => {
  const [loading, setLoading] = useState(false);
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
      dimensionLegitime: {
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
        autreDegre: '',
      },
    },
    facteurSuccessIndicateurPerformance: {
      qualiteProduitsServicesInfrastructures: null,
      capaciteInnovationPersonnel: null,
      satisfactionUsagers: null,
      rolePourperformance: null,
      imageMarqueCommune: null,
      comportementEmployeCommunaux: null,
      adaptabiliteProcessus: null,
      savoirsEtsavoirFaire: null,
      efficaciteProcessus: null,
      maîtriseFluxInformation: null,
      efficaciteInfrastructures: null,
      investissementsCommerciaux: null,
      adaptabiliteInfrastructures: null,
      productiviteEmployes: null,
      satisfactionEmployes: null,
      nombreProjetsExecute: null,
      acquisitionNouveauxServices: null,
      investissementRechercheDeveloppement: null,
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

  const onChangeValue = ({ name, value }, parent) => {
    switch (parent) {
      case 'dimensionStrategique':
        setCommune({
          ...commune,
          [parent]: {
            ...commune.dimensionStrategique,
            [name]: {
              ...commune.dimensionStrategique[name],
              degre: value,
            },
          },
        });
        break;
      default:
        setCommune({
          ...commune,
          [parent]: {
            ...commune.facteurSuccessIndicateurPerformance,
            [name]: value,
          },
        });
        return 0;
    }
  };

  const onSave = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch('http://localhost:3000/api/structures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commune),
    })
      .then((data) => {
        setLoading(false);
        toast.success('Commune Ajoutee');
      })
      .catch((error) => {
        setLoading(false);
        toast.success('Erreur verifier les champs');
      });
  };

  return (
    <div style={{ marginTop: '100px', marginBottom: '100px' }}>
      <form method='POST' onSubmit={onSave} className='mb-5'>
        <div className='section container' id='section1'>
          <h4>SECTION 1: INFORMATIONS GENERALES</h4>
          <div className='form-group row'>
            <label htmlFor='nomStructure' className='col-sm-2 col-form-label'>
              <span>S1QO1: </span>
              Commune:
            </label>
            <div className='col-sm-10'>
              <input
                required
                value={commune.nomStructure}
                name='nomStructure'
                type='type'
                className='form-control'
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
          <div className='form-group'>
            <label htmlFor='' className='col-form-label'>
              <span>S2QO1: </span>
              Existe-t-il un système de planification et d’évaluation dans votre
              commune (PCD) ?
            </label>
            <div className='col-sm-12'>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  type='radio'
                  id='pcdExist1'
                  value={true}
                  name='pcdExist'
                  className='custom-control-input'
                  required
                  onChange={(value) =>
                    setCommune({ ...commune, pcdExist: true })
                  }
                />
                <label className='custom-control-label' htmlFor='pcdExist1'>
                  OUI
                </label>
              </div>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  required
                  value={false}
                  type='radio'
                  id='pcdExist2'
                  name='pcdExist'
                  onChange={(value) =>
                    setCommune({ ...commune, pcdExist: false })
                  }
                  className='custom-control-input'
                />
                <label className='custom-control-label' htmlFor='pcdExist2'>
                  NON
                </label>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='inputPassword' className='col-form-label'>
              <span>S2Q02: </span>
              Parmi les dimensions de la performance suivantes quelles sont
              celles qui sont susceptibles d’affecter l’évaluation de la
              performance de votre commune (par ordre d’importance) ?
            </label>
            <div className='form-check'>
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
                className='form-check-input'
                type='checkbox'
                id='dimensionUsagers'
              />
              <label className='form-check-label' htmlFor='dimensionUsagers'>
                {' '}
                1. Dimension usagers
              </label>
            </div>
            <div className='form-check'>
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
                className='form-check-input'
                type='checkbox'
                id='dimensionFinanciere'
              />
              <label className='form-check-label' htmlFor='dimensionFinanciere'>
                {' '}
                2. Dimension financière
              </label>
            </div>
            <div className='form-check'>
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
                className='form-check-input'
                type='checkbox'
                id='dimensionHumaine'
              />
              <label className='form-check-label' htmlFor='dimensionHumaine'>
                {' '}
                3. Dimension humaine
              </label>
            </div>
            <div className='form-check'>
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
                className='form-check-input'
                type='checkbox'
                id='dimensionInterne'
              />
              <label className='form-check-label' htmlFor='dimensionInterne'>
                {' '}
                4. Dimension interne
              </label>
            </div>
            <div className='form-check'>
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
                className='form-check-input'
                type='checkbox'
                id='dimensionLegitime'
              />
              <label className='form-check-label' htmlFor='dimensionLegitime'>
                {' '}
                5. Dimension légitimité de la commune auprès des groupes
                externes
              </label>
            </div>
            <div className='form-check'>
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
                className='form-check-input'
                type='checkbox'
                id='dimensionGouvernanceLocale'
              />
              <label
                className='form-check-label'
                htmlFor='dimensionGouvernanceLocale'
              >
                {' '}
                6. Dimension gouvernance locale
              </label>
            </div>
            <div className='form-group'>
              <div className='form-check'>
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
                  className='form-check-input'
                  type='checkbox'
                  id='autre'
                />
                <label className='form-check-label' htmlFor='autre'>
                  {' '}
                  7. Autres (A preciser)
                </label>
              </div>
              {commune.dimensionStrategique.autre.status && (
                <textarea
                  className='form-control'
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

          <div className='form-group'>
            <label htmlFor='inputPassword' className='col-form-label'>
              <span>S2Q03 :</span>
              Selon vous le Plan communal de développement est considérée comme
              une vision stratégique dans votre commune ?{' '}
            </label>
            <div className='col-sm-12'>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  value={true}
                  type='radio'
                  id='visionStrategique1'
                  name='visionStrategique'
                  className='custom-control-input'
                  onChange={(value) =>
                    setCommune({
                      ...commune,
                      visionStrategique: true,
                    })
                  }
                />
                <label
                  className='custom-control-label'
                  htmlFor='visionStrategique1'
                >
                  OUI
                </label>
              </div>
              <div className='custom-control custom-radio custom-control-inline'>
                <input
                  value={false}
                  type='radio'
                  id='visionStrategique2'
                  name='visionStrategique'
                  className='custom-control-input'
                  onChange={(value) =>
                    setCommune({
                      ...commune,
                      visionStrategique: false,
                    })
                  }
                />
                <label
                  className='custom-control-label'
                  htmlFor='visionStrategique2'
                >
                  NON
                </label>
              </div>
            </div>
          </div>
          {!commune.visionStrategique && (
            <div className='form-group'>
              <label htmlFor='inputPassword' className='col-form-label'>
                <span>S2Q04: </span>
                Si non, quel est le document qui est considéré comme une vision
                stratégique dans votre commune ?
              </label>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                onChange={(value) => {
                  setCommune({
                    ...commune,
                    autreDocument: value.target.value,
                  });
                }}
              ></textarea>
            </div>
          )}
          <div className='form-group'>
            <Quiz
              onChangeValue={onChangeValue}
              degres={degres}
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
            degres={degres}
            questions={quizSection3}
            onChangeValue={onChangeValue}
            section={3}
            number={1}
            title=' Parmi les indicateurs suivants, indiquez le degré d’importance que votre commune accorde a chaque indicateur? (Cocher la bonne réponse parmi celles proposées)'
          />
        </Section>
        <hr />
        <Section number={4} title='SECTION 4 : INDICATEURS DE PERFORMANCES'>
          <Quiz
            degres={degres}
            questions={quizSection4}
            onChangeValue={onChangeValue}
            section={4}
            number={1}
            title="Parmi les indicateurs suivants, indiquez le degré d'importance que votre commune devrait accorder a chaque indicateur pour évaluer la performance communale. (Cocher la bonne réponse parmi celles proposées)."
          />
          <Quiz
            degres={degres}
            onChangeValue={onChangeValue}
            questions={quizSection5}
            section={4}
            number={2}
            title='Parmi les indicateurs suivants, indiquez ceux qui sont le plus communiqués aux  maires et aux cadres supérieurs pour la prise des décisions? (Cocher la bonne réponse parmi les six proposées)'
          />
        </Section>

        <div className='container mb-4'>
          {loading ? (
            <div class='spinner-border' role='status'>
              <span class='sr-only'>Loading...</span>
            </div>
          ) : (
            <button type='submit' className='btn btn-success'>
              Enregistrer les informations
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Content;
