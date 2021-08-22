const catchAsync = require('../utils/catchAsync');
const { getFizBuzz } = require('../services/records.service');

const fizBuzController = catchAsync(async (req, res) => {
  const output = await getFizBuzz(req.body)
  res.send({output});
});

module.exports = {
  fizBuzController,
}
