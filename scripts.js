/* first hide the text parts -- 
lobster part and explainer */
$('.lobster-part').hide()
$('.explainer').hide()

/*reveal text when button is clicked*/
$('.button').on('click', function() {
	var order = $(this).data('order')
  
  /* for first -- just write 'first'*/
  if (order === 'first') {
  $('.lobster-part:first').show()
  $('.explainer:first').show()
  }
  
  /* for second -- use  eq() format
  eq(1), since count starts at 0*/
  if (order === 'second') {
  $('.lobster-part:eq(1)').show()
  $('.explainer:eq(1)').show()
  }
  
  /* third */
  if (order === 'third') {
  $('.lobster-part:eq(2)').show()
  $('.explainer:eq(2)').show()
  }
  
  /* for fourth -- can't just write "last"
  use eq() format */
  if (order === 'fourth') {
  $('.lobster-part:eq(3)').show()
  $('.explainer:eq(3)').show()
  }
  
})
    
     