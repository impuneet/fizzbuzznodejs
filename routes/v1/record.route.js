const express = require('express');
const { recordsController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { programValidation } = require('../../validations')
const router = express.Router();

router
  .route('/')
  .post( validate(programValidation.programValidation), recordsController.fizBuzController);

module.exports = router;