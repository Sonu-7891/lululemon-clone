import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faPinterest,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white mx-auto text-gray-800 w-[90%] mt-10 text-sm">
      {/* Top Section */}
      <div className="container mx-auto p-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* My Account Section */}
        <div>
          <h3 className="font-bold mb-4">MY ACCOUNT</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Membership Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Sign In
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Ordering
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Returns and Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Shipping and Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Redeem Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Our Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Strategic Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Sweat Collective
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Live Chat
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-red-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mx-auto p-10 border-gray-200 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Additional Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Email Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Lululemon x Fanatics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Like New
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Gift Cards and Privacy */}
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-bold hover:underline hover:text-red-500"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold hover:underline hover:text-red-500"
                >
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-red-500">
                  Your Privacy Choices
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 justify-center md:justify-start">
            <a href="#" className="hover:text-red-500">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-red-500">
              <FontAwesomeIcon icon={faPinterest} size="lg" />
            </a>
            <a href="#" className="hover:text-red-500">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="#" className="hover:text-red-500">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-red-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className=" flex justify-evenly border-t text-center text-gray-500 mt-8">
          <p className="pt-5">
            © Lululemon Athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7
          </p>
          <div className="pt-5">
            <a href="#" className="hover:underline hover:text-red-500">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline hover:text-red-500">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
