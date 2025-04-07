const buttons = document.querySelectorAll(".buttons");

// STATE
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
    if (button.innerHTML !== "RESET" && button.innerHTML !== "=") {
      if (
        state.operation !== "+" &&
        state.operation !== "-" &&
        state.operation !== "x" &&
        state.operation !== "÷"
      ) {
        if (state.operator1.toString()[0] === "0") {
          state.operator1 += button.innerHTML.toString();
          display.innerHTML = state.operator1.toString();
          console.log(state.operator1);
        }
      } else {
        console.log("else");
        state.operator2 += button.innerHTML.toString();
        display.innerHTML = state.operator2;

        console.log(state);
      }
    }

    // handle addition operation
    if (button.innerHTML === "+") {
      state.operation = "+";
      state.operator1 = display.innerHTML.slice(0, -1);
      display.innerHTML = state.operator1;

      console.log(state);
    } else if (button.innerHTML === "-") {
      console.log("hit minus");
      state.operation = "-";
      state.operator1 = display.innerHTML.slice(0, -1);
      display.innerHTML = state.operator1;

      console.log(state);
    } else if (button.innerHTML === "x") {
      console.log("hit minus");
      state.operation = "x";
      state.operator1 = display.innerHTML.slice(0, -1);
      display.innerHTML = state.operator1;

      console.log(state);
    } else if (button.innerHTML === "÷") {
      console.log("hit minus");
      state.operation = "÷";
      state.operator1 = display.innerHTML.slice(0, -1);
      display.innerHTML = state.operator1;

      console.log(state);
    }

    // handle result operation
    if (button.innerHTML === "=") {
      if (state.operation === "+") {
        state.result = Number(state.operator1) + Number(state.operator2);
        display.innerHTML = state.result;
      } else if (state.operation === "-") {
        state.result = Number(state.operator1) - Number(state.operator2);
        display.innerHTML = state.result;
      } else if (state.operation === "x") {
        state.result = Number(state.operator1) * Number(state.operator2);
        display.innerHTML = state.result;
      } else if (state.operation === "÷") {
        state.result = Number(state.operator1) / Number(state.operator2);
        display.innerHTML = state.result;
      }
      console.log(state);
    }
    // reset
    if (button.innerHTML === "RESET") {
      console.log(display);
      state.operator1 = 0;
      state.operator2 = 0;
      state.operation = 0;
      display.innerHTML = "0";
    }
  });
}
