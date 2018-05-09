$(function() {

  $.getJSON('api', getSignal);



  $('.signal-form').submit(function(e) {

    e.preventDefault();

    $.post('api', {

      name: $('#signal-form-sensornumber').val(),

      title: $('#signal-form-datetime').val(),

      id: $('#signal-form-id').val()

    }, getSignal);

  });



  $('.signal-id').on('click', function(e) {

      if (e.target.className == 'glyphicon glyphicon-remove') {

        $.ajax({

          url: 'api/' + e.target.id,

          type: 'GET',

          success: getSignal

        }); //ajax

      } // the target is a delete button

  }); //signal id



  function getSignal(data) {

   var output = '';

   $.each(data,function(key, item) {

     output += '     <div class="signal-item item-list media-list">';

     output += '       <div class="signal-item media">';

     output += '       <div class="media-left"><button class="signal-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';

     output += '         <div class="signal-info media-body">';

     output += '           <div class="signal-head">';

     output += '             <div class="signal-datetime">' + item.datetime + ' <small class="signal-sensornumber label label-info">' + item.sensornumber + '</small></div>';

     output += '           </div>';

     output += '           <div class="feedback-id">' + item.id + '</div>';

     output += '         </div>';

     output += '       </div>';

     output += '     </div>';

   });

   $('.signal-id').html(output);

  }

});