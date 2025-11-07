import * as Yup from 'yup';
import mongoose from 'mongoose';

const idValidator = Yup.object().shape({
  id: Yup.string()
    .test('is-valid-objectid', 'ID must be a valid MongoDB ObjectID', value => {
      return mongoose.Types.ObjectId.isValid(value);
    })
    .required('ID is required'),
});

export default idValidator;