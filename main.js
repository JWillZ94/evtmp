const terColor = "#FCBA12";

$(function() {

  $.get('./data.json', function(data) {
    for (let yacht of data) {
      $(".container").append(`
        <h3 class="dyn-el">${yacht.name}</h3>
        <p>${yacht.speed}</p>
        <p>${yacht.owner}</p>
      `);

      $(".dyn-el").hover(
        function() {
          $(this).css("color", "gray");
        },
        function() {
          $(this).css("color", `${terColor}`);
        }
      );
    }
  });


});
