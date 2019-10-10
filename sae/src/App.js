import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './assets/images/logoText-white.png';

import './App.css';
import './assets/web/assets/mobirise-icons/mobirise-icons.css';
import './assets/tether/tether.min.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/bootstrap/css/bootstrap-grid.min.css';
import './assets/bootstrap/css/bootstrap-reboot.min.css';
import './assets/socicon/css/styles.css'
import './assets/theme/css/style.css';
import './assets/mobirise/css/mbr-additional.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/custom/css/navbar.css';
import './assets/custom/js/navbar';
import './assets/theme/js/script';
import Home from './pages/About';
import Gallery from './pages/Gallery';
import History from './pages/History/History';
import Members from './pages/Members/Members';
import Sponsors from './pages/Sponsors/Sponsors';


class NavItem extends React.Component {
	render() {
		return (<Link to={this.props.url}>{this.props.title}</Link>);
	}
}

class Nav extends React.Component {
	render() {
		return (
			<div id="nav">
				<a className="img-fluid" href="index.html">
					<img id="logoText" src={logo} alt="Wash U Racing Logo Text" />
				</a>
				<div className="links">
					{this.props.children}
				</div>
				<div className="dropdown-links">
					<div id="hidden-links">{this.props.children}
					</div>
					<i id="hamburger" className="fas fa-bars"></i>
				</div>
			</div>
		);

	}
}

function Footer() {
	return (
		<section className="cid-rv0QEzGR4g mbr-reveal" id="footer5-d">
			<div className="container">
				<div className="footer-lower">
					<div className="media-container-row">
						<div className="col-md-12">
							<hr />
						</div>
					</div>
					<div className="media-container-row mbr-white">
						<div className="col-md-6 copyright">
							<p className="mbr-text mbr-fonts-style display-7">© Copyright 2019 WashU Racing - All Rights Reserved</p>
						</div>
						<div className="col-md-6">
							<div className="social-list align-right align-baseline">
								<div className="soc-item">
									<a href="mailto:wuracing@gmail.com" target="">
										<span className="socicon-mail socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a href="https://www.facebook.com/WashURacing/" target="_blank">
										<span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a href="https://www.instagram.com/washuracing/?hl=en" target="_blank">
										<span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a href="https://www.youtube.com/channel/UCDRDocUskdc_wHeQetclQJQ" target="_blank">
										<span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
								<div className="soc-item">
									<a href="https://www.linkedin.com/company/wash-u-racing/" target="_blank">
										<span className="socicon-linkedin socicon mbr-iconfont mbr-iconfont-social"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


function App() {
	return (
		<Router>
			<Nav>
				<NavItem title="About" url="/" />
				<NavItem title="Gallery" url="/gallery" />
				<NavItem title="History" url="/history" />
				<NavItem title="Members" url="/members" />
				<NavItem title="Sponsors" url="/sponsors" />
				<NavItem title="Team Login" url="/admin" />
			</Nav>
			<Switch>
				<Route path="/sponsors">
					<Sponsors />
				</Route>
				<Route path="/members">
					<Members />
				</Route>
				<Route path="/history">
					<History />
				</Route>
				<Route path="/gallery">
					<Gallery />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
