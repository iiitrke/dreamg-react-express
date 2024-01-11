type ErrorName = "USER ALREADY EXIST" | "COULD NOT CONNECT TO DB";
class UserExistExceptionError extends Error {
  name: ErrorName;
  message: string;
  cause: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: ErrorName;
    message: string;
    cause?: any;
  }) {
    super(message);
    this.message = message;
    this.name = name;
    this.cause = cause;
  }
}

export { UserExistExceptionError };
