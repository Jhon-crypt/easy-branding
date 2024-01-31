import heroImg from '/hero4.png'

export default function Hero3() {

    return (

        <>

            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={heroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 id="hero-text-header" className="display-5 fw-bold lh-1 mb-3">Focus On Content</h1>
                        <p id="hero-text" className="lead">Select a post type, Choose a design layout, Write and Create on-brand visual content in minutes. Easier than canva, always on brand. Easy-made personal branding. Design your personal brand create on-brand visual content in minutes not hours.</p>
                    </div>
                </div>
            </div>

        </>

    )

}