import { Link } from 'react-router-dom';
import '../css/footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <ul className='footer-link-container'>
            <li>
                <Link to='/' className='footer-link'>Home</Link>
            </li>
            <li>Careers</li>
            <li><a href='https://github.com/scb4377/snowboard-app/tree/master' className='developer-link' target='_blank'>Developers</a></li>
            <li>
                <Link to='/about' className='footer-link'>About</Link>
            </li>
        </ul>    
    </div>
  )
}
