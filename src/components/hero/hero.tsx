import heroImg from '/hero.png'
import { BrowserView, MobileView } from 'react-device-detect';

export default function Hero() {

    return (

        <>

            <div className="container col-xxl-8 px-4" data-scroll-section>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <BrowserView>
                            <img src={heroImg} className="d-block mx-lg-auto" alt="Bootstrap Themes" width="600px" loading="lazy" />
                        </BrowserView>
                        <MobileView>
                            <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </MobileView>
                    </div>
                    <div className="col-lg-6">
                        <h1 data-scroll data-scroll-delay="1" data-scroll-speed="3" id="hero-text-header" className="display-5 fw-bold lh-1 mb-3">Forget About Design, Focus On Content</h1>
                        <p id="hero-text" className="lead">Design your personal brand with ease and create on-brand visual content in minutes. Easier than canva, always on brand. Easy-made personal branding. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button id="nav-btn" type="button" className="btn btn-lg px-4 me-md-2">
                                <b>
                                    Upgrade your branding now
                                </b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}