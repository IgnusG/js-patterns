function curryingPartialApplication() {
  /* Currying vs Partial Application */
  console.warn("Currying vs Partial Application");

  function sum3(x, y, z) {
    return x + y + z;
  }

  function curry3(fn) {
    return function(one) {
      return function(two) {
        return function(three) {
          return fn(one, two, three);
        };
      };
    };
  }

  // Curry: Transform function with n arrity to n functions with single arrity
  const curriedSum3 = curry3(sum3);
  console.log("Curry:", sum3(1, 2, 3) === curriedSum3(1)(2)(3));

  // Partial Application: Fix less than n parameters in n arrity function
  // Can use currying to facilitate
  const onePlusTwoPlus = curriedSum3(1)(2);
  console.log("Partial Application:", sum3(1, 2, 3) === onePlusTwoPlus(3));

  // Or language features such as JS' bind
  const boundOnePlusTwoPlus = sum3.bind(this, 1, 2);
  console.log(
    "Bound Partial Application: ",
    sum3(1, 2, 3) === boundOnePlusTwoPlus(3)
  );
}

export { curryingPartialApplication };
