import React from 'react';

import * as $ from 'jquery';

import jQueryBridget from 'jquery-bridget';

import car2 from '../assets/images/car2-2000x1334.jpg';
import car3 from '../assets/images/car3-2000x1334.jpg';
import car4 from '../assets/images/car4-2000x1334.jpg';
import bothcarsbrookings from '../assets/images/both-cars-brookings.jpg';
import bothcarscloseup from '../assets/images/both-cars-closeup.jpg';
import testing1 from '../assets/images/testing1-2000x1334.jpg';
import testing2 from '../assets/images/testing2-2000x1334.jpg';
import testing3 from '../assets/images/testing3-2000x1333.jpg';
import testing4 from '../assets/images/testing4-2000x1334.jpg';
import car from '../assets/images/carByItself.jpg';
import drivetrain from '../assets/images/drivetrain-2000x1848.jpg';
import ergo from '../assets/images/ergo-2000x1337.jpg';
import fullcar from '../assets/images/fullcardrawing-1102x731.jpg';

import '../assets/gallery/style.css';

import Masonry from 'masonry-layout';


export default class Gallery extends React.Component {
	render() {
		return <MobiriseGallery images={[
			car2, car3, car4, bothcarsbrookings, bothcarscloseup, testing1, testing2, testing3, testing4,
			car, drivetrain, ergo, fullcar
		]} />;
	}
}

