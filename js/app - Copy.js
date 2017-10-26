$(document).ready(function () {

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
      $(".column:last-of-type").append('<ul class="list-items droppable sortable"></ul>')
      // $('.droppable').droppable()
      $('.sortable').sortable()

    }

  });

// New Sticker functionality
  $('.board-container').on("click", '.new-sticker', function() {
    const stickerContent = prompt("Podaj teść karteczki");

    if (stickerContent == null || stickerContent.length <= 1) {

      window.alert("Nazwa karteczki musi zawierać przynajmniej dwa znaki");

    } else {

      $(this).next('.list-items').append('<li class="draggable"><p class="paragraphly"><button class="delete-paragraph">x</button>' + stickerContent + '</p></li>');
      $('.draggable').draggable()
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

//  Drag and drop divs

 // $(function(){
 //    $(".droppable").droppable(
 //        {
 //        drop: function(ev, ui) {
 //            var dropped = ui.draggable;
 //            var droppedOn = $(this);
 //            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
 //        }
 //    });

 //    });

     $(function() {
        var oldList, newList, item;
        $('.sortable').sortable({
            start: function(event, ui) {
                item = ui.item;
                newList = oldList = ui.item.parent().parent();
            },
            stop: function(event, ui) {          
            },
            change: function(event, ui) {  
                if(ui.sender) newList = ui.placeholder.parent().parent();
            },
            connectWith: ".sortable"
        }).disableSelection();
    });



//     $(function () {
//         $(".draggable").sortable({
//                 connectWith: ".draggable",
//                 start: function (event, ui) {
//                         ui.item.toggleClass("highlight");
//                 },
//                 stop: function (event, ui) {
//                         ui.item.toggleClass("highlight");
//                 }
//         });
//         $(".draggable").disableSelection();
// });


});











