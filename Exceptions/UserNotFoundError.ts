export type ErrorName = "USER NOT FOUND ERROR" | "COULD NOT CONNECT TO DB";
class UserNotFoundError extends Error {
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

export { UserNotFoundError };
