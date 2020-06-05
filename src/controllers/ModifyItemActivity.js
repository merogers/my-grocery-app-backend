const handleModifyItemActivity = (req, res, db) => {
  const { item_id, item_active } = req.body;
  db.transaction(trx => {
    if (!item_id) {
      res.status(400).json('Invalid Submission')
    } else {
      return trx
        .select('item_active')
        .from('groceries')
        .where({ item_id })
        .update({ item_active })
        .then(() => res.status(200).json('Success'))
        .catch(() => res.status(400).json('Failed'))
    }
  })
    .catch(() => res.status(400).json("Error removing entry"));
}

module.exports = {
  handleModifyItemActivity
}