$(document).ready(function () {

  //Sort List items between lists

     $(function() {
      event.preventDefault()
        $('ul, li').sortable({
            start: function(event, ui) {
            },
            connectWith: " .sortable"
        }).disableSelection();
    });

// Appending new columns 
  $('.add-column').on('click', function(e) {

    const columnHeader = prompt("Podaj nazwę nowej kolumny");

    if (columnHeader == null || columnHeader.length <= 1) {

      window.alert("Nazwa kolumny musi zawierać przynajmniej dwa znaki");

    } else {

      $(".board-container").append('<div class="column"></div>');
      $(".column:last-of-type").append('<button class="delete-column">x</button>')
      $(".column:last-of-type").append('<h2 class="headerly">' + columnHeader + '</h2>')
      $(".column:last-of-type").append('<button class="new-sticker">Dodaj kartkę</button>')
      $(".column:last-of-type").append('<ul class="list-items sortable"></ul>')
      $('.list-items').sortable();

    }

  });

// New Sticker functionality
  $('.board-container').on("click", '.new-sticker', function() {
    const stickerContent = prompt("Podaj teść karteczki");

    if (stickerContent == null || stickerContent.length <= 1) {

      window.alert("Nazwa karteczki musi zawierać przynajmniej dwa znaki");

    } else {

      $(this).next('.list-items').append('<li><p class="paragraphly"><button class="delete-paragraph">x</button>' + stickerContent + '</p></li>');
    
    }

  });

// Delete column functionality

  $('.board-container').on("click", '.delete-column', function() {

    $(this).parent('.column').remove();

  });

// Delete paragraph functionality

  $('.board-container').on("click", '.delete-paragraph', function() {

    $(this).parent('.paragraphly').remove();

  });

  // $( ".sortable" ).sortable("refresh");

});











