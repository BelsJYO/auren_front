'use client'

import { SVGProps } from 'react'

const AurenLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="white"/>
    <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4Z" stroke="black" strokeWidth="2"/>
  </svg>
)

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AurenLogo className="h-8 w-8" />
              <span className="text-2xl font-bold">auren</span>
            </div>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-gray-500 pt-8">© 2025 AUREN</p>
          </div>

          {/* Column 2: FAQs */}
          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold">FAQs</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Information</a></li>
              <li><a href="#" className="hover:text-white">Payment</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Gift Card</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Delivery</a></li>
              <li><a href="#" className="hover:text-white">Collection</a></li>
              <li><a href="#" className="hover:text-white">Our Journals</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Be the first to get the latest news about trends and promotions and much more!
            </p>
            <form className="mt-4">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border-gray-700 rounded-l-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button type="submit" className="bg-white text-black py-2 px-3 rounded-r-md">
                  →
                </button>
              </div>
              <div className="mt-2 flex items-center">
                <input type="checkbox" id="subscribe" className="h-4 w-4 text-white bg-gray-800 border-gray-600 focus:ring-white" />
                <label htmlFor="subscribe" className="ml-2 text-xs text-gray-500">
                  By subscribing, you agree with the <a href="#" className="underline hover:text-white">Privacy Policy</a>.
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Terms of Services</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookies Policy</a>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>PayPal</span>
            <span>Stripe</span>
            <span>GPay</span>
            <span>Mastercard</span>
          </div>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 border-gray-700 rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-white">
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}
