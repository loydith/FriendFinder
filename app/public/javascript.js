
//==============survey javascript=========== 


$("#submit").on("click", function(event){
    event.preventDefault();
    // first have to validate and then grab the form
    function form(){
        var validateForm = true;
		if($("#name").val() === "" || $("#photo").val() === "") {
			validateForm = false;
        } else if($("#q1").val() === "empty" || 
                    $("#q2").val() === "empty" || 
                    $("#q3").val() === "empty" || 
                    $("#q4").val() === "empty" || 
                    $("#q5").val() === "empty" || 
                    $("#q6").val() === "empty" || 
                    $("#q7").val() === "empty" || 
                    $("#q8").val() === "empty" || 
                    $("#q9").val() === "empty" || 
                    $("#q10").val() === "empty") {
			validateForm = false;
        }
    }
		if(form()) {
			var newUser = {
				name: $("#name").val().trim(),
				photo: $("#photo").val().trim(),
				scores: [
                        $("#q1").val(),
                        $("#q2").val(),
                        $("#q3").val(),
                        $("#q4").val(),
                        $("#q5").val(),
                        $("#q6").val(),
                        $("#q7").val(),
                        $("#q8").val(),
                        $("#q8").val(),
                        $("#q10").val(),
            
                         ]
            };
         
    
            // post
            $.post("/api/friends", newUser, function (data) {
                // console.log(data);
                $("#matchName").text(data.name);
                $("#matchPhoto").attr("src", data.photo);
            });
        }else {
            alert("Please fill out all the fields before submitting!");
        }
        
});