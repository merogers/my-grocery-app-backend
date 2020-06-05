const PopulateDBHandler = (db) => {
  db.schema
    .hasTable("groceries")
    .then(function (exists) {
      if (!exists) {
        return db.schema.createTable("groceries", function (createColumn) {
          createColumn.increments("item_id").primary();
          createColumn.string("item_name", 25);
          createColumn.boolean("item_active");
          createColumn.integer("user_id");
          console.log("Table groceries created!");
        });
      }
    })
    .catch(() => console.log("Error creating groceries table"));
};

module.exports = {
  PopulateDBHandler,
};
