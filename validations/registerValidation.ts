import * as Yup from "yup";
import { object, string, number, date, InferType, ValidationError } from "yup";

const registerValidationObject: Yup.Schema = Yup.object().shape({
  name: string().required().max(191).min(1),
  email: string().email().required().max(155),
  password: string().required().min(6),
});

export { registerValidationObject as Validator, ValidationError };
