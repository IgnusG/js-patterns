import commonPatterns from "./common-patterns";

class Button {
  constructor(name) {
    this.$ = document.createElement("button");
    this.$.innerText = name;
  }

  render(at) {
    at.appendChild(this.$);
  }

  onClick(handle) {
    console.clear();
    this.$.addEventListener("click", handle);
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
  button.render(document.getElementById("common-patters-buttons"))
);
