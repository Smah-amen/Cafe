export function valName(value, name, errorHandler, removeErrors) {
  removeErrors(name);
  if (!/^[a-zA-Z_]+$/g.test(value)) {
    errorHandler({ [name]: "Name must contain only letters." });
    console.log("Name must contain only letters.");
  }
  if (!/^.{3,20}$/g.test(value)) {
    errorHandler({
      [name]:
        "Name must be more than 3 characters long and less than 20 characters long.",
    });
  }
}

export function valEmail(value, name, errorHandler, removeErrors) {
  removeErrors(name);
  if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(value)) {
    errorHandler({ [name]: "Email is invalid." });
    console.log("Email is invalid.");
  }
}

export function valPassword(value, name, errorHandler, removeErrors) {
  removeErrors(name);
  if (!/[a-z]/g.test(value)) {
    errorHandler({ [name]: "At least one lowercase letter" });
    console.log("At least one lowercase letter");
  }
  if (!/[A-Z]/g.test(value)) {
    errorHandler({ [name]: "At least one uppercase letter" });
    console.log("At least one uppercase letter");
  }
  if (!/\d/g.test(value)) {
    errorHandler({ [name]: "At least one digit" });
    console.log("At least one digit");
  }
  if (!/[@$!%*?&]/g.test(value)) {
    errorHandler({
      [name]: "At least one special character (@$!%*?&)",
    });
    console.log("At least one special character (@$!%*?&)");
  }
  if (!/^.{8,}$/g.test(value)) {
    errorHandler({ [name]: "Minimum 8 characters" });
    console.log("Minimum 8 characters");
  }
}

export function valConfermPassword(
  value,
  name,
  errorHandler,
  removeErrors,
  pass = ""
) {
  removeErrors(name);
  if (value !== pass) {
    errorHandler({ [name]: "Passwords do not match." });
    console.log("Passwords do not match.");
  }
}
