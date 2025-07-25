exports.getUsers = (req, res) => {
  res.json([{ _id: '1', name: 'Alice' }, { _id: '2', name: 'Bob' }]);
};
