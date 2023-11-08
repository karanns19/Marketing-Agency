import '../new.css';
import Image from '../Assets/Image.png'
import Image3 from '../Assets/Image3.png'
import Image4 from '../Assets/Image4.png'
import microsoft from '../Assets/microsoft.png'
import shopify from '../Assets/shopify.png'
import spotify from '../Assets/spotify.png'
import paypal from '../Assets/paypal.png'
import google from '../Assets/google.png'
import evernote from '../Assets/evernote.png'
import adobe from '../Assets/adobe.png'
import amazon from '../Assets/amazon.png'
import asana from '../Assets/asana.png'
import uber from '../Assets/uber.png'
import cola from '../Assets/cola.png'
import laptop from '../Assets/laptop.png'
import shoes from '../Assets/shoes.png'

function Main() {
    const companyLogos = [spotify, google, uber, microsoft, shopify, evernote, adobe, paypal, amazon, asana]
    const workImgs = [laptop, cola, shoes]
    const workTags = ["Apple", "Coca-Cola", "Nike"]

    return (
        <div className='mainComponent'>
            <div className="main">
                <div className='leftMain'>
                    <div className='leftMainContent'>
                        <h1>We Take Care of Your Brand</h1>
                        <p>We care about our work and we care about our clients.</p>
                        <input type="text" placeholder='Enter Your Email' />
                        <button className='blueButton'>Lets Talk</button>
                    </div>
                </div>
                <div className='rightMain'>
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className="main2">
                <h1>Companies we Work with</h1>
                <div className='gridCont'>
                    {companyLogos.map((item, index) => (
                        <img className='gridItem' src={item} alt="" />
                    ))}
                </div>
            </div>
            <div className="main3">
                <h1>Our Work</h1>
                <p>A glimpse of our portfolio</p>
                <div className='gridCont2'>
                    {workImgs.map((item, index) => (
                        <div>
                            <img className='gridItem2' src={item} alt="" />
                            <p>{workTags[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="main4">
                <div className='rightMain2'>
                    <img src={Image3} alt="" />
                </div>
                <div className='leftMain2'>
                    <div className='leftMainContent'>
                        <h1>Meet Our Team</h1>
                        <p>Discover the brilliance behind  Embrace. Our team blends innovation and artistry to craft digital wonders that captivate</p>
                        <button className='blueButton'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="main5">
                <div className='banner'>
                    <div className='leftBanner'>
                        <div className='leftBannerCont'>
                            <h1>Start Your Journey With Us Now</h1>
                            <button className='blueButton'>Start Now</button>
                        </div>
                    </div>
                    <div className='rightBanner'>
                        <img src={Image4} width={300} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
