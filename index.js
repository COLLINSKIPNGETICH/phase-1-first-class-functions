// The receivesAFunction function:
function receivesAFunction(callback) {
  callback();
}

receivesAFunction(() => {
  console.log("Callback function called!");
});

// The returnsANamedFunction function:
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function!");
  };
}
const namedFunc = returnsANamedFunction();
namedFunc();

// The returnsAnAnonymousFunction function:
function returnsAnAnonymousFunction() {
  return () => {
    console.log("This is an anonymous function!");
  };
}
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); 

 