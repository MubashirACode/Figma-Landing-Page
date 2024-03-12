import heroimg from "../src/assets/images/landing.png"

export const Hero = () => {
    return (
        <>
            <div className="mainhero">
                <div className="childhero1">
                    <h1>Lessons and insights <span> from 8 years</span></h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>

                    <button>Register</button>


                </div>

                <div className="childhero2">

                    <img src={heroimg} alt=""/>
                </div>
            </div>
        </>
    )
}