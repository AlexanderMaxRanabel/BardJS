function run(code) {
    // Create a new environment.
    const env = {
      variables: {},
      functions: {},
      objects: {},
      arrays: {},
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
