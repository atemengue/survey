/** @format */

import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';

PouchDB.plugin(PouchDBFind);
class DB {
  constructor(name) {
    this.db = new PouchDB(name);
  }

  async create_commune(data) {
    try {
      let commune = await this.db.post(data);
      return commune;
    } catch (error) {
      return error;
    }
  }

  async getAllCommunes() {
    try {
      let communes = await this.db.allDocs({
        include_docs: true,
      });

      // communes.filter((commune) => commune.idStructure === data.id)

      return communes.rows.splice(0, communes.total_rows - 3);
    } catch (error) {
      return [];
    }
  }

  async deleteCommune(id) {
    try {
      let doc = await this.db.get(id);
      let res = await this.db.remove(doc);
      return res;
    } catch (error) {
      return error;
    }
  }

  createIndexes() {
    this.db
      .createIndex({
        index: {
          fields: ['pcdExist', 'visionStrategique'],
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.db
      .createIndex({
        index: {
          fields: ['pcdExist'],
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.db
      .createIndex({
        index: {
          fields: ['visionStrategique'],
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  async table1() {
    try {
      const with_pcd = await this.db.find({
        selector: {
          pcdExist: true,
        },
      });
      const without_pcd = await this.db.find({
        selector: {
          pcdExist: false,
        },
      });

      if (with_pcd && without_pcd) {
        return {
          with_pcd: with_pcd.docs.length,
          without_pcd: without_pcd.docs.length,
        };
      } else {
        return {
          error: 'Error',
        };
      }
    } catch (error) {
      throw Error(error);
    }
  }

  async table2() {
    try {
      let response = await this.db.allDocs({
        include_docs: true,
      });

      // communes.filter((commune) => commune.idStructure === data.id)

      let communes = response.rows.splice(0, response.total_rows - 3);

      const dimensionStrategiques = {};
      if (communes) {
        const keys = Object.keys(communes[0].doc.dimensionStrategique);
        for (const key of keys) {
          dimensionStrategiques[key] = 0;
        }
        communes.map((commune) => {
          keys.map((valueKey) => {
            if (commune.doc.dimensionStrategique[valueKey].status) {
              dimensionStrategiques[valueKey] =
                (dimensionStrategiques[valueKey] || 0) + 1;
            }
          });
        });
      }
      return { dimensionStrategiques };
    } catch (error) {
      throw Error(error);
    }
  }

  async table3() {
    try {
      let response = await this.db.allDocs({
        include_docs: true,
      });

      // communes.filter((commune) => commune.idStructure === data.id)

      let communes = response.rows.splice(0, response.total_rows - 3);

      const dimensionStrategiques = {
        withPcd: {},
        withoutPcd: {},
      };

      if (communes) {
        const keys = Object.keys(communes[0].doc.dimensionStrategique);
        for (const key of keys) {
          dimensionStrategiques.withPcd[key] = 0;
          dimensionStrategiques.withoutPcd[key] = 0;
        }
        communes.map((commune) => {
          keys.map((valueKey) => {
            if (commune.doc.pcdExist) {
              if (commune.doc.dimensionStrategique[valueKey].status) {
                dimensionStrategiques.withPcd[valueKey] =
                  (dimensionStrategiques.withPcd[valueKey] || 0) + 1;
              }
            } else {
              if (commune.doc.dimensionStrategique[valueKey].status) {
                dimensionStrategiques.withoutPcd[valueKey] =
                  (dimensionStrategiques.withoutPcd[valueKey] || 0) + 1;
              }
            }
          });
        });
      }
      return { dimensionStrategiques };
    } catch (error) {
      throw Error(error);
    }
  }

  async table4() {
    try {
      const with_pcd_with_vision = await this.db.find({
        selector: {
          pcdExist: true,
          visionStrategique: true,
        },
      });

      const without_pcd_vision = await await this.db.find({
        selector: {
          pcdExist: false,
          visionStrategique: true,
        },
      });

      if (with_pcd_with_vision && without_pcd_vision) {
        return {
          with_pcd_with_vision: with_pcd_with_vision.docs.length,
          without_pcd_vision: without_pcd_vision.docs.length,
        };
      } else {
        return {
          error: 'Error',
        };
      }
    } catch (error) {
      throw Error(error);
    }
  }

  async table6() {
    try {
      let response = await this.db.allDocs({
        include_docs: true,
      });

      let communes = response.rows.splice(0, response.total_rows - 3);

      const degres = ['peu', 'moins', 'neutre', 'important', 'assez', 'tres'];

      const dimensionStrategique = {};

      if (communes) {
        const keys = Object.keys(communes[0].doc.dimensionStrategique);
        for (const key of keys) {
          dimensionStrategique[key] = {};
          for (let degre of degres) {
            dimensionStrategique[key][degre] = 0;
          }
        }

        dimensionStrategique['ensemble'] = {
          peu: 0,
          moins: 0,
          neutre: 0,
          important: 0,
          assez: 0,
          tres: 0,
        };

        communes.map((commune) => {
          keys.map((valueKey) => {
            switch (
              parseInt(commune.doc.dimensionStrategique[valueKey].degre)
            ) {
              case 1:
                dimensionStrategique[valueKey][degres[0]] =
                  (dimensionStrategique[valueKey][degres[0]] || 0) + 1;

                dimensionStrategique['ensemble']['peu'] =
                  (dimensionStrategique['ensemble']['peu'] || 0) + 1;
                break;

              case 2:
                dimensionStrategique[valueKey][degres[1]] =
                  (dimensionStrategique[valueKey][degres[1]] || 0) + 1;
                dimensionStrategique['ensemble']['moins'] =
                  (dimensionStrategique['ensemble']['moins'] || 0) + 1;
                break;

              case 3:
                dimensionStrategique[valueKey][degres[2]] =
                  (dimensionStrategique[valueKey][degres[2]] || 0) + 1;
                dimensionStrategique['ensemble']['neutre'] =
                  (dimensionStrategique['ensemble']['neutre'] || 0) + 1;
                break;
              case 4:
                dimensionStrategique[valueKey][degres[3]] =
                  (dimensionStrategique[valueKey][degres[3]] || 0) + 1;
                dimensionStrategique['ensemble']['important'] =
                  (dimensionStrategique['ensemble']['important'] || 0) + 1;
                break;
              case 5:
                dimensionStrategique[valueKey][degres[4]] =
                  (dimensionStrategique[valueKey][degres[4]] || 0) + 1;
                dimensionStrategique['ensemble']['assez'] =
                  (dimensionStrategique['ensemble']['assez'] || 0) + 1;
                break;
              case 6:
                dimensionStrategique[valueKey][degres[5]] =
                  (dimensionStrategique[valueKey][degres[5]] || 0) + 1;
                dimensionStrategique['ensemble']['tres'] =
                  (dimensionStrategique['ensemble']['tres'] || 0) + 1;
                break;

              default:
                break;
            }
          });
        });
      }
      return { dimensionStrategique };
    } catch (error) {
      throw Error(error);
    }
  }

  async table7() {
    try {
      let response = await this.db.allDocs({
        include_docs: true,
      });

      let communes = response.rows.splice(0, response.total_rows - 3);

      const degres = ['peu', 'moins', 'neutre', 'important', 'assez', 'tres'];

      const facteurSuccessIndicateurPerformance = {};
      if (communes) {
        const keys = Object.keys(
          communes[0].doc.facteurSuccessIndicateurPerformance
        );
        for (const key of keys) {
          facteurSuccessIndicateurPerformance[key] = {};
          for (let degre of degres) {
            facteurSuccessIndicateurPerformance[key][degre] = 0;
          }
        }

        facteurSuccessIndicateurPerformance['ensemble'] = {
          peu: 0,
          moins: 0,
          neutre: 0,
          important: 0,
          assez: 0,
          tres: 0,
        };

        communes.map((commune) => {
          keys.map((valueKey) => {
            switch (
              parseInt(
                commune.doc.facteurSuccessIndicateurPerformance[valueKey]
              )
            ) {
              case 1:
                facteurSuccessIndicateurPerformance[valueKey][degres[0]] =
                  (facteurSuccessIndicateurPerformance[valueKey][degres[0]] ||
                    0) + 1;

                facteurSuccessIndicateurPerformance['ensemble']['peu'] =
                  (facteurSuccessIndicateurPerformance['ensemble']['peu'] ||
                    0) + 1;
                break;
              case 2:
                facteurSuccessIndicateurPerformance[valueKey][degres[1]] =
                  (facteurSuccessIndicateurPerformance[valueKey][degres[1]] ||
                    0) + 1;
                facteurSuccessIndicateurPerformance['ensemble']['moins'] =
                  (facteurSuccessIndicateurPerformance['ensemble']['moins'] ||
                    0) + 1;
                break;
              case 3:
                facteurSuccessIndicateurPerformance[valueKey][degres[2]] =
                  (facteurSuccessIndicateurPerformance[valueKey][degres[2]] ||
                    0) + 1;

                facteurSuccessIndicateurPerformance['ensemble']['neutre'] =
                  (facteurSuccessIndicateurPerformance['ensemble']['neutre'] ||
                    0) + 1;
                break;
              case 4:
                facteurSuccessIndicateurPerformance[valueKey][degres[3]] =
                  (facteurSuccessIndicateurPerformance[valueKey][degres[3]] ||
                    0) + 1;
                facteurSuccessIndicateurPerformance['ensemble']['important'] =
                  (facteurSuccessIndicateurPerformance['ensemble'][
                    'important'
                  ] || 0) + 1;
                break;
              case 5:
                facteurSuccessIndicateurPerformance[valueKey][degres[4]] =
                  (facteurSuccessIndicateurPerformance[valueKey][degres[4]] ||
                    0) + 1;
                facteurSuccessIndicateurPerformance['ensemble']['assez'] =
                  (facteurSuccessIndicateurPerformance['ensemble']['assez'] ||
                    0) + 1;
                break;
              case 6:
                facteurSuccessIndicateurPerformance[valueKey][degres[5]] =
                  (facteurSuccessIndicateurPerformance[valueKey][degres[5]] ||
                    0) + 1;

                facteurSuccessIndicateurPerformance['ensemble']['tres'] =
                  (facteurSuccessIndicateurPerformance['ensemble']['tres'] ||
                    0) + 1;
                break;

              default:
                break;
            }
          });
        });
      }
      return { facteurSuccessIndicateurPerformance };
    } catch (error) {
      throw Error(error);
    }
  }

  async table8() {
    try {
      let response = await this.db.allDocs({
        include_docs: true,
      });

      let communes = response.rows.splice(0, response.total_rows - 3);

      const degres = ['peu', 'moins', 'neutre', 'important', 'assez', 'tres'];

      const indicateursDePerformanceDegreImportance = {};
      if (communes) {
        const keys = Object.keys(
          communes[0].doc.indicateursDePerformanceDegreImportance
        );
        for (const key of keys) {
          indicateursDePerformanceDegreImportance[key] = {};
          for (let degre of degres) {
            indicateursDePerformanceDegreImportance[key][degre] = 0;
          }
        }

        indicateursDePerformanceDegreImportance['ensemble'] = {
          peu: 0,
          moins: 0,
          neutre: 0,
          important: 0,
          assez: 0,
          tres: 0,
        };

        communes.map((commune) => {
          keys.map((valueKey) => {
            switch (
              parseInt(
                commune.doc.indicateursDePerformanceDegreImportance[valueKey]
              )
            ) {
              case 1:
                indicateursDePerformanceDegreImportance[valueKey][degres[0]] =
                  (indicateursDePerformanceDegreImportance[valueKey][
                    degres[0]
                  ] || 0) + 1;

                indicateursDePerformanceDegreImportance['ensemble']['peu'] =
                  (indicateursDePerformanceDegreImportance['ensemble']['peu'] ||
                    0) + 1;

                break;

              case 2:
                indicateursDePerformanceDegreImportance[valueKey][degres[1]] =
                  (indicateursDePerformanceDegreImportance[valueKey][
                    degres[1]
                  ] || 0) + 1;

                indicateursDePerformanceDegreImportance['ensemble']['moins'] =
                  (indicateursDePerformanceDegreImportance['ensemble'][
                    'moins'
                  ] || 0) + 1;
                break;

              case 3:
                indicateursDePerformanceDegreImportance[valueKey][degres[2]] =
                  (indicateursDePerformanceDegreImportance[valueKey][
                    degres[2]
                  ] || 0) + 1;

                indicateursDePerformanceDegreImportance['ensemble']['neutre'] =
                  (indicateursDePerformanceDegreImportance['ensemble'][
                    'neutre'
                  ] || 0) + 1;
                break;
              case 4:
                indicateursDePerformanceDegreImportance[valueKey][degres[3]] =
                  (indicateursDePerformanceDegreImportance[valueKey][
                    degres[3]
                  ] || 0) + 1;

                indicateursDePerformanceDegreImportance['ensemble'][
                  'important'
                ] =
                  (indicateursDePerformanceDegreImportance['ensemble'][
                    'important'
                  ] || 0) + 1;
                break;
              case 5:
                indicateursDePerformanceDegreImportance[valueKey][degres[4]] =
                  (indicateursDePerformanceDegreImportance[valueKey][
                    degres[4]
                  ] || 0) + 1;

                indicateursDePerformanceDegreImportance['ensemble']['assez'] =
                  (indicateursDePerformanceDegreImportance['ensemble'][
                    'assez'
                  ] || 0) + 1;
                break;
              case 6:
                indicateursDePerformanceDegreImportance[valueKey][degres[5]] =
                  (indicateursDePerformanceDegreImportance[valueKey][
                    degres[5]
                  ] || 0) + 1;

                indicateursDePerformanceDegreImportance['ensemble']['tres'] =
                  (indicateursDePerformanceDegreImportance['ensemble'][
                    'tres'
                  ] || 0) + 1;
                break;

              default:
                break;
            }
          });
        });
      }
      return { indicateursDePerformanceDegreImportance };
    } catch (error) {
      throw Error(error);
    }
  }

  async table9() {
    try {
      let response = await this.db.allDocs({
        include_docs: true,
      });

      let communes = response.rows.splice(0, response.total_rows - 3);

      const degres = ['tres', 'assez', 'important', 'neutre', 'moins', 'peu'];
      const indicateursDePerformancePriseDecision = {};
      if (communes) {
        const keys = Object.keys(
          communes[0].doc.indicateursDePerformancePriseDecision
        );
        for (const key of keys) {
          indicateursDePerformancePriseDecision[key] = {};
          for (let degre of degres) {
            indicateursDePerformancePriseDecision[key][degre] = 0;
          }
        }

        indicateursDePerformancePriseDecision['ensemble'] = {
          peu: 0,
          moins: 0,
          neutre: 0,
          important: 0,
          assez: 0,
          tres: 0,
        };

        communes.map((commune) => {
          keys.map((valueKey) => {
            switch (
              parseInt(
                commune.doc.indicateursDePerformancePriseDecision[valueKey]
              )
            ) {
              case 1:
                indicateursDePerformancePriseDecision[valueKey][degres[0]] =
                  (indicateursDePerformancePriseDecision[valueKey][degres[0]] ||
                    0) + 1;

                indicateursDePerformancePriseDecision['ensemble']['peu'] =
                  (indicateursDePerformancePriseDecision['ensemble']['peu'] ||
                    0) + 1;
                break;

              case 2:
                indicateursDePerformancePriseDecision[valueKey][degres[1]] =
                  (indicateursDePerformancePriseDecision[valueKey][degres[1]] ||
                    0) + 1;

                indicateursDePerformancePriseDecision['ensemble']['moins'] =
                  (indicateursDePerformancePriseDecision['ensemble']['moins'] ||
                    0) + 1;
                break;

              case 3:
                indicateursDePerformancePriseDecision[valueKey][degres[2]] =
                  (indicateursDePerformancePriseDecision[valueKey][degres[2]] ||
                    0) + 1;

                indicateursDePerformancePriseDecision['ensemble']['neutre'] =
                  (indicateursDePerformancePriseDecision['ensemble'][
                    'neutre'
                  ] || 0) + 1;
                break;
              case 4:
                indicateursDePerformancePriseDecision[valueKey][degres[3]] =
                  (indicateursDePerformancePriseDecision[valueKey][degres[3]] ||
                    0) + 1;

                indicateursDePerformancePriseDecision['ensemble']['important'] =
                  (indicateursDePerformancePriseDecision['ensemble'][
                    'important'
                  ] || 0) + 1;
                break;
              case 5:
                indicateursDePerformancePriseDecision[valueKey][degres[4]] =
                  (indicateursDePerformancePriseDecision[valueKey][degres[4]] ||
                    0) + 1;
                indicateursDePerformancePriseDecision['ensemble']['assez'] =
                  (indicateursDePerformancePriseDecision['ensemble']['assez'] ||
                    0) + 1;
                break;
              case 6:
                indicateursDePerformancePriseDecision[valueKey][degres[5]] =
                  (indicateursDePerformancePriseDecision[valueKey][degres[5]] ||
                    0) + 1;
                indicateursDePerformancePriseDecision['ensemble']['tres'] =
                  (indicateursDePerformancePriseDecision['ensemble']['tres'] ||
                    0) + 1;
                break;

              default:
                break;
            }
          });
        });
      }
      return { indicateursDePerformancePriseDecision };
    } catch (error) {
      throw Error(error);
    }
  }
}

export default DB;
