import '../new.css';
import logo from '../Assets/logo.png'

function Header() {
  return (
    <div className="header">
        <div className='headFirst'>
            <img src={logo} alt="" />
            <h4>Amplify</h4>
        </div>
        <div className='headMid'>
            <span>How it Works</span>
            <span>Our Work</span>
            <span>Pricing</span>
            <span>About Us</span>
        </div>
        <div className='headLast'>
            <button className='blueButton'>Book a Call</button>
        </div>
    </div>
  );
}

export default Header;
