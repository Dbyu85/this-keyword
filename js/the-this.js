$(document).ready(function(){
    $(".stream1-card").on("click", function(){
      var className = $(this).attr("class").split(" ");
      var stream = className[0];
      var className = className[1];
      if ($(this).css("background-color") == "rgb (250, 0, 0)"){
          $("." + className).css("background-color", "#000");
      }else{
          $("." + stream).css("background-color", "#000");
          $("." + className).css("background-color", "red");
      }
    });
});