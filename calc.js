let result = document.getElementById("oo");
let buttons = document.querySelectorAll(".btn");
let clear = document.getElementById("clear");
let equals = document.getElementById("equals");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    result.value += button.textContent;
  });
});

clear.addEventListener("click", () => {
  result.value = "";
});

equals.addEventListener("click", () => {
      try {
        result.value = eval(result.value);  
      } catch {
        result.value = "Error";
      }
    });