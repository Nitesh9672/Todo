const Item = require("../models/items");
const initialTask = [{ name: "Cricket" }, { name: "Hockey" }];
module.exports.getItem = async (req, res, next) => {
  try {
    let data = await Item.find({});
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

module.exports.postItem = async (req, res, next) => {
  try {
    const { title } = req.body;
    const newTask = new Item({
      title: title,
    });
    await newTask.save();
    res.redirect("/taskitems");
  } catch (err) {
    res.send(err);
  }
};
module.exports.getDeleteItem = async (req, res, next) => {
  try {
    const { id } = req.query;
    console.log(id);

    await Item.deleteOne({ _id: id });
    res.redirect("/taskitems");
  } catch (error) {
    res.send(error);
  }
};
