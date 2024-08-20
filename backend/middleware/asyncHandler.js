// handle all the try/catch blocks, directly try and call next middlerware
// directly wrap it around all the callbacks in the routes
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
