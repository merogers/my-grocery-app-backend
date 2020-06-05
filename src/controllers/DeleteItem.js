const handleDeleteItem = (req, res, db) => {
  console.log(req.body);
  const { item_id } = req.body;
  db.transaction(trx => {
    if (!item_id) {
      res.status(400).json('Invalid Submission')
    } else {
      return trx
        .select('*')
        .from('groceries')
        .where({ item_id })
        .delete()
        .then(() => res.status(200).json('Delete Success'))
        .catch(() => res.status(400).json('Delete Failed'))
    }
  })
    .catch(() => res.status(400).json("Error deleting entry"));
}

module.exports = {
  handleDeleteItem
}