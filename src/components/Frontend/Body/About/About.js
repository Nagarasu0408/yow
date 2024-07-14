import './About.css';
import Profile from "../../../Images/Users/profile.png";
import Hotel from "../../../Images/hotelImage/pexels-reneterp-1581384.jpg";
import Location from "../../../Images/map.webp";

function About() {
    return (
        <>
            <div className='About'>
                <p className='title'>Yow Restaurant<span>(Boost your taste)</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, eros at aliquet ornare, justo arcu rhoncus libero, venenatis blandit massa augue quis ligula. Aliquam tellus tellus, semper et magna sed, tristique tristique tortor. Vestibulum bibendum, elit vel tempor venenatis, libero velit bibendum sem, in vestibulum lacus nisl vitae libero. Mauris sodales orci et aliquet semper. Nunc eros ex, mattis blandit est vehicula, pellentesque tempus nisi. </p>
                <div className='F'>
                    <img src={Hotel} alt="Hotel Image" className='hotelimage' />
                    <p>Nullam ac velit rhoncus, efficitur mauris bibendum, molestie felis. Phasellus sodales imperdiet sapien vel aliquet. Nam odio mi, mollis eu varius quis, cursus ac eros.</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, eros at aliquet ornare, justo arcu rhoncus libero, venenatis blandit massa augue quis ligula. Aliquam tellus tellus, semper</p>
                <div className='OwnerProfile'>
                    <img src={Profile} alt="Owner Image" />
                    <p>Owner Name</p>
                </div>
                <div className='C3'>
                    <div className='Contact'>
                        <p className='Heading'>Contact</p>
                        <p>Near Arasamaradhu vinayagar kovil</p>
                        <p> Otthakalmantabam - po</p>
                        <p> Coimbatore - 610034</p>
                        <p> +91 9876543210</p>
                        <p> +91 9876543210</p>
                    </div>
                    <div className='Location'>
                        <img src={Location} alt='Location' />
                        <button>click</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default About;