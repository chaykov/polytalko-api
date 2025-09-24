export enum ErrorType {
  BAD_REQUEST = "BAD_REQUEST",
  NOT_FOUND = "NOT_FOUND",
  INTERNAL = "INTERNAL",
}

export class ApiError extends Error {
  constructor(public type: ErrorType, public message: string = "error") {
    super(message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message = "Bad Request") {
    super(ErrorType.BAD_REQUEST, message);
  }
}
