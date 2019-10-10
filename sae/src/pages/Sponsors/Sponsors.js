import React from 'react';

import diamondTexture from '../../assets/images/diamondTexture.jpg';
import platinumTexture from '../../assets/images/brushedAl.png';

import Emerson from './Diamond/emerson.png';
import Spartan from './Diamond/Spartan.png';
import StudentUnion from './Diamond/su.png';
import Altium from './Platinum/Altium Logo.png';
import MOHELA from './Platinum/Mohela.png';
import OptimumG from './Platinum/OptimumG.jpg';
import Siemens from './Platinum/Siemens Logo.svg';
import Solidworks from './Platinum/Solidworks-Logo-v1.png';
import Altair from './Gold/Altair.png';
import ANSYS from './Gold/ANSYS_Logo.png';
import Conturo from './Gold/conturo prototyping.png';
import ESRD from './Gold/ESRDHeading.png';
import Autodesk from './Gold/autodesk.png';
import Evonik from './Gold/evonik.png';
import MSC from './Gold/MSC.png';
import Ricardo from './Gold/Ricardo.jpg';
import WorldWideTech from './Gold/WWTFacebookBanner.jpg';
import Zimmerman from './Gold/zimmerman.png';
import Zoltek from './Gold/Zoltek Logo.png';
import BMRS from './Silver/BMRS.jpg.gif';
import Boeing from './Silver/Boeing-Logo.svg-1024x254.png';
import Calspan from './Silver/Calspan - Red and Black.jpg';
import CampbellEngineering from './Silver/ce.jpg';
import WashUSchoolofEngineering from './Silver/ENG School.png';
import KW from './Silver/KW_Suspension_xlarge.gif';
import LMI from './Silver/LMI.png';
import Ranken from './Silver/ranken.png';
import RapidHarness from './Silver/rapid harness.png';
import Texense from './Silver/texense-sensors.png';
import WomensSociety from './Silver/womenssociety.png';
import AeroTechLab from './Bronze/aero tech lab.jpg';
import AlroSteel from './Bronze/Alro Steel.png';
import APRacing from './Bronze/AP Racing.png';
import ArchwayAnodize from './Bronze/Archway Anodize.jpg';
import AuroraBearingCo from './Bronze/Aurora Bearing.jpg.gif';
import AutotechDriveline from './Bronze/AutoTech Driveline.PNG';
import Busch from './Bronze/Busch_Logo.svg';
import CarParts from './Bronze/carparts.png';
import CompositeEnvisions from './Bronze/Composite-Envisions-Logo.jpg';
import Denco from './Bronze/denco.png';
import FibreGlast from './Bronze/Fibre Glast.png';
import FoamProducts from './Bronze/foam-products-corporation-logo.png';
import Hoosier from './Bronze/hoosier.png';
import Micro from './Bronze/micro.jpg';
import PerformanceElectronics from './Bronze/PerformanceElectronicsLogo.png';
import PorscheStLouis from './Bronze/Porsche of St. Louis.png';
import Rockwest from './Bronze/Rockwest.png';
import Ross from './Bronze/Ross Machine Racing.jpg';
import SamCo from './Bronze/samco.png';
import SamFox from './Bronze/SamFox.png';
import SCCA from './Bronze/SCCA.png';
import SKF from './Bronze/SKF.png';
import TMSTitanium from './Bronze/tms-logo.png';
import VR3 from './Bronze/vr3-cartesian-tube-profiling.png';
import './Sponsors.css';

