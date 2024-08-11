const values = document.querySelectorAll(".value");
const DELAY = 50;
const STEPS = 20;

window.onload = () => {
  class counter {
    constructor(element, value) {
      this.element = element;
      this.value = value;
      this.initial = 0;
      this.increment = Math.floor(value / STEPS) || 1;
    }

    changeValue() {
      const intervalID = setInterval(() => {
        if (this.initial <= this.value) {
          this.initial += this.increment;
          this.element.textContent = this.initial;
        } else {
          this.element.textContent = this.value;
          clearInterval(intervalID);
        }
      }, DELAY);
    }
  }

  const [value1, value2, value3] = [...values];
  const [number1, number2, number3] = [
    +value1.textContent,
    +value2.textContent,
    +value3.textContent,
  ];

  const counter1 = new counter(value1, number1);
  const counter2 = new counter(value2, number2);
  const counter3 = new counter(value3, number3);

  counter1.changeValue();
  counter2.changeValue();
  counter3.changeValue();
};
