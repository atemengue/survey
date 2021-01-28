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
exports.commune_with_pcd = async (req, res) => {
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

exports.table4 = async (req, res) => {};

// Tableau 5: Répartition des CTD par outil de vision stratgique selon les dimensions pouvant affecter la performance

exports.table5 = async (req, res) => {};

exports.table6 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const degres = ['tres', 'assez', 'important', 'neutre', 'moins', 'peu'];
    const dimensionStrategiques = {};
    if (communes) {
      const keys = Object.keys(communes[0].dimensionStrategique);
      for (const key of keys) {
        dimensionStrategiques[key] = {};
        for (degre of degres) {
          dimensionStrategiques[key][degre] = 0;
        }
      }
      communes.map((commune) => {
        keys.map((valueKey) => {
          switch (commune.dimensionStrategique[valueKey].degre) {
            case 1:
              dimensionStrategiques[valueKey][degres[5]] =
                (dimensionStrategiques[valueKey][degres[5]] || 0) + 1;
              break;

            case 2:
              dimensionStrategiques[valueKey][degres[4]] =
                (dimensionStrategiques[valueKey][degres[4]] || 0) + 1;
              break;

            case 3:
              dimensionStrategiques[valueKey][degres[3]] =
                (dimensionStrategiques[valueKey][degres[3]] || 0) + 1;
              break;
            case 4:
              dimensionStrategiques[valueKey][degres[2]] =
                (dimensionStrategiques[valueKey][degres[2]] || 0) + 1;
              break;
            case 5:
              dimensionStrategiques[valueKey][degres[1]] =
                (dimensionStrategiques[valueKey][degres[1]] || 0) + 1;
              break;
            case 6:
              dimensionStrategiques[valueKey][degres[0]] =
                (dimensionStrategiques[valueKey][degres[0]] || 0) + 1;
              break;

            default:
              break;
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

// Tableau 7: Répartition des CTD par facteurs clés de succès selon leur perception de l'importance desdits facteurs dans l'atteinte de la performance de la CTD

exports.table7 = async (req, res) => {
  try {
    const communes = await Structure.findAll({
      raw: true,
    });

    const degres = ['tres', 'assez', 'important', 'neutre', 'moins', 'peu'];
    const successFactors = {};
    if (communes) {
      const keys = Object.keys(communes[0].facteurSuccessIndicateurPerformance);
      for (const key of keys) {
        successFactors[key] = {};
        for (degre of degres) {
          successFactors[key][degre] = 0;
        }
      }
      communes.map((commune) => {
        keys.map((valueKey) => {
          switch (commune.facteurSuccessIndicateurPerformance[valueKey]) {
            case 1:
              successFactors[valueKey][degres[5]] =
                (successFactors[valueKey][degres[5]] || 0) + 1;
              break;

            case 2:
              successFactors[valueKey][degres[4]] =
                (successFactors[valueKey][degres[4]] || 0) + 1;
              break;

            case 3:
              successFactors[valueKey][degres[3]] =
                (successFactors[valueKey][degres[3]] || 0) + 1;
              break;
            case 4:
              successFactors[valueKey][degres[2]] =
                (successFactors[valueKey][degres[2]] || 0) + 1;
              break;
            case 5:
              successFactors[valueKey][degres[1]] =
                (successFactors[valueKey][degres[1]] || 0) + 1;
              break;
            case 6:
              successFactors[valueKey][degres[0]] =
                (successFactors[valueKey][degres[0]] || 0) + 1;
              break;

            default:
              break;
          }
        });
      });
    }
    res.status(200).send({ successFactors });
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

    const degres = ['tres', 'assez', 'important', 'neutre', 'moins', 'peu'];
    const indicateursImportance = {};
    if (communes) {
      const keys = Object.keys(
        communes[0].indicateursDePerformanceDegreImportance
      );
      for (const key of keys) {
        indicateursImportance[key] = {};
        for (degre of degres) {
          indicateursImportance[key][degre] = 0;
        }
      }
      communes.map((commune) => {
        keys.map((valueKey) => {
          switch (commune.indicateursDePerformanceDegreImportance[valueKey]) {
            case 1:
              indicateursImportance[valueKey][degres[5]] =
                (indicateursImportance[valueKey][degres[5]] || 0) + 1;
              break;

            case 2:
              indicateursImportance[valueKey][degres[4]] =
                (indicateursImportance[valueKey][degres[4]] || 0) + 1;
              break;

            case 3:
              indicateursImportance[valueKey][degres[3]] =
                (indicateursImportance[valueKey][degres[3]] || 0) + 1;
              break;
            case 4:
              indicateursImportance[valueKey][degres[2]] =
                (indicateursImportance[valueKey][degres[2]] || 0) + 1;
              break;
            case 5:
              indicateursImportance[valueKey][degres[1]] =
                (indicateursImportance[valueKey][degres[1]] || 0) + 1;
              break;
            case 6:
              indicateursImportance[valueKey][degres[0]] =
                (indicateursImportance[valueKey][degres[0]] || 0) + 1;
              break;

            default:
              break;
          }
        });
      });
    }
    res.status(200).send({ indicateursImportance });
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
    const indicateursDecisions = {};
    if (communes) {
      const keys = Object.keys(
        communes[0].indicateursDePerformancePriseDecision
      );
      for (const key of keys) {
        indicateursDecisions[key] = {};
        for (degre of degres) {
          indicateursDecisions[key][degre] = 0;
        }
      }
      communes.map((commune) => {
        keys.map((valueKey) => {
          switch (commune.indicateursDePerformancePriseDecision[valueKey]) {
            case 1:
              indicateursDecisions[valueKey][degres[5]] =
                (indicateursDecisions[valueKey][degres[5]] || 0) + 1;
              break;

            case 2:
              indicateursDecisions[valueKey][degres[4]] =
                (indicateursDecisions[valueKey][degres[4]] || 0) + 1;
              break;

            case 3:
              indicateursDecisions[valueKey][degres[3]] =
                (indicateursDecisions[valueKey][degres[3]] || 0) + 1;
              break;
            case 4:
              indicateursDecisions[valueKey][degres[2]] =
                (indicateursDecisions[valueKey][degres[2]] || 0) + 1;
              break;
            case 5:
              indicateursDecisions[valueKey][degres[1]] =
                (indicateursDecisions[valueKey][degres[1]] || 0) + 1;
              break;
            case 6:
              indicateursDecisions[valueKey][degres[0]] =
                (indicateursDecisions[valueKey][degres[0]] || 0) + 1;
              break;

            default:
              break;
          }
        });
      });
    }
    res.status(200).send({ indicateursDecisions });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
