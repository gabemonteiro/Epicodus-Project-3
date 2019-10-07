$(document).ready(function() {
  $("#submit-button").click(function(event) {

    var number = parseInt($('#input').val())
    var output = []

    for (var i = 0; i < number + 1; i += 1) {
      var value = i.toString();

      if (value.indexOf('3') !== -1) {
        output.push("I'm sorry, Dave. I'm afraid I can't do that.")
        continue
      }

      if (value.indexOf('2') !== -1) {
        output.push('Boop!')
        continue
      }

      if (value.indexOf('1') !== -1) {
        output.push('Beep!')
        continue
      }

    output.push(i)
    }

    var result = output.join(', ')

    $('#result').text(result)
    event.preventDefault()
  });
});
