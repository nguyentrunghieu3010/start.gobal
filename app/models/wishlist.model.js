module.exports = (sequelize, Sequelize) => {
  const Wishlist = sequelize.define("wishlist", {
    itemName: {
      type: Sequelize.STRING
    },
    itemDescription: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Wishlist;
};
