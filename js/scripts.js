$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var sentences = ["itemOne"];
    var output = [];

    sentences.forEach(function(sentence) {
      var userInput = $("input#" + sentence).val();
      var splits = userInput.split(" ");
      output.push(splits);
    });
    output.forEach(function(word){
      if (word.length >= 3){
        $(".output").append("<li>" + word + "</li>")

        // alert(word);
      };
    });

  });
});
