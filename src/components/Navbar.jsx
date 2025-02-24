import logo from '../assets/Ar-logo.png'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex items-center flex-shrink-0">
        <img className='mx-2 w-20 bg-gray-600 rounded-full'  src={logo} alt="LOGO" />
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <a href="https:www.linkedin.com" className='cursor-pointer hover:text-cyan-600'><FaLinkedin  /></a>
        <a href="https:www.Github.com" className='cursor-pointer hover:text-gray-600'><FaGithub /></a>
       <a href="https:www.Twitter.com" className='cursor-pointer hover:text-gray-600'><FaTwitter /></a> 
        <a  href="https:www.instagram.com" className='cursor-pointer hover:text-pink-500'><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;