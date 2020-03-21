function singleton() {
  /* Singleton */
  console.warn("Singleton");

  /*
   * Singletons are good if:
   * 1. You should only ever have a single instance
   * 2. You need to manager that instance
   *
   * They CAN be bad due to:
   * 1. Often abused as global instance (hiding dependencies)
   * 2. Tight coupling - difficult testing
   * 3. Persistant instance state - difficult testing
   */

  class Single {
    constructor() {
      if (typeof Single.instance === "object") {
        return Single.instance;
      }
      Single.instance = this;
    }
  }

  const firstSingle = new Single();
  const secondSingle = new Single();

  console.log("Singleton", firstSingle === secondSingle);
}

export { singleton };
