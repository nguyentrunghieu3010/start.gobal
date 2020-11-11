module.exports = app => {
  const wishlist = require("../controllers/wishlist.controller.js");

  var router = require("express").Router();

  // A user should be able to create a wishlist and add items.
  router.post("/", wishlist.create);

  // A user should be able to observe a list of wishlists.
  router.get("/", wishlist.findAll);

  // A user should be able to see details of any own wishlist
  router.get("/:id", wishlist.findOne);

  // A user should be able to edit wishlist
  router.put("/:id", wishlist.update);

  app.use("/api/wishlist", router);
};
