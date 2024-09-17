
import { Instagram, Github, Linkedin } from 'lucide-react'
import logo from '../assets/logo.png';


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 mt-3 mb-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
                <img src={logo} className='h-16 lg:h-20' alt="" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block flex-grow">
            <div className="flex items-center justify-center space-x-4">
              <a href="/#home" className="text-black hover:scale-110 font-montserrat hover:text-[#035b98] px-3 py-2 rounded-md text-md font-medium transition-all duration-300">
                INICIO
              </a>
              <a href="/#events" className="text-black hover:scale-110 font-montserrat hover:text-[#035b98] px-3 py-2 rounded-md text-md font-medium transition-all duration-300">
                EVENTOS
              </a>
              <a href="/#soon" className="text-black hover:scale-110 font-montserrat hover:text-[#035b98] px-3 py-2 rounded-md text-md font-medium transition-all duration-300">
                PROXIMAMENTE
              </a>
              <a href="/#join" className="text-black hover:scale-110 font-montserrat hover:text-[#035b98] px-3 py-2 rounded-md text-md font-medium transition-all duration-300">
                UNETE
              </a>
              <a href="/#faq" className="text-black hover:scale-110 font-montserrat hover:text-[#035b98] px-3 py-2 rounded-md text-md font-medium transition-all duration-300">
                FAQ
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-3 ">
            <a href="https://www.instagram.com/ieee.estl/" target='_blank' className="text-black hover:-translate-y-1 px-2 py-1 transition-all duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/ieee-estl" target='_blank' className="text-black hover:-translate-y-1 px-2 py-1 transition-all duration-300">
                <Linkedin size={20} />
                <span className="sr-only">Linked in</span>
            </a>
            <a href="https://github.com/IEEE-ESTl/IEEE-ESTl-Student-Web-Hub" target='_blank' className="text-black hover:-translate-y-1 px-2 py-1 transition-all duration-300">
                <Github size={20} />
                <span className="sr-only">Github</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}