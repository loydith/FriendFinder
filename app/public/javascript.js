
//==============survey javascript=========== 


$(".submit").on("click", function(event){
    event.preventDefault();
    
// grab the form elements
    var newQuestion = {
        Name: $("#name").val().trim(),
        Photo: $("#photo-link").val().trim(),
        Score: [
            $("q1").val(),
            $("q2").val(),
            $("q3").val(),
            $("q4").val(),
            $("q5").val(),
            $("q6").val(),
            $("q7").val(),
            $("q8").val(),
            $("q8").val(),
            $("q10").val(),
            
        ]
    };
    console.log(newQuestion);

    $.post("/api/friends")
})