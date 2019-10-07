$(document).ready(function() {
  $("#submit-button").click(function(event) {

    var number = parseInt($('#input').val())
    var output = []

    for (var i = 0; i < number + 1; i += 1) {
      var value = i.toString();

    if (value.indexOf('1') !== -1) {
      output.push('Beep!')
    }

    $('#result').text(result)
    event.preventDefault()
  });
});
