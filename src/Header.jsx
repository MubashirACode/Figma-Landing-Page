import logo1 from "../src/assets/images/icon.png"

export const Header = () => {



    return (

        <>
     <div className="nav">
    
            <span>   <img src={logo1} alt=""  />Nexcent</span>
        <nav>
            

            <li>Home</li>
            <li>Services</li>
            <li>Feature</li>
            <li>Products</li>
            <li>Testimonial</li>
            <li>FAQ</li>

            
        </nav>
        <div className="btn">
                <button>Login</button>
                
                <button className="backgreen">Sign Up</button>
            </div>
     </div>


        </>
    )
}