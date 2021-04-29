const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData1 = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData1);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData2 = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if(!tagData2) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    };

    res.status(200).json(tagData2);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData3 = await Tag.create(req.body);
    res.status(200).json(tagData3);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData4 = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });

    if(!tagData4) {
      res.status(404).json({ message: 'No tag found with that id!' })
      return;
    };

    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData5 = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });

    if(!tagData5) {
      res.status(404).json({ message: 'No tag found with that id!' })
      return;
    };

    res.status(200).json({ message: 'Tag deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
