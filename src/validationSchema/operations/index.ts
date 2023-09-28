import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  action: yup.string().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
