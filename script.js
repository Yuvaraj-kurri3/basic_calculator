let expression = '';

        // Function to append value to the expression
        function appendValue(value) {
            expression += value; // expression=expression+value
            document.getElementById("res").textContent = expression;
        }
        // Function to calculate the result
        function calculate() {
            try {
                const result = eval(expression);  // Evaluate the expression
                document.getElementById("res").textContent = result;
                expression = result.toString();   // Store the result for further operations
            } catch (error) {
                document.getElementById("res").textContent = 'Error';
            }
        }

        // Function to clear the result
        function clearResult() {
            expression = '';
            document.getElementById("res").textContent = '';
            // document.getElementById("enter-info").textContent = '';
        }

        // Function to delete the last character
        function backspace() {
            expression = expression.slice(0, -1);
            // document.getElementById("res").textContent = expression;
            document.getElementById("res").textContent = expression;
        }
        function mode() {
          if (document.body.style.backgroundColor === 'black') {
            // in light mode
            document.body.style.backgroundColor = 'white';
            document.getElementById('main-cont').style.border = '2px solid black';
            document.getElementById('final-res').style.border = '2px solid black';
            // document.getElementById('enter-info').style.color = 'black';
            document.getElementById('res').style.color = 'black';
            document.getElementById('change_mode').textContent = 'dark';
            document.getElementById('change_mode').style.backgroundColor = 'black';
            document.getElementById('change_mode').style.color = 'white';

          } else {
            // in dark mode
            document.body.style.backgroundColor = 'black';
            document.getElementById('main-cont').style.border = '2px solid white';
            document.getElementById('final-res').style.border = '2px solid white';
            document.getElementById('res').style.color = 'white';
            document.getElementById('change_mode').textContent = 'light';
            document.getElementById('change_mode').style.backgroundColor = 'white';
            document.getElementById('change_mode').style.color = 'black';
         
          }
        }