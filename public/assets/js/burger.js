$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = 1;
      
    var newDevourState = {
      devoured: newDevour
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("IWORK WHEN CLICKED!");

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured:0
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
    });

  });
   
});

