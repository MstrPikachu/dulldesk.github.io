$(document).ready(() => {
	$.when((() => {

		$("body").prepend($("<nav id='navbar'></nav>") )
	})()).done(() => {
		$.get("https://dulldesk.github.io/components/nav.html",data => {
			$.when((() => {
				$('#navbar').html(data);
			})()).done(() => {
				$('.menuham').click(() => {
					// $('.menubar').is(':visible') ? $('.menubar').slideUp() : $('.menubar').slideDown();
					slideToggle('.menubar');
				});

				$(window).resize(() => {
					if ($(window).width() > 550) {
						$('.menubar').show();
						$('.menubar').css('display','flex');
					} else $('.menubar').hide();
				});
			});
		});

	});

	$.when((() => {
		$("body").append($("<footer id='footer'></footer>") )
	})()).done(() => {
		$.get("https://dulldesk.github.io/components/footer.html",data => {
			$('#footer').html(data);
		});
	})
});

function slideToggle(id) {
	$(id).is(':visible') ? $(id).slideUp() : $(id).slideDown();
}
