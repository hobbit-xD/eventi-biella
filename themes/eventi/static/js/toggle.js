(function($) {

	$(document).ready(function(){
		$('#toggle').click(function(){
			$('#toggle').toggleClass('active')
			$('#overlay').toggleClass('open')
		})
	})


})(jQuery);
