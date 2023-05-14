function run(code) {
  // Create a new environment.
  const env = {
    variables: {},
    functions: {},
    objects: {},
    arrays: {},
  };

  // Add arithmetic operators.
  env.operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
  };

  // Add comparison operators.
  env.comparators = {
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
    "==": (a, b) => a == b,
    "!=": (a, b) => a != b,
  };

  // Add logical operators.
  env.logicals = {
    "&&": (a, b) => a && b,
    "||": (a, b) => a || b,
    "!": (a) => !a,
  };

  // Evaluate the code.
  try {
    eval(code, env);
  } catch (e) {
    console.log("Code:" + code);
    console.error(e);
  }
}

  // Example usage.
  run(`
    var x = {
      name: "John Doe",
      age: 30,
    };
    let y = [4, 5 , 7];
    console.log(x.name);
  `);
