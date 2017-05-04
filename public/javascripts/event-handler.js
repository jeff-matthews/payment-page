function processErrorMessages(messages) {
 var msgList = $('#messages ul');
 $(msgList).empty();
 $.each(messages, function(index, item) {
   $(msgList).append("<li>" + item.message + "</li>");
 });

 $('#messages').show();
 $('#pay').prop("disabled", false);
}

ChargeIO.ready(function() {
 $('#pay').prop("disabled", false);
 $('#pay').click(function(event) {
   event.preventDefault();
   $('#pay').prop("disabled", true);
   var amount = parseInt($('#total').text().replace(/\D/g,''));
   var paymentJson = ChargeIO.payment_params($('form'));
   ChargeIO.create_token(paymentJson, function(token) {
     $.post('/payment', { 'amount': $('#amount').val(), 'token_id': token.id }).done(function(data) {
       if (data.messages) {
         processErrorMessages(data.messages);
       }
       else {
         window.location = '/receipt';
       }
     }).fail(function(xhr) {
       processErrorMessages([ { "message": "An unexpected error occurred" } ]);
     });
   });
 });
});
