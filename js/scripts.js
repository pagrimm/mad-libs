$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();
    const recipientInput = $("input#person1").val();
    const shoutInput = $("input#shoutMachine").val().toUpperCase();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".recipient").text(recipientInput);
    $(".shoutthis").text(shoutInput);

    $("#story").show();
    $("#letter").show();
    $("#shoutthis").show();

    event.preventDefault();
  });
});