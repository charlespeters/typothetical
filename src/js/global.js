// $(document).ready(function() {
//     $('.type--controls_family select').change(function() {
//         $("#typothetical--article")
//             .addClass( $(this).attr('value') );
//             // .attr( 'class', $(this).attr('value') );
//     });
// });


$( ".type--controls_family select" )
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).attr('value');
    });
    $( "#typothetical--article" ).removeClass().addClass( str );
  })
  .change();


// $(document).ready(function() {
//     $('.controller input[type="radio"]').on("click", function() {
//         $("svg")
//             .removeClass()
//             .attr( 'class', $(this).attr('id') );
//     });
// });
