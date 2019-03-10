$(document).ready(function() {
	animateDiv('.one');
	animateDiv('.two');
	animateDiv('.three');

	//show Offers


	//slide


 
});

function newPosition() {
		var h = $(window).height() -50;
		var w = $(window).width() -50;

		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);

		return [nh, nw];
	}

	function animateDiv(div) {
		var newq = newPosition();
		$(div).animate({ top: newq[0], left: newq[1]}, 20000, function() {
			animateDiv(div);
		});
	};

	var slideList = $('.active-ul');

	function changeSlide() {
		slideList.animate({marginLeft: -100}, 1000, moveFirstSlide);
	}

	function moveFirstSlide() {
		var first = slideList.find('li:first');
		var last = slideList.find('li:last');
		last.after(first);
		slideList.css({marginLeft: 0});
	}

	var next = $('#right');
	var prev = $('#left')

	next.on('click', function() {
		changeSlide();
	});

	function reverse() {
		previousSlide();
		slideList.animate({marginLeft: 0}, 1000);
	}

	function previousSlide() {
		var first = slideList.find('li:first');
		var last = slideList.find('li:last');
		first.before(last);
		slideList.css({marginLeft: -100});
	}

	prev.on('click', function() {
		reverse();
	});

function showOffers(event, sectionName) {
		var i, content, link;

		content = $('.link-content');

		for ( i = 0; i < content.length; i++) {
			content[i].style.display = 'none';
		}

		link = $('.link');

		for ( i = 0; i < link.length; i++) {
			link[i].className = link[i].className.replace(' active', '');
			content[i].className = content[i].className.replace('active-ul', '');
		}

		var active = document.getElementById(sectionName);
		active.style.display = 'block';
		active.className += ' active-ul';
		event.currentTarget.className += ' active';
	}