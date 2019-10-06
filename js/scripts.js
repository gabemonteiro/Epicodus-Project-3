
// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

// The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
// The number 21 should be replaced with "Boop".
// The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

$(document).ready(function() {
  $("#submit-button").click(function(event) {

    var value = $('#input').val()
    var number = parseInt(value)

    $('#result').text(number)

    event.preventDefault()
  });
});
