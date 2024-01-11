import * as Yup from "yup";
import { string, Schema, ValidationError } from "yup";

const YupValidationError = Yup.ValidationError;

const LoginDataValidationObject: Schema = Yup.object().shape({
  email: string().email().required().max(155),
  password: string().required().min(6),
});

export { LoginDataValidationObject as validator, ValidationError };
