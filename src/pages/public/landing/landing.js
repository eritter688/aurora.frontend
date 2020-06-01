import React from 'react';
import "./landing.css";
import plesson from './piano-lesson.jpg'
import slesson from './skating-coach.jpg'


export default function LandingPage() {

    return (
        <div className={"landing-page"}>

            <section className={"mt-1 value-add-section"}>
                <h4 className={"mx-2"}>
                    Work smart, not hard.
                </h4>
                <p className={"mx-2 font-weight-light"}>
                    Aurora handles the paperwork so <span className={"font-weight-bold"}>you don't have to.</span> Spend your time doing what you love, instead of the paperwork.
                </p>
            </section>



            <section style={{backgroundColor: "green"}}>
                <img className={"photo-size"} src={plesson} alt={"piano lesson"}/>
                <span>Check us out!</span>
            </section>
            <section style={{backgroundColor: "brown"}}>
                <img className={"photo-size"} src={slesson} alt={"skating lesson"}/>
                <span>We're awesome!</span>
            </section>
            {/*<section style={{backgroundColor: "green"}}>*/}
            {/*    <img className={"photo-size"} src={plesson} alt={"piano lesson"}/>*/}
            {/*    <span>Check us out!</span>*/}
            {/*</section>*/}
            {/*<section style={{backgroundColor: "brown"}}>*/}
            {/*    <img className={"photo-size"} src={slesson} alt={"skating lesson"}/>*/}
            {/*    <span>We're awesome!</span>*/}
            {/*</section>*/}
            {/*<section style={{backgroundColor: "green"}}>*/}
            {/*    <img className={"photo-size"} src={plesson} alt={"piano lesson"}/>*/}
            {/*    <span>Check us out!</span>*/}
            {/*</section>*/}
            {/*<section style={{backgroundColor: "brown"}}>*/}
            {/*    <img className={"photo-size"} src={slesson} alt={"skating lesson"}/>*/}
            {/*    <span>We're awesome!</span>*/}
            {/*</section>*/}
            {/*<section style={{backgroundColor: "green"}}>*/}
            {/*    <img className={"photo-size"} src={plesson} alt={"piano lesson"}/>*/}
            {/*    <span>Check us out!</span>*/}
            {/*</section>*/}
            {/*<section style={{backgroundColor: "brown"}}>*/}
            {/*    <img className={"photo-size"} src={slesson} alt={"skating lesson"}/>*/}
            {/*    <span>We're awesome!</span>*/}
            {/*</section>*/}
        </div>
    );

}