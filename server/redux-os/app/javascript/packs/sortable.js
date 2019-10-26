// import Sortable from 'sortablejs';

// document.addEventListener("turbolinks:load", function(){
    // Sortable.create($('.sortable')[0]);

// 
    // $('.sortab)
// });k

import Sortable from 'sortablejs';


window.showCopyAndPasteModal = function() {
    $("#myModal").css("display", "block");
    $("#myModal").css("opacity", 1);
    
    $("#myModal").draggable({
      handle: ".modal-header"
    });
    
    Sortable.create($(".sortable")[0]);
    Sortable.create($(".sortable")[1]);

}



window.showDisplayModal = function() {
    $("#myModal1").css("display", "block");
    $("#myModal1").css("opacity", 1);
    
    $("#myModal1").draggable({
      handle: ".modal-header"
    });
    
    Sortable.create($(".sortable")[0]);
    Sortable.create($(".sortable")[1]);

}
