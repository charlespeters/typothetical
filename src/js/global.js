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

$('#blockquotes--form input[type="radio"]').on("click", function() {
    $("blockquote")
        .removeClass()
        .attr( 'class', $(this).attr('id') );
});

$('#colors--form input[type="radio"]').on("click", function() {
		$('.entry h1, .entry h3')
				.removeClass()
				.attr( 'class', $(this).attr('id') );
});

$('#caps--form input[type="radio"]').on("click", function() {
		$('.entry h1, .entry h3')
				.toggleClass('caps');
				// .attr( 'class', $(this).attr('id') );
});
