import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram ,faGithub} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-40">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">Connect with Us</h2>
          <p className="text-sm">Follow us on social media for updates and more.</p>
        </div>
        
        <div className="flex space-x-4 mb-6 lg:mb-0">
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div>
          <p className="text-sm mb-2">For any work inquiries, feel free to reach out:</p>
          <button className='px-8 py-4 text-black bg-[#FFF7D4] rounded-lg text-lg border border-black hover:bg-gray-200'>
          <a href="mailto:abhinavbhar2004@gmail.com" className="text-gray-800 hover:underline">
            abhinavbhar2004@gmail.com
          </a>
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
