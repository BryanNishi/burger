// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  //function/ajax for eating the burger
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var eatenState = {
      eaten: eaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        console.log("changed eaten to", eaten);
        location.reload();
      }
    );
  });

//function/ajax for creating a new burger
  $(".newBurger").on("submit", function(event) {
      event.preventDefault();

    var newBurger = {
      name: $("#burgerName").val().trim(),
      eaten: false
    };

      $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  //function/ajax for deleting a burger
  $(".delete").on("click", function(event) {
    var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
