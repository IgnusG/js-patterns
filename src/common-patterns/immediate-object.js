function immediateObjects() {
  /* Immediate Object Initialization */
  console.warn("Immediate Object Initialization");

  // Scope small dataset with its functions anonymously
  // Think of it as anonymous micro-classes
  ({
    who: "World!",

    sayWelcome: function() {
      console.log("Hello, " + this.who);
    },

    sayGoodbye: function() {
      console.log("Goodbye, " + this.who);
    },

    init: function() {
      this.sayWelcome();
      this.sayGoodbye();
    }
  }.init());
}

export { immediateObjects };
