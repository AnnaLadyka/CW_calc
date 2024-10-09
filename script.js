let calc = function() {
    let oper = document.getElementById('calc_operation').value;
    console.log(oper);
    let result;

    let num1 = Number(document.getElementById('num1').value);
    console.log(num1);
    let num2 = Number(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
      result = "Введите корректные числа";
    } else {
      switch (oper) {
        case 'add':
          result = num1 + num2;
          break;
        case 'minus':
          result = num1 - num2;
          break;
        case 'divide':
          result = num1 / num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
      }

    }

  let calcAnswer = document.getElementById('calc__answer');

  calcAnswer.innerHTML = result;

};