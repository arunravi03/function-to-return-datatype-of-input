// 3. Create a function to return a datatype array not object

/**
 * Algorithm
 * Step1 - Create a function with an input
 * Step2 - Check whether the the given input is matching with the datatype
 * Step3 - If given input is matching, print the datatype of a input
 * Step4 - If the given input is null, then print please pass the input
 */

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
