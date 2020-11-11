const db = require("../models");
const Wishlist = db.wishlist;
const Op = db.Sequelize.Op;

// A user should be able to create a wishlist and add items.
exports.create = (req, res) => {
  // Validate request
  if (!req.body.itemName) {
    res.status(400).send({
      message: "Can not be empty!"
    });
    return;
  }

  // Create a wishlist
  const wishlist = {
    itemName: req.body.itemName,
    itemDescription: req.body.itemDescription,
    published: req.body.published ? req.body.published : false
  };

  // Save Wishlist in the database
  Wishlist.create(wishlist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Wishlist."
      });
    });
};

// A user should be able to observe a list of wishlists.
exports.findAll = (req, res) => {
  const itemName = req.query.itemName;
  var condition = itemName ? { itemName: { [Op.iLike]: `%${itemName}%` } } : null;

  Wishlist.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while observing wishlists."
      });
    });
};

// Find one  wishlist by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Wishlist.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Can not find wishlist with id=" + id
      });
    });
};

// Update a wishlist by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Wishlist.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Wishlist was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update wishlist with id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating wishlist with id=" + id
      });
    });
};