/** @format */

const { Structure } = require('../config/sync');

exports.create_commune = async (req, res) => {
  const data = req.body;
  try {
    const commune = await Structure.create(data);
    commune
      ? res.status(200).send(commune)
      : res.status(401).send({
          error: 'Error',
        });
  } catch (error) {
    res.status(500).send({ error });
  }
};
