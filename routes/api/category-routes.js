const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData1 = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData1);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData2 = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if(!categoryData2) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    };

    res.status(200).json(categoryData2);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData3 = await Category.create(req.body);
    res.status(200).json(categoryData3);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData4 = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });

    if(!categoryData4) {
      res.status(404).json({ message: 'No category found with that id!' })
      return;
    };

    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData5 = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });

    if(!categoryData5) {
      res.status(404).json({ message: 'No tag found with that id!' })
      return;
    };

    res.status(200).json({ message: 'Tag deleted!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
