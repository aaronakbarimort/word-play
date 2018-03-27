$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var sentences = ["itemOne"];

    sentences.forEach(function(sentence) {
      var userInput = $("input#" + sentence).val();
      var splits = userInput.split(" ");

    splits.forEach(function(split) {
      if (split.length >= 3) {
        $(".output").append("<li>" + split + "</li>");
      };
    });
    });
  });
});
