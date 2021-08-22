const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const getFizBuzz =  (payload) => {
    const { count } = payload;
    try {
      let output = [];
      for (i=1; i<=count; i++) {
        if (i%15 == 0)  output.push("FizzBuzz");
        else if(i%3 == 0) output.push("Fizz");
        else if(i%5 == 0) output.push("Buzz");
        else output.push(i)
      }
      return output;
    } catch (error) {
        console.log(error);
        throw new ApiError(httpStatus.BAD_REQUEST, 'Error in logic building');
    }
}

module.exports = {
  getFizBuzz,
}