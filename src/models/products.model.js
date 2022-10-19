const connection = require('./database/connection');

const selectGetAll = async () => connection.execute(
  'SELECT * FROM StoreManager.products',
);

const selectGetById = async (productId) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
);

const insertName = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUE (?)', [name],
  );
  return { id: insertId, name };
};

module.exports = {
  selectGetAll,
  selectGetById,
  insertName,
};
