/** @format */

const { Structure } = require('../config/sync');

// creation de la commune
exports.create_commune = async (req, res) => {
  const data = req.body;
  try {
    const commune = await Structure.create(data);
    commune
      ? setTimeout(() => {
          res.status(200).send(commune);
        }, 3000)
      : res.status(401).send({
          error: 'Error',
        });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.communes = async (req, res) => {
  try {
    const communes = await Structure.findAll();
    res.status(200).send(communes);
  } catch (error) {
    res.status(500).send({ error });
  }
};

// Tableau 1: Situation  des CTD selon qu'elles disposent  ou non d'un PCD
exports.table1 = async (req, res) => {
  try {
    const with_pcd = await Structure.findAndCountAll({
      where: {
        pcdExist: true,
      },
    });

    const without_pcd = await Structure.findAndCountAll({
      where: {
        pcdExist: false,
      },
    });
    if (with_pcd && without_pcd) {
      res.status(200).send({
        with_pcd: with_pcd.count,
        without_pcd: without_pcd.count,
      });
    } else {
      res.status(401).send({
        error: 'Error',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// Tableau2:  Répartition des CTD suivant les dimensions  de performence susceptibles d'affecter l'évaluation de la performance
exports.table2 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const dimensionStrategiques = {};
    if (communes) {
      const keys = Object.keys(communes[0].dimensionStrategique);
      for (const key of keys) {
        dimensionStrategiques[key] = 0;
      }
      communes.map((commune) => {
        keys.map((valueKey) => {
          if (commune.dimensionStrategique[valueKey].status) {
            dimensionStrategiques[valueKey] =
              (dimensionStrategiques[valueKey] || 0) + 1;
          }
        });
      });
    }

    res.status(200).send({ dimensionStrategiques });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

exports.table3 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const dimensionStrategiques = {
      withPcd: {},
      withoutPcd: {},
    };
    if (communes) {
      const keys = Object.keys(communes[0].dimensionStrategique);
      for (const key of keys) {
        dimensionStrategiques.withPcd[key] = 0;
        dimensionStrategiques.withoutPcd[key] = 0;
      }
      communes.map((commune) => {
        keys.map((valueKey) => {
          if (commune.pcdExist) {
            if (commune.dimensionStrategique[valueKey].status) {
              dimensionStrategiques.withPcd[valueKey] =
                (dimensionStrategiques.withPcd[valueKey] || 0) + 1;
            }
          } else {
            if (commune.dimensionStrategique[valueKey].status) {
              dimensionStrategiques.withoutPcd[valueKey] =
                (dimensionStrategiques.withoutPcd[valueKey] || 0) + 1;
            }
          }
        });
      });
    }

    res.status(200).send({ dimensionStrategiques });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// Tableau 4: Répartition des CTD par dimension de performance susceptibles d'affecter l'évaluation de la performance suivant  qu'elle dispose d'un PCD

// Tableau 4: Répartition des CTD par outil de vision stratégique     selon l'existence ou non du PCD

exports.table4 = async (req, res) => {
  try {
    const with_pcd_with_vision = await Structure.findAndCountAll({
      where: {
        pcdExist: true,
        visionStrategique: true,
      },
    });

    const without_pcd_vision = await Structure.findAndCountAll({
      where: {
        pcdExist: false,
        visionStrategique: true,
      },
    });
    if (with_pcd_with_vision && without_pcd_vision) {
      res.status(200).send({
        with_pcd_with_vision: with_pcd_with_vision.count,
        without_pcd_vision: without_pcd_vision.count,
      });
    } else {
      res.status(401).send({
        error: 'Error',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// Tableau 5: Répartition des CTD par outil de vision stratgique selon les dimensions pouvant affecter la performance

exports.table5 = async (req, res) => {};

exports.table6 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const degres = ['peu', 'moins', 'neutre', 'important', 'assez', 'tres'];

    const dimensionStrategique = {};
    if (communes) {
      const keys = Object.keys(communes[0].dimensionStrategique);
      for (const key of keys) {
        dimensionStrategique[key] = {};
        for (degre of degres) {
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
          switch (parseInt(commune.dimensionStrategique[valueKey].degre)) {
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
    res.status(200).send({ dimensionStrategique });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// Tableau 7: Répartition des CTD par facteurs clés de succès selon leur perception de l'importance desdits facteurs dans l'atteinte de la performance de la CTD

exports.table7 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const degres = ['peu', 'moins', 'neutre', 'important', 'assez', 'tres'];

    const facteurSuccessIndicateurPerformance = {};
    if (communes) {
      const keys = Object.keys(communes[0].facteurSuccessIndicateurPerformance);
      for (const key of keys) {
        facteurSuccessIndicateurPerformance[key] = {};
        for (degre of degres) {
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
            parseInt(commune.facteurSuccessIndicateurPerformance[valueKey])
          ) {
            case 1:
              facteurSuccessIndicateurPerformance[valueKey][degres[0]] =
                (facteurSuccessIndicateurPerformance[valueKey][degres[0]] ||
                  0) + 1;

              facteurSuccessIndicateurPerformance['ensemble']['peu'] =
                (facteurSuccessIndicateurPerformance['ensemble']['peu'] || 0) +
                1;
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
                (facteurSuccessIndicateurPerformance['ensemble']['important'] ||
                  0) + 1;
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
                (facteurSuccessIndicateurPerformance['ensemble']['tres'] || 0) +
                1;
              break;

            default:
              break;
          }
        });
      });
    }
    res.status(200).send({ facteurSuccessIndicateurPerformance });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

// Tableau 8: Répartition des CTD par Indicateur de performance selon leur perception de l'importance desits indicateurs

exports.table8 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const degres = ['peu', 'moins', 'neutre', 'important', 'assez', 'tres'];

    const indicateursDePerformanceDegreImportance = {};
    if (communes) {
      const keys = Object.keys(
        communes[0].indicateursDePerformanceDegreImportance
      );
      for (const key of keys) {
        indicateursDePerformanceDegreImportance[key] = {};
        for (degre of degres) {
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
            parseInt(commune.indicateursDePerformanceDegreImportance[valueKey])
          ) {
            case 1:
              indicateursDePerformanceDegreImportance[valueKey][degres[0]] =
                (indicateursDePerformanceDegreImportance[valueKey][degres[0]] ||
                  0) + 1;

              indicateursDePerformanceDegreImportance['ensemble']['peu'] =
                (indicateursDePerformanceDegreImportance['ensemble']['peu'] ||
                  0) + 1;

              break;

            case 2:
              indicateursDePerformanceDegreImportance[valueKey][degres[1]] =
                (indicateursDePerformanceDegreImportance[valueKey][degres[1]] ||
                  0) + 1;

              indicateursDePerformanceDegreImportance['ensemble']['moins'] =
                (indicateursDePerformanceDegreImportance['ensemble']['moins'] ||
                  0) + 1;
              break;

            case 3:
              indicateursDePerformanceDegreImportance[valueKey][degres[2]] =
                (indicateursDePerformanceDegreImportance[valueKey][degres[2]] ||
                  0) + 1;

              indicateursDePerformanceDegreImportance['ensemble']['neutre'] =
                (indicateursDePerformanceDegreImportance['ensemble'][
                  'neutre'
                ] || 0) + 1;
              break;
            case 4:
              indicateursDePerformanceDegreImportance[valueKey][degres[3]] =
                (indicateursDePerformanceDegreImportance[valueKey][degres[3]] ||
                  0) + 1;

              indicateursDePerformanceDegreImportance['ensemble']['important'] =
                (indicateursDePerformanceDegreImportance['ensemble'][
                  'important'
                ] || 0) + 1;
              break;
            case 5:
              indicateursDePerformanceDegreImportance[valueKey][degres[4]] =
                (indicateursDePerformanceDegreImportance[valueKey][degres[4]] ||
                  0) + 1;

              indicateursDePerformanceDegreImportance['ensemble']['assez'] =
                (indicateursDePerformanceDegreImportance['ensemble']['assez'] ||
                  0) + 1;
              break;
            case 6:
              indicateursDePerformanceDegreImportance[valueKey][degres[5]] =
                (indicateursDePerformanceDegreImportance[valueKey][degres[5]] ||
                  0) + 1;

              indicateursDePerformanceDegreImportance['ensemble']['tres'] =
                (indicateursDePerformanceDegreImportance['ensemble']['tres'] ||
                  0) + 1;
              break;

            default:
              break;
          }
        });
      });
    }
    res.status(200).send({ indicateursDePerformanceDegreImportance });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

exports.table9 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const degres = ['tres', 'assez', 'important', 'neutre', 'moins', 'peu'];
    const indicateursDePerformancePriseDecision = {};
    if (communes) {
      const keys = Object.keys(
        communes[0].indicateursDePerformancePriseDecision
      );
      for (const key of keys) {
        indicateursDePerformancePriseDecision[key] = {};
        for (degre of degres) {
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
            parseInt(commune.indicateursDePerformancePriseDecision[valueKey])
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
                (indicateursDePerformancePriseDecision['ensemble']['neutre'] ||
                  0) + 1;
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
    res.status(200).send({ indicateursDePerformancePriseDecision });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
