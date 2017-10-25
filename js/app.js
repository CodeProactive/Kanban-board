$(() => {

  $('.add-column').on('click', function(e) {

    const columnHeader = prompt("Podaj nazwę nowej kolumny");

    if (columnHeader == null || columnHeader.length <= 1) {

      window.alert("Nazwa kolumny musi zawierać przynajmniej dwa znaki");

    } else {

      $(".board-container").append('<div class="column"><button class="delete-column">x</button><h2 class="headerly">' + columnHeader +
        '</h2><button class="new-sticker">Dodaj kartkę</button><ul class="list-items"><li></li></ul></div>');
    }

  });


  $('.board-container').on("click", '.new-sticker', function(){
    const stickerContent = prompt("Podaj teść karteczki");
    $(this).next('.list-items').append('<li><p class="paragraphly"><button class="delete-paragraph">x</button>' + stickerContent + '</p></li>');

  });

  $('.board-container').on("click", '.delete-column', function(){
    $(this).parent('.column').remove();
  });

  $('.board-container').on("click", '.delete-paragraph', function(){
    $(this).parent('.paragraphly').remove();
  });

});