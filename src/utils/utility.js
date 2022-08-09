const successResponse = (res, data) => {
  let code, response;
  code = 200;
  response = data;

  return res.status(code).json(response);
};

const badRequest = (res, err) => {
  let code = 400;
  let response = err;

  return res.status(code).json(response);
};

module.exports = { successResponse, badRequest };
