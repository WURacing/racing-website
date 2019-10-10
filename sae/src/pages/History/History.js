import React from 'react';

import img11 from './2011team-1492x994.jpg';
import img12 from './2012team-1492x995.jpg';
import img13 from './2013team-1492x994.jpg';
import img14 from './2014team-1-960x643.jpg';
import img15 from './2015team-1492x1119.jpg';
import img16 from './2016team-1492x994.jpg';
import img17 from './2017team-1492x994.jpg';
import img18 from './2018team-952x631.jpg';
import img19 from './2019team-1492x927.jpg';

import './History.css';

export default class History extends React.Component {
	render() {
		return (
			<>
			<MobirisePhotoBlock year="2019" place="47" image={img19}>
				Our goal with this car was to increase its drivability and predictability, ultimately resulting in a complete overhaul of the suspension system with carbon control arms and a complete anti-roll bar package. Other notable features included a custom oil pan cast in aluminum and fully adjustable pedals.
			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2018" place="61" image={img18}>
			This year’s car was built on a platform of reliability and data validation in order to mitigate previous design issues. A more aggressive timeline allowed us to stress-test the car and give our drivers hours of experience behind the wheel.			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2017" place="69" image={img17}>
			This year’s car and all the hard work that went into it is dedicated to Whitley Russo, a loyal alumnus of the team who tragically passed away in 2016. Notable features included a hand-carved wood steering wheel and extensive drivetrain differential analysis.			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2016" place="74" image={img16}>
			Unique design elements included wireless telemetry, an undertray, and a bigger hammer in honor of recently retired machine shop director Pat Harkins. 			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2015" place="39" image={img15}>
			In 2015, an emphasis was placed on optimizing the designs of previous years and acquiring useful data to better understand the dynamics of our vehicle. For the first time, we collected data from both wheel speed sensors and shock potentiometers to be analyzed in suspension tuning.
			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2014" place="83" image={img14}>
			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2013" place="43" image={img13}>
			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2012" place="84" image={img12}>
			</MobirisePhotoBlock>
			<Background />
			<MobirisePhotoBlock year="2011" place="91" image={img11}>
			</MobirisePhotoBlock>
			<Background />
			</>
		)
	}
}

class MobirisePhotoBlock extends React.Component {
	render() {
		return (
			<section style={{marginTop: "60px"}} className={parseInt(this.props.year) % 2 == 0 ? "features11 cid-rAzPR6FjC7" : "features11 cid-rAzPRuM3lH"}>
				<div className="container">
					<div className="col-md-12">
						<div className="media-container-row">
							<div className="mbr-figure m-auto" style={{width: "75%"}}>
								<img src={this.props.image} alt="Mobirise" title="" />
							</div>
							<div className=" align-left aside-content">
								<h2 className="mbr-title pt-2 mbr-fonts-style display-2"><strong>{this.props.year}</strong></h2>
								<div className="mbr-section-text">
									<p className="mbr-text mb-5 pt-3 mbr-light mbr-fonts-style display-7"><strong>
										Placed {this.props.place}</strong><br /><br />
										{this.props.children}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		);
	}
}

function Background() {
	return (
		<section className="header1 cid-rAPl0A1x96 mbr-parallax-background" id="header16-18">
			<div className="mbr-overlay" style={{opacity: "0.9", backgroundColor: "rgb(35, 35, 35)"}}>
			</div>
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-md-10 align-center">
					</div>
				</div>
			</div>
		</section>
	);
}