class MobiriseGallery extends React.Component {
	render() {
		return (
			<div className="gallery-content">
				<section className="mbr-gallery mbr-slider-carousel cid-rv0Wl424Js" id="gallery2-m">
					<div>
						<div>
							<div className="mbr-gallery-row">
								<div className="mbr-gallery-layout-default">
									<div>
										<div>
											{this.props.images.map((imgSrc, index) => (
												<div key={index} className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Responsive">
													<div href="#lb-gallery2-m" data-slide-to={`${index}`} data-toggle="modal">
														<img src={imgSrc} alt="Race car" title="" />
														<span className="icon-focus"></span>
													</div>
												</div>
											))}
										</div>
										<div className="clearfix"></div>
									</div>
								</div>
								<div data-app-prevent-settings="" className="mbr-slider modal fade carousel slide" tabIndex="-1" data-keyboard="true" data-interval="false" id="lb-gallery2-m">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-body">
												<div className="carousel-inner">
													{this.props.images.map((imgSrc, index) => (
														<div key={index} className={"carousel-item" + index == 0 ? " active" : ""}>
															<img src={imgSrc} alt="Race car" title="" />
														</div>
													))}
												</div><a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery2-m"><span className="mbri-left mbr-iconfont" aria-hidden="true"></span><span
													className="sr-only">Previous</span></a><a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery2-m"><span className="mbri-right mbr-iconfont"
														aria-hidden="true"></span><span className="sr-only">Next</span></a><a className="close" href="#" role="button" data-dismiss="modal"><span className="sr-only">Close</span></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}

	componentDidMount() {
		jQueryBridget('masonry', Masonry, $);

		/* Masonry Grid */
		$(document).on('add.cards', function (event) {
			var $section = $(event.target),
				allItem = $section.find('.mbr-gallery-filter-all');
			var filterList = [];
			$section.on('click', '.mbr-gallery-filter li > .btn', function (e) {
				e.preventDefault();
				var $li = $(this).closest('li');

				$li.parent().find('li').removeClass('active');
				$li.addClass('active');

				var $mas = $li.closest('section').find('.mbr-gallery-row');
				var filter = $(this).html().trim();

				$section.find('.mbr-gallery-item').each(function (i, el) {
					var $elem = $(this);
					var tagsAttr = $elem.attr('data-tags');
					var tags = tagsAttr.split(',');

					var tagsTrimmed = tags.map(function (el) {
						return el.trim();
					});

					if ($.inArray(filter, tagsTrimmed) === -1 && !$li.hasClass('mbr-gallery-filter-all')) {
						$elem.addClass('mbr-gallery-item__hided');

						$elem.css('left', '300px');
					} else {
						$elem.removeClass('mbr-gallery-item__hided');
					}
				});

				$mas.closest('.mbr-gallery-row').trigger('filter');
			});
		})
		$(document).on('add.cards changeParameter.cards', function (event) {
			var $section = $(event.target),
				allItem = $section.find('.mbr-gallery-filter-all');
			var filterList = [];
			$section.find('.mbr-gallery-item').each(function (el) {
				var tagsAttr = ($(this).attr('data-tags') || "").trim();
				var tagsList = tagsAttr.split(',');

				tagsList.map(function (el) {
					var tag = el.trim();

					if ($.inArray(tag, filterList) === -1)
						filterList.push(tag);
				});
			});

			if ($section.find('.mbr-gallery-filter').length > 0 && $(event.target).find('.mbr-gallery-filter').hasClass('gallery-filter-active')) {
				var filterHtml = '';

				$section.find('.mbr-gallery-filter ul li:not(li:eq(0))').remove();

				filterList.map(function (el) {
					filterHtml += '<li><a className="btn btn-md btn-primary-outline" href>' + el + '</a></li>';
				});
				$section.find('.mbr-gallery-filter ul').append(allItem).append(filterHtml);

			} else {
				$section.find('.mbr-gallery-item__hided').removeClass('mbr-gallery-item__hided');
				$section.find('.mbr-gallery-row').trigger('filter');
			}

			updateMasonry(event);
		});

		$(document).on('change.cards', function (event) {
			updateMasonry(event);
		});

		$('.mbr-gallery-item').on('click', 'a', function (e) {
			e.stopPropagation();
		});
	}
}

function getVideoId(url) {
	if ('false' === url) return false;
	var result = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(url) || /^([-a-z0-9_]+)$/i.exec(url);

	return result ? result[1] : false;
}

function onPlayerReady(event) {
	if ($(event.target).closest('.mbr-slider').hasClass('in')) {
		event.target.playVideo();
	}
}


function updateMasonry(event) {
	var $section = $(event.target);
	if (typeof $.fn.masonry !== 'undefined') {
		$section.outerFind('.mbr-gallery').each(function () {
			var $msnr = $(this).find('.mbr-gallery-row').masonry({
				itemSelector: '.mbr-gallery-item:not(.mbr-gallery-item__hided)',
				percentPosition: true,
				horizontalOrder: true
			});
			// reload masonry (need for adding new or re-sort items)
			$msnr.masonry('reloadItems');
			$msnr.on('filter', function () {
				$msnr.masonry('reloadItems');
				$msnr.masonry('layout');
				// update parallax backgrounds
				$(window).trigger('update.parallax');
			}.bind(this, $msnr));
			// layout Masonry after each image loads
			$msnr.imagesLoaded().progress(function () {
				$msnr.masonry('layout');
			});
		});
	}
};

var timeout2, timeout, objectLightBox;

/* Lightbox Fit */
function styleVideo($carouselItem, wndH, windowPadding, bottomPadding) {
	$carouselItem.css({
		'top': windowPadding,
		'height': wndH - 2 * windowPadding - 2 * bottomPadding
	})
}

function styleImg($carouselItem, wndH, wndW, windowPadding, bottomPadding) {
	var $currentImg = $carouselItem.find('img');

	var setWidth, setTop;
	var lbW = $currentImg[0].naturalWidth;
	var lbH = $currentImg[0].naturalHeight;

	// height change
	if (wndW / wndH > lbW / lbH) {
		var needH = wndH - bottomPadding * 2;
		setWidth = needH * lbW / lbH;
	} else { // width change
		setWidth = wndW - bottomPadding * 2;
	}
	// check for maw width
	setWidth = setWidth >= lbW ? lbW : setWidth;

	// set top to vertical center
	setTop = (wndH - setWidth * lbH / lbW) / 2;

	$currentImg.css({
		width: parseInt(setWidth),
		height: setWidth * lbH / lbW
	});
	$carouselItem.css('top', setTop + windowPadding);
}

function timeOutCarousel($lightBox, wndW, wndH, windowPadding, bottomPadding, flagResize) {
	var $carouselItems = $lightBox.find('.modal-dialog .carousel-item');

	$carouselItems.each(function () {
		if ((!flagResize && !$(this)[0].classList.contains('carousel-item-next') && !$(this)[0].classList.contains('carousel-item-prev')) || (flagResize && !$(this)[0].classList.contains('active'))) {
			if ($(this)[0].classList.contains('video-container')) {
				styleVideo($(this), wndH, windowPadding, bottomPadding);
			}
			else {
				styleImg($(this), wndH, wndW, windowPadding, bottomPadding);
			}
		}
	});
}

function fitLightbox() {
	var windowPadding = 0;
	var bottomPadding = 10;
	var wndW = $(window).width() - windowPadding * 2;
	var wndH = $(window).height() - windowPadding * 2;

	if (!objectLightBox) {
		return;
	}

	var $carouselItemActive, flagResize = false;
	if (objectLightBox.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev').length) {
		$carouselItemActive = objectLightBox.find('.modal-dialog .carousel-item.carousel-item-next, .modal-dialog .carousel-item.carousel-item-prev');
	}
	else {
		$carouselItemActive = objectLightBox.find('.modal-dialog .carousel-item.active');
		flagResize = true;
	}

	if ($carouselItemActive[0].classList.contains('video-container')) {
		styleVideo($carouselItemActive, wndH, windowPadding, bottomPadding);
	}
	else {
		styleImg($carouselItemActive, wndH, wndW, windowPadding, bottomPadding);
	}

	clearTimeout(timeout);

	timeout = setTimeout(timeOutCarousel, 200, objectLightBox, wndW, wndH, windowPadding, bottomPadding, flagResize);

}

/* pause/start video on different events and fit lightbox */
var $window = $(document).find('.mbr-gallery');

$window.on('show.bs.modal', function (e) {
	clearTimeout(timeout2);

	objectLightBox = $(e.target);

	fitLightbox();

});

$window.on('slide.bs.carousel', function (e) {
});

$(window).on('resize load', fitLightbox);

$window.on('slid.bs.carousel', function (e) {
});

$window.on('hide.bs.modal', function (e) {
	objectLightBox = null;
});
