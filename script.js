const buttons = document.querySelectorAll(".buttons");
const state = {
  operator1: 0,
  operator2: 0,
  operation: "",
  result: 0,
};
for (let button of buttons) {
  button.addEventListener("click", function () {
    // if a button is clicked that is not resetting or deleting or equalling then combine them together to make it one operator
    const display = document.querySelector(".displayScreen");
    if (
      button.innerHTML !== "RESET" &&
      button.innerHTML !== "DEL" &&
      button.innerHTML !== "="
    ) {
      display.innerHTML.toString()[0] === "0"
        ? (display.innerHTML = button.innerHTML)
        : (display.innerHTML += button.innerHTML);
    } else if (button.innerHTML === "DEL") {
      // targets the final number
      const numToString = display.innerHTML.toString();
      // goes back starting from the end which gives last digit
      console.log(numToString.slice(0, -1));
      display.innerHTML = numToString.slice(0, -1);
    }

    // reset
    if (button.innerHTML === "RESET") {
      console.log(display);
      display.innerHTML = "0";
    }
  });
}