export default class Sponsors extends React.Component {
    render() {
        return (
            <div class="content">
                <Diamond>
                    <Sponsor link="https://www.emerson.com/en-us" image={Emerson} alt="Emerson" />
                    <Sponsor link="http://www.spartanlmp.com/" image={Spartan} alt="Spartan" />
                    <Sponsor link="https://su.wustl.edu/" image={StudentUnion} alt="Student Union" />
                </Diamond>
                <Platinum>
                    <Sponsor link="https://www.altium.com/" image={Altium} alt="Altium" />
                    <Sponsor link="https://www.mohela.com/" image={MOHELA} alt="MOHELA" />
                    <Sponsor link="http://www.optimumg.com/" image={OptimumG} alt="OptimumG" />
                    <Sponsor link="https://new.siemens.com/us/en.html" image={Siemens} alt="Siemens" />
                    <Sponsor link="https://www.solidworks.com/" image={Solidworks} alt="Solidworks" />
                </Platinum>
                <Gold>
                    <Sponsor link="https://solidthinking.com/" image={Altair} alt="Altair" />
                    <Sponsor link="https://www.ansys.com/" image={ANSYS} alt="ANSYS" />
                    <Sponsor link="https://www.conturoprototyping.com/" image={Conturo} alt="Conturo" />
                    <Sponsor link="https://www.esrd.com/" image={ESRD} alt="ESRD" />
                    <Sponsor link="https://www.autodesk.com/" image={Autodesk} alt="Autodesk" />
                    <Sponsor link="https://corporate.evonik.com/en/" image={Evonik} alt="Evonik" />
                    <Sponsor link="https://www.mscsoftware.com/" image={MSC} alt="MSC" />
                    <Sponsor link="https://ricardo.com/" image={Ricardo} alt="Ricardo" />
                    <Sponsor link="https://www.wwtraceway.com/" image={WorldWideTech} alt="World Wide Tech" />
                    <Sponsor link="https://www.zimmermanmcdonald.com/" image={Zimmerman} alt="Zimmerman" />
                    <Sponsor link="https://zoltek.com/" image={Zoltek} alt="Zoltek" />
                </Gold>
                <Silver>
                    <Sponsor link="https://www.bmrs.net/" image={BMRS} alt="BMRS" />
                    <Sponsor link="https://www.boeing.com/" image={Boeing} alt="Boeing" />
                    <Sponsor link="https://www.calspan.com/" image={Calspan} alt="Calspan" />
                    <Sponsor link="https://campbellengineering.biz/?fbclid=IwAR0w7EXjTnTLDre79A7dgzjNTL5g_ynaJ9pjR-PX3lACMwo7frMxJrKM1gg" image={CampbellEngineering} alt="Campbell Engineering" />
                    <Sponsor link="https://engineering.wustl.edu/mckelvey/Pages/default.aspx" image={WashUSchoolofEngineering} alt="WashU School of Engineering" />
                    <Sponsor link="https://www.kwsuspensions.com/" image={KW} alt="KW" />
                    <Sponsor link="https://www.lmiaerospace.com/" image={LMI} alt="LMI" />
                    <Sponsor link="https://ranken.edu/" image={Ranken} alt="Ranken" />
                    <Sponsor link="https://rapidharness.com/" image={RapidHarness} alt="Rapid Harness" />
                    <Sponsor link="https://www.texense.com/en/" image={Texense} alt="Texense" />
                    <Sponsor link="https://womenssociety.wustl.edu/" image={WomensSociety} alt="Women's Society" />
                </Silver>
                <Bronze>
                    <Sponsor link="http://www.atlinc.com/" image={AeroTechLab} alt="Aero Tech Lab" />
                    <Sponsor link="https://www.alro.com/" image={AlroSteel} alt="Alro Steel" />
                    <Sponsor link="https://www.apracing.com/" image={APRacing} alt="AP Racing" />
                    <Sponsor link="https://archwayanodize.com/" image={ArchwayAnodize} alt="Archway Anodize" />
                    <Sponsor link="http://www.aurorabearing.com/index.html" image={AuroraBearingCo} alt="Aurora Bearing Co." />
                    <Sponsor link="autotech.com" image={AutotechDriveline} alt="Autotech Driveline" />
                    <Sponsor link="https://www.buschvacuum.com/us/en" image={Busch} alt="Busch" />
                    <Sponsor link="https://www.carparts.com/" image={CarParts} alt="CarParts" />
                    <Sponsor link="https://compositeenvisions.com/" image={CompositeEnvisions} alt="Composite Envisions" />
                    <Sponsor link="https://www.facebook.com/Denco-Powder-Coating-Services-195732780459096/" image={Denco} alt="Denco" />
                    <Sponsor link="https://www.fibreglast.com/" image={FibreGlast} alt="Fibre Glast" />
                    <Sponsor link="http://www.fpcfoam.com/" image={FoamProducts} alt="Foam Products" />
                    <Sponsor link="https://www.hoosiertire.com/" image={Hoosier} alt="Hoosier" />
                    <Sponsor link="https://www.micro-measurements.com/" image={Micro} alt="Micro" />
                    <Sponsor link="http://pe-ltd.com/" image={PerformanceElectronics} alt="Performance Electronics" />
                    <Sponsor link="https://www.porschestlouis.com/" image={PorscheStLouis} alt="Porsche St. Louis" />
                    <Sponsor link="https://www.rockwestcomposites.com/" image={Rockwest} alt="Rockwest" />
                    <Sponsor link="http://www.rossmachineracing.com/" image={Ross} alt="Ross" />
                    <Sponsor link="https://www.samcosport.com/" image={SamCo} alt="SamCo" />
                    <Sponsor link="https://samfoxschool.wustl.edu/" image={SamFox} alt="Sam Fox" />
                    <Sponsor link="https://www.stlscca.org/" image={SCCA} alt="SCCA" />
                    <Sponsor link="https://www.skf.com/us/index.html" image={SKF} alt="SKF" />
                    <Sponsor link="https://tmstitanium.com/" image={TMSTitanium} alt="TMS Titanium" />
                    <Sponsor link="https://vr3.ca/" image={VR3} alt="VR3" />
                </Bronze>
            </div>
        )
    }
}

