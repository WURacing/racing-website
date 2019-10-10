import React from 'react';

import baker from './baker.jpg';
import beuk from './beuk.jpg';
import bryce from './bryce.jpg';
import carston from './carston.jpg';
import dutton from './dutton.jpg';
import ethan from './ethan.jpg';
import jacob from './jacob.jpg';
import menamjef from './jeff.jpg';
import jmcrae from './jmcrae.jpg';
import levy from './levy.jpg';
import lubie from './luberda.jpg';
import mai from './mai.jpg';
import michael from './michael.jpg';
import ned from './ned.jpg';
import sam from './sam.jpg';
import shannon from './shannon.jpg';
import si from './si.jpg';

import './Members.css';


function MemberL(props) {
    return (
        <section class="testimonials2 cid-rv0UG2PF60 mbr-parallax-background">
            <div class="mbr-overlay" style={{ opacity: 0.9, backgroundColor: "rgb(0, 0, 0)" }}>
            </div>
            <div class="container">
                <div class="media-container-row">
                    <div class="mbr-figure pr-lg-5" style={{ width: "100%" }}>
                        <img src={props.image} />
                    </div>
                    <div class="media-content px-3 align-self-center mbr-white py-2">
                        <p class="mbr-text testimonial-text mbr-fonts-style display-7">
                            {props.children}
                        </p>
                        <p class="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">
                            {props.name}
                        </p>
                        <p class="mbr-author-desc mbr-fonts-style display-7">
                            {props.title}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MemberR(props) {
    return (
        <section class="testimonials3 cid-rv0SilQee8">
            <div class="container">
                <div class="media-container-row">
                    <div class="media-content px-3 align-self-center mbr-white py-2" style={{textAlign: "right"}}>
                        <p class="mbr-text testimonial-text mbr-fonts-style display-7">
                            {props.children}
                        </p>
                        <p class="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">
                            {props.name}
                        </p>
                        <p class="mbr-author-desc mbr-fonts-style display-7">
                            {props.title}
                        </p>
                    </div>
                    <div class="mbr-figure pr-lg-5" style={{ width: "100%" }}>
                        <img src={props.image} />
                    </div>
                </div>
            </div>
        </section>
    );
}


export default class Members extends React.Component {
    render() {
        return (
            <>
                <MemberL name="Alex Levy" title="President" image={levy}>Race cars are pretty neat</MemberL>
                <MemberR name="Alex Dutton" title="Project Manager" image={dutton}>Who gets to drive?</MemberR>
                <MemberL name="Connor McRae" title="Technical Lead" image={jmcrae}>Race cars are pretty neat</MemberL>
                <MemberR name="Mai Urai" title="Treasurer" image={mai}>Who gets to drive?</MemberR>
                <MemberL name="Michael Williams" title="Recruitment Chair" image={michael}>Race cars are pretty neat</MemberL>
                <MemberR name="Shannon Coupland" title="Vice President" image={shannon}>Who gets to drive?</MemberR>
                
            </>
        );
    }
}
