const connection = require('./database/connection');

const getAll = async () => connection.execute(
  'SELECT * FROM StoreManager.products',
);

const getById = async (productId) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
);

const insertName = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products(name) VALUE (?)', [name],
  );
  return { id: insertId, name };
};

module.exports = {
  getAll,
  getById,
  insertName,
};
