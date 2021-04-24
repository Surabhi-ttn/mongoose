const {
    itemsModel
  } = require('./models');
  
  module.exports.create = async ({
    name,
    quantity,
    isSanitized,
    unit,
    expiryDate,
    createdDate,
    updatedDate,
    category,
    location
  }) => {
    const item = await itemsModel.create({
        name,
        quantity,
        isSanitized,
        unit,
        expiryDate,
        createdDate,
        updatedDate,
        category,
        location
    });
    
    return {
      item
    };
  };
  
  module.exports.getAll = async () => {
    const items = await itemsModel.find();
    return items;
  };

  module.exports.update = async ({ id }, {quantity, isSanitized}) => {
    console.log(id, quantity, isSanitized);
    const items = await itemsModel.updateOne({
      _id: id
    }, {
        quantity: quantity,
        isSanitized: isSanitized
    });
    return items;
  };
  
  module.exports.delete = async ({ id }) => {
    const response = await itemsModel.deleteMany({
      _id: id
    });
    return response;
  };