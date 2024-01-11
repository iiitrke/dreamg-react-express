import bcrypt from "bcryptjs";

const compare = (inputPassowrd: string, bcryptedPassword: string) => {
  return bcrypt.compare(inputPassowrd, bcryptedPassword);
};

export default { compare };
