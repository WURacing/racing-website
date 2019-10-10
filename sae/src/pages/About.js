import React from 'react';
import * as $ from 'jquery';
import 'jquery-countdown';

export default class Home extends React.Component {
	render() {
		return (
			<div className="index-content">
				<section className="header1 cid-rv0us104Od mbr-fullscreen mbr-parallax-background" id="header16-0">
					<div className="mbr-overlay" style={{ opacity: 0.6, backgroundColor: 'rgb(125, 123, 97)' }}>
					</div>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-md-10 align-center">
								<h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
									ABOUT US</h1>
								<p className="mbr-text pb-3 mbr-fonts-style display-5">We are a student-run Formula SAE team that annually designs, manufactures, and assembles a formula-style race car.
                        <br /><br />
									<br />Each year, we travel to Michigan International Speedway to compete against over 100 other student teams from around the world. Judged by industry professionals and track-tested against other teams' efforts, our goal is
                        to develop the most exhilirating and innovative vehicle we possibly can.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="header1 cid-rv0xzWYK21" id="header1-4">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="mbr-white col-md-10">
								<h1 className="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">
									DESIGN</h1>

								<p className="mbr-text align-center pb-3 mbr-fonts-style display-5">From materials science testing on our carbon-fiber suspension linkages, to our sand-casted custom oil pan, to our beautifully crafted cockpit and driver controls systems, all our designs must live up to our most stringent standards.
                        <br />
									<br />We are judged by industry professionals on our application and understanding of engineering design principles at competition, so every part is scrutinized before it goes on the car.
                    </p>
							</div>
						</div>
					</div>
				</section>

				<section className="header1 cid-rv0yfNk1dc mbr-parallax-background" id="header1-5">
					<div className="mbr-overlay" style={{ opacity: 0.8, backgroundColor: 'rgb(23, 23, 23)' }}>
					</div>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="mbr-white col-md-10">
								<h1 className="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">
									BUILD</h1>

								<p className="mbr-text align-center pb-3 mbr-fonts-style display-5">Thanks to our incredible manufacturing team, we have been able to consistently increase the quality and consistency of the parts we make.
                        <br />
									<br />With the opening of Jubel Hall and its state-of-the-art machine shop, we can use 4-axis CNC machining, CNC lathing, waterjetting, casting and many other techniques to make our designs come to life.</p>

							</div>
						</div>
					</div>
				</section>

				<section className="header1 cid-rv0A5JPuDe" id="header1-6">
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="mbr-white col-md-10">
								<h1 className="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">
									TEST</h1>

								<p className="mbr-text align-center pb-3 mbr-fonts-style display-5">Ultimately, our designs don't matter unless they work as intended. We test and validate our designs using an astounding array of sensors, including brake temperature and pressure sensors, strain gauges, 3-axis gyroscopes, accelerometers,
									wheel-speed sensors and onboard GPS telemetry.
                        <br />
									<br />When things don't go as planned, we revamp our designs and keep steadfastly pushing to make sure our vehicle is the best it can be.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="cid-rv0BBfZEMc mbr-fullscreen mbr-parallax-background" id="header2-8">
					<div className="mbr-overlay" style={{ opacity: 0.7, backgroundColor: 'rgb(35, 35, 35)' }}></div>
					<div className="container align-center">
						<div className="row justify-content-md-center">
							<div className="mbr-white col-md-10">
								<h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">THANK YOU</h1>

								<p className="mbr-text pb-3 mbr-fonts-style display-5">None of the incredible work we do at WashU Racing would be possible without our sponsors. Thank you very much for your continuing support.
                        <br /></p>
								<div className="mbr-section-btn"><a className="btn btn-md btn-secondary display-4" href="sponsors.html">LEARN MORE</a></div>
							</div>
						</div>
					</div>
				</section>

				<section className="countdown1 cid-rv0C9Xizyk" id="countdown1-9">
					<div className="container ">
						<h2 className="mbr-section-title pb-3 align-center mbr-fonts-style display-2">
							COUNTDOWN TO COMPETITION</h2>
					</div>
					<div className="container countdown-cont align-center">
						<div className="daysCountdown" title="Days"></div>
						<div className="hoursCountdown" title="Hours"></div>
						<div className="minutesCountdown" title="Minutes"></div>
						<div className="secondsCountdown" title="Seconds"></div>
						<div className="countdown pt-5 mt-2" data-due-date="2020/05/07">
						</div>
					</div>
				</section>
			</div>
		);
	}

	componentDidMount() {
		var isBuilder = $('html').hasClass('is-builder');
		if (isBuilder) {
			$(document).on('add.cards', function (event) {
				if ($('.countdown').length != 0) {
					initCountdown();
				}
			}).on('changeParameter.cards', function (event, paramName, value) {
				if (paramName === 'countdown') {
					changeCountdown(event.target, value);
				}
			});;
		} else {
			if ($('.countdown').length != 0) {
				initCountdown();
			};
		}
	}
}


// Mobirise Initialization
function initCountdown() {
	$(".countdown:not(.countdown-inited)").each(function () {
		$(this).addClass('countdown-inited').countdown($(this).attr('data-due-date'), function (event) {

			var $days = $(event.target).closest('.countdown-cont').find('div.daysCountdown').attr('title');
			var $hours = $(event.target).closest('.countdown-cont').find('div.hoursCountdown').attr('title');
			var $minutes = $(event.target).closest('.countdown-cont').find('div.minutesCountdown').attr('title');
			var $seconds = $(event.target).closest('.countdown-cont').find('div.secondsCountdown').attr('title');
			$(this).html(
				event.strftime([
					'<div class="row">',
					'<div class="col-xs-3 col-sm-3 col-md-3">',
					'<span class="number-wrap">',
					'<span class="number display-2">%D</span>',
					'<span mbr-text class="period display-7">', $days, '</span>',
					'<span class="dot">:</span>',
					'</span>',
					'</div>',
					'<div class="col-xs-3 col-sm-3 col-md-3">',
					'<span class="number-wrap">',
					'<span class="number display-2">%H</span>',
					'<span mbr-text class="period display-7">', $hours, '</span>',
					'<span class="dot">:</span>',
					'</span>',
					'</div>',
					'<div class="col-xs-3 col-sm-3 col-md-3">',
					'<span class="number-wrap">',
					'<span class="number display-2">%M</span>',
					'<span mbr-text class="period display-7">', $minutes, '</span>',
					'<span class="dot">:</span>',
					'</span>',
					'</div>',
					'<div class="col-xs-3 col-sm-3 col-md-3">',
					'<span class="number-wrap">',
					'<span class="number display-2">%S</span>',
					'<span mbr-text class="period display-7">', $seconds, '</span>',
					'</span>',
					'</div>',
					'</div>'
				].join(''))
			);
		});
	});

	$(".countdown:not(.countdown-inited)").each(function () {
		$(this).countdown($(this).attr('data-due-date'), function (event) {
			$(this).text(
				event.strftime('%D days %H:%M:%S')
			);
		});
	});
};

function changeCountdown(card, value) {
	var $reg = /\d\d\d\d\/\d\d\/\d\d/g,
		$target = $(card).find('.countdown');
	if (value.search($reg) > -1) {
		$target.removeClass('countdown-inited');
		initCountdown();
	}
}

