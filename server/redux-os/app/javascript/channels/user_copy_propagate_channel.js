import consumer from "./consumer"

consumer.subscriptions.create("UserCopyPropagateChannel", {
  connected() {
    // alert('test1');
  },

  disconnected() {
    // alert('test2');
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // alert(JSON.stringify(data));

    data.copies.forEach(function(copy, i) {
      $('#myModal ol.copied_texts li:nth-child(' + (i+1) + ') input').val(copy);
    });

    data.pastes.forEach(function(copy, i) {
      $('#myModal ol.pastable_texts li:nth-child(' + (  i+1) + ') input').val(copy);
    });
  }
});
