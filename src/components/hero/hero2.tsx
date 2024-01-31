import heroImg from '/hero3.png'

export default function Hero2() {

    return (

        <>

            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 id="hero-text-header" className="display-5 fw-bold lh-1 mb-3">Design Your Brand</h1>
                        <p id="hero-text" className="lead">Pick a design style, Choose your brand colors, Select your brand font, Write your messaging and Get your brand effective and consistent brand across platforms</p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

        </>

    )

}