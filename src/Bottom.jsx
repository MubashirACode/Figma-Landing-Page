import icon1 from "../src/assets/images/icon1.jpg"
import icon2 from "../src/assets/images/icon2.jpg"
import icon3 from "../src/assets/images/icon3.jpg"
import tablet from "../src/assets/images/tablet.png"
import company from "../src/assets/images/company.avif"
import softwarecompany1 from "../src/assets/images/company1.png"
import softwarecompany2 from "../src/assets/images/company2.png"
import softwarecompany3 from "../src/assets/images/company3.png"
import softwarecompany4 from "../src/assets/images/company4.png"
import softwarecompany5 from "../src/assets/images/company5.png"
import softwarecompany6 from "../src/assets/images/company6.png"
import mobile from "../src/assets/images/mobile.png"
import computer1 from "../src/assets/images/computer1.avif"
import computer2 from "../src/assets/images/computer2.avif"
import computer3 from "../src/assets/images/computer3.avif"

export const Bottom = () => {
    return (
        <>
            <div className="main">
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>

            </div>
            <div className="iconslanguage">

                <i className="ri-html5-fill"></i>
                <i className="ri-css3-fill"></i>
                <i className="ri-javascript-line"></i>
                <i className="ri-reactjs-line"></i>
                <i className="ri-npmjs-fill"></i>
                <i className="ri-facebook-circle-fill"></i>
                <i className="ri-instagram-line"></i>
            </div>

            <div className="community">
                <h1>Manage your entire community in a single system</h1>
                <p> Who is Nextcent suitable for?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={icon1} alt="" />
                    <h3>Membership Organisations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="card">
                    <img src={icon2} alt="" />

                    <h3>National Associations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className="card">
                    <img src={icon3} alt="" />
                    <h3>Clubs And Groups</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>


            <div className="flex2">
                <div className="imageflex">
                    <img src={tablet} alt="" />
                </div>
                <div className="flexcontent">
                    <h2>How to design your site footer like we did</h2>
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>

                    <button>Learn More</button>
                </div>
            </div>
            <div className="backgroundcolor">

                <div className="helpinglocal">

                    <div className="bussiness">
                        <h1>Helping a local <b> business reinvent itself</b></h1>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className="members">

                        <div className="booking">
                            <i className="ri-team-fill"> <b> 2,245,341 </b>      <p>Members</p></i>


                        </div>
                        <div className="booking">
                            <i className="ri-home-4-line"> <b> 46,328</b>       <p>Clubs</p></i>


                        </div>

                    </div>
                    <div className="members2">
                        <div className="booking1">
                            <i className="ri-ghost-line"><span> <b> 828,867 </b></span>     <p>Event Bookings</p> </i>
                        </div>

                        <div className="booking1">
                            <i className="ri-bank-card-line"> <span> <b>1,926,436 </b> </span>     <p>Payments</p> </i>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex3">
                <div className="imageflex1">
                    <img src={mobile} alt="" />
                </div>
                <div className="flexcontent1">
                    <h2>How to design your site footer like we did</h2>
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>

                    <button>Learn More</button>
                </div>
            </div>





            <div className="allcustomer">
                <div className="imgcustomer">
                    <img src={company} alt="" />
                </div>
                <div className="contentcustomer">
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h4>Tim Smith</h4>
                    <p className="p">British Dragon Boat Racing Association</p>

                    <div className="customericon">
                        <div className="softwarecompany">
                            <img src={softwarecompany1} alt="" />
                        </div>
                        <div className="softwarecompany">
                            <img src={softwarecompany2} alt="" />
                        </div>
                        <div className="softwarecompany">
                            <img src={softwarecompany3} alt="" />
                        </div>
                        <div className="softwarecompany">
                            <img src={softwarecompany4} alt="" />
                        </div>
                        <div className="softwarecompany">
                            <img src={softwarecompany5} alt="" />
                        </div>
                        <div className="softwarecompany">
                            <img src={softwarecompany6} alt="" />
                        </div>


                        <button>  Meet all customers <i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>




            <div className="footerending">
                <h1>Caring is the new marketing</h1>
                <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community read about how our community are increasing their membership income and lots ​</p>
            </div>


            <div className="footercards">
                <div className="footercard">
                    <img src={computer1} alt="" className="images"  />
                    <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <button className="btn1">Readmore <i className="ri-arrow-right-line"></i> </button>
                </div>
                <div className="footercard">
                <img src={computer2} alt=""  />
                    <p>What are your safeguarding responsibilities and how can you manage them?</p>
                    <button className="btn2">Readmore <i className="ri-arrow-right-line"></i> </button>
                </div>
                <div className="footercard">
                <img src={computer3} alt=""  />
                    <p>Revamping the Membership Model with Triathlon Australia</p>
                    <button className="btn3">Readmore <i className="ri-arrow-right-line"></i> </button>
                </div>
            </div>

            <div className="demo">
                <h1>Pellentesque suscipit fringilla libero eu.</h1>
                <button className="btn3">Readmore <i className="ri-arrow-right-line"></i> </button>
            </div>

        </>

    )
}