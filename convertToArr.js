TestType = (variable) => {
  if (Array.isArray(variable)) {
    return "array";
  } else if (variable === "string") {
    return "string";
  } else if (variable === "number") {
    return "number";
  } else if (variable !== "null") {
    return "Please enter a input";
  } else {
    return typeof variable;
  }
};
