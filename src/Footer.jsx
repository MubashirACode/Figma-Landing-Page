import icon from "../src/assets/images/icon.png"
export const Footer=()=>{

    return(
        <>
      <div className="footer"> 
<div className="footerlogo">
    <img src={icon} alt=""  /> <span>Nexcent</span>
    <p></p>

    
    <i className="ri-instagram-line" style={{color:"orange"}}></i>
    <i className="ri-facebook-fill" style={{color:"blue"}}></i>
    <i className="ri-twitter-fill" style={{color:"lightblue"}}></i>
    <i className="ri-youtube-line" style={{color:"red"}}></i>

 


</div>

    <div className="footersupport">
        <h2>Company</h2>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Pricing</li>
        <li>Testimonials</li>
    </div>
    <div className="footersupport">
        <h2>Support</h2>
        <li>Help Center</li>
        <li>Terms of Services</li>
        <li>Legal</li>
        <li>Privacy Policy</li>
        <li>Status</li>
    </div>
    <div className="footersupport">
        <h2>Stay Up to date</h2>
        <input type="text" placeholder="Your Email addess" />
    </div>
</div>

     
        </>
    )
}