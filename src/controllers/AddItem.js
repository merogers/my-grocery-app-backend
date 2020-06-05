const handleAddItem = (req, res, db) => {
  console.log(req.body);
  const { item_name, item_active, user_id } = req.body;
  db.transaction((trx) => {
    if (!item_name || !item_active || !user_id) {
      res.status(400).json("Invalid Submission");
    } else {
      return trx
        .select("item_name")
        .from("groceries")
        .where({ item_name })
        .then((item) => {
          if (item.length) {
            return res.status(400).json("Already Exists");
          } else {
            return trx
              .insert({
                item_name,
                item_active,
                user_id,
              })
              .into("groceries")
              .then(() => res.status(200).json("Success"))
              .catch(() => res.status(400).json("Add Item Failed"));
          }
        })
        .catch(() => res.status(400).json("Add Item Failed"));
    }
  })
    .catch(() => res.status(400).json("Error adding entry"));
};

module.exports = {
  handleAddItem,
};
