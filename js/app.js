$(() => {

  var $defaultcolumn = $(".board-container").find(".column");

  $('.add-column').on('click', function(e) {
      const columnHeader = prompt("Podaj nazwę nowej kolumny");
      console.log(columnHeader);
      $( ".board-container" ).append('<div class="column"><button class="delete-column">x</button><h2 class="headerly">' + columnHeader + 
        '</h2><button class="new-sticker">Dodaj kartkę</button><ul class="list-items"><li><p class="paragraphly"><button class="delete-paragraph">x</button> <br></p></li></ul></div>');
  

    $('.new-sticker').click(function() {
      console.log($(this).next())
    });
   

  });


  
});
