const handleGetActive = (req, res, db) => {
  db.transaction((trx) => {
    return (
      trx
        .select("*")
        .from("groceries")
        // .where({ item_active })
        .then((item) => {
          if (item.length) {
            res.json(item);
          } else {
            res.status(400).json("No Entries Found");
          }
        })
        .catch(() => res.status(400).json("Entry Fetch Failed"))
    );
  }).catch(() => res.status(400).json("Error fetching entries"));
};

module.exports = {
  handleGetActive,
};
