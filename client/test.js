const { getUsers } = require('../../src/controllers/userController');

test('getUsers returns user array', () => {
  const req = {};
  const res = {
    json: jest.fn()
  };
  getUsers(req, res);
  expect(res.json).toHaveBeenCalledWith([{ _id: '1', name: 'Alice' }, { _id: '2', name: 'Bob' }]);
});
