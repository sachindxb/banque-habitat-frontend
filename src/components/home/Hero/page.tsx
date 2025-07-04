import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
      <AwesomeSlider>
        <div><Link to="/purchase" style={{ textDecoration: 'none', color: 'inherit', fontSize: '2rem', fontWeight: 'bold', display: 'block', height: '100%', width: '100%', textAlign: 'center', lineHeight: '300px' }}>PURCHASE</Link></div>
        <div><Link to="/renovation-usd" style={{ textDecoration: 'none', color: 'inherit', fontSize: '2rem', fontWeight: 'bold', display: 'block', height: '100%', width: '100%', textAlign: 'center', lineHeight: '300px' }}>RENOVATION USD</Link></div>
        <div><Link to="/construction" style={{ textDecoration: 'none', color: 'inherit', fontSize: '2rem', fontWeight: 'bold', display: 'block', height: '100%', width: '100%', textAlign: 'center', lineHeight: '300px' }}>Construction</Link></div>
        <div><Link to="/renovation-lbp" style={{ textDecoration: 'none', color: 'inherit', fontSize: '2rem', fontWeight: 'bold', display: 'block', height: '100%', width: '100%', textAlign: 'center', lineHeight: '300px' }}>RENOVATION LBP</Link></div>
      </AwesomeSlider>
      <div className="mouse-indicator">
        <div className="wheel"></div>
      </div>
    </>
  );
}
