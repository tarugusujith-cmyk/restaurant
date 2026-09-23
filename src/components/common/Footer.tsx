import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#351f08] text-white">
      <div className="mx-auto max-w-[1112px] px-5 py-12 sm:px-8 sm:py-16 lg:px-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div>
            <Link to="/home" className="flex w-fit items-center gap-3" aria-label="Delizioso home">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#ff8a00] text-[14px] font-bold text-white">
                D
              </div>
              <span className="font-serif text-[10px] font-bold text-white">Delizioso</span>
            </Link>

            <p className="mt-8 max-w-[190px] text-[13px] leading-[23px] text-[#e4d9ce]">
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e5e2] text-[#20170f] transition hover:bg-[#ff8a00] hover:text-white">
                <FaTwitter size={15} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e5e2] text-[#20170f] transition hover:bg-[#ff8a00] hover:text-white">
                <FaInstagram size={16} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e5e2] text-[#20170f] transition hover:bg-[#ff8a00] hover:text-white">
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#ff8a00]">Page</h3>
            <ul className="mt-5 space-y-4">
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Menu</Link></li>
              <li><Link to="/order" className="footer-link">Order online</Link></li>
              <li><Link to="/order" aria-label="Catering and online ordering" className="footer-link">Catering</Link></li>
              <li><Link to="/reservation" aria-label="Make a reservation" className="footer-link">Reservation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#ff8a00]">Information</h3>
            <ul className="mt-5 space-y-4">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/testimonial" className="footer-link">Testimonials</Link></li>
              <li><Link to="/event" className="footer-link">Events</Link></li>
            </ul>
          </div>

          <div>
            <Link to="/contact" className="block w-fit text-[15px] font-semibold text-[#ff8a00] hover:text-white">
              Get in Touch
            </Link>

            <div className="mt-5 space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=3247+Johnson+Ave%2C+Bronx%2C+NY+10463"
                target="_blank"
                rel="noreferrer"
                className="block text-[13px] leading-[19px] text-[#e4d9ce] transition hover:text-[#ff8a00]"
              >
                3247 Johnson Ave, Bronx, NY<br />
                10463, Amerika Serikat
              </a>

              <a href="mailto:delizioso@gmail.com" className="block break-all text-[13px] text-[#e4d9ce] transition hover:text-[#ff8a00]">
                delizioso@gmail.com
              </a>

              <a href="tel:+12345678901" className="block text-[13px] text-[#e4d9ce] transition hover:text-[#ff8a00]">
                +123 4567 8901
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center border-t border-white/10 pt-8 sm:mt-16">
          <p className="text-center text-[13px] text-[#e4d9ce]">Copyright © 2022 Delizioso</p>
        </div>
      </div>

      <style>{`
        .footer-link {
          display: inline-block;
          font-size: 13px;
          min-height: 28px;
          padding-top: 5px;
          padding-bottom: 5px;
          color: #e4d9ce;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #ff8a00;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
