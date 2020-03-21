import commonPatterns from "./common-patterns";

class Button {
  constructor(name) {
    this.$ = document.createElement("button");
    this.$.innerText = name;
  }
  renderAt(element) {
    element.appendChild(this.$);
  }
  onClick(handle) {
    this.$.addEventListener("click", () => {
      console.clear();
      handle();
    });
  }
}

const buttons = Object.entries(commonPatterns).map(
  ([importName, importFunction]) => {
    const button = new Button(importName);
    button.onClick(importFunction);
    return button;
  }
);

buttons.forEach(button =>
  button.renderAt(document.getElementById("common-patters-buttons"))
);
