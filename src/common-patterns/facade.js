function facade() {
  /* Façade */
  console.warn("Façade");

  // Provides a simplified interface to a more complex behaviour
  // Kind of like an internal **interface**

  const eventFacade = {
    stop: function(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  function childActionHandler(action) {
    console.log("I'm child!");
    eventFacade.stop(action); // Try to comment me!
  }
  function parentActionHandler(action) {
    console.log("Hi Child! I'm parent");
    console.assert(false);

    eventFacade.stop(action);
  }

  //
  //
  // Plumbing
  const child = document.createElement("div");
  const parent = document.createElement("div");

  parent.appendChild(child);
  document.body.appendChild(parent);

  child.addEventListener("custom", childActionHandler);
  parent.addEventListener("custom", parentActionHandler);

  child.dispatchEvent(new Event("custom", { bubbles: true }));

  child.removeEventListener("custom", childActionHandler);
  parent.removeEventListener("custom", parentActionHandler);
}

export { facade };
