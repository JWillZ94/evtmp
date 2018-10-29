const terColor = "#FCBA12";

$(function() {
  $('#title-1')
    .css('font-size', '100px')
    .click(function() {
      $(this).hide(function() {
        $(this).slideDown();
      });
    });

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
