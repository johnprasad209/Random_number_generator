var val;
      document.getElementById('add').onclick = function () {
        val = document.getElementById('useranswer').value;
        var answer = Math.floor(Math.random() * 10) + 1;
        if (val == answer) {
          alert('You won the game');
        } else {
          alert(
            'please try again' +
              ' ' +
              'The answer genareted by computer is ' +
              answer
          );
        }
      };

      console.warn("warning")