function Diamond(props) {
    return (
        <>
            <section class="header1 cid-rv157QjwUC mbr-parallax-background">
                <div class="mbr-overlay" style={{ opacity: 0.9, backgroundColor: "rgb(35, 35, 35)" }}>
                </div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-10 align-center">
                            <h1 style={{ backgroundImage: `url(${diamondTexture})`, backgroundClip: "text", color: "transparent" }}
                                class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">DIAMOND</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div id="tier1Grid" class="sponsor-grid">
                {props.children}
            </div>
        </>
    );
}
function Platinum(props) {
    return (
        <>
            <section class="header1 cid-rv157QjwUC mbr-parallax-background">
                <div class="mbr-overlay" style={{ opacity: 0.9, backgroundColor: "rgb(35, 35, 35)" }}>
                </div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-10 align-center">
                            <h1 style={{ backgroundImage: `url(${platinumTexture})`, backgroundClip: "text", color: "transparent" }}
                                class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">PLATINUM</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div id="tier2Grid" class="sponsor-grid">
                {props.children}
            </div>
        </>
    );
}
function Gold(props) {
    return (
        <>
            <section class="header1 cid-rv157QjwUC mbr-parallax-background">
                <div class="mbr-overlay" style={{ opacity: 0.9, backgroundColor: "rgb(35, 35, 35)" }}>
                </div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-10 align-center">
                            <h1 
                                class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">GOLD</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div id="tier3Grid" class="sponsor-grid">
                {props.children}
            </div>
        </>
    );
}
function Silver(props) {
    return (
        <>
            <section class="header1 cid-rv15vp5o9j mbr-parallax-background">
                <div class="mbr-overlay" style={{ opacity: 0.9, backgroundColor: "rgb(35, 35, 35)" }}>
                </div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-10 align-center">
                            <h1 
                                class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">SILVER</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div id="tier4Grid" class="sponsor-grid">
                {props.children}
            </div>
        </>
    );
}
function Bronze(props) {
    return (
        <>
            <section class="header1 cid-rv16aNzKQN mbr-parallax-background">
                <div class="mbr-overlay" style={{ opacity: 0.9, backgroundColor: "rgb(35, 35, 35)" }}>
                </div>
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-10 align-center">
                            <h1
                                class="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">BRONZE</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div id="tier5Grid" class="sponsor-grid">
                {props.children}
            </div>
        </>
    );
}

function Sponsor(props) {
    return (
        <div class="tier1Item">
            <a href={props.url}>
                <img src={props.image} alt={props.alt} />
            </a>
        </div>
    );
}