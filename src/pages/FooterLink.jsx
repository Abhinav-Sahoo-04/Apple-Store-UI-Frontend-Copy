import React from "react";
import { Link } from "react-router-dom";
export default function FooterLink({ title, items }) {
  return (
    <div className="list-container">
      <ul className="shop">
        <Link to="/development">Shop and Learn</Link>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>AirTag</li>
        <li>Accessories</li>
        <li>Gift Cards</li>
      </ul>

      <ul className="appleWallet">
        <Link to="/development">Apple Wallet</Link>
        <li>Wallet</li>
      </ul>

      <ul className="account">
        <Link to="/development">Account</Link>
        <li>Manage Your Apple Account</li>
        <li>Apple Store Account</li>
        <li>iCloud.com</li>
      </ul>

      <ul className="entertainment">
        <Link to="/development">Entertainment</Link>
        <li>Apple One</li>
        <li>Apple TV</li>
        <li>Apple Music</li>
        <li>Apple Arcade</li>
        <li>Apple Podcasts</li>
        <li>Apple Books</li>
        <li>App Store</li>
      </ul>

      <ul className="appleStore">
        <Link to="/development">Apple Store</Link>
        <li>Find a Store</li>
        <li>Genius Bar</li>
        <li>Today at Apple</li>
        <li>Apple Summer Camp</li>
        <li>Ways to Buy</li>
        <li>Apple Trade In</li>
        <li>Recycling Programme</li>
        <li>Order Status</li>
        <li>Shopping Help</li>
      </ul>

      <ul className="forBusiness">
        <Link to="/development">For Business</Link>
        <li>Apple and Business</li>
      </ul>

      <ul className="forEducation">
        <Link to="/development">For Education</Link>
        <li>Apple and Education</li>
        <li>Shop for Education</li>
        <li>Shop for College</li>
      </ul>

      <ul className="forHealthcare">
        <Link to="/development">For Healthcare</Link>
        <li>Apple in Healthcare</li>
        <li>Health on Apple Watch</li>
      </ul>

      <ul className="appleValues">
        <Link to="/development">Apple Values</Link>
        <li>Accessibility</li>
        <li>Environment</li>
        <li>Privacy</li>
        <li>Supply Chain</li>
      </ul>

      <ul className="aboutApple">
        <Link to="/development">About Apple</Link>
        <li>Newsroom</li>
        <li>Apple Leadership</li>
        <li>Career Opportunities</li>
        <li>Investors</li>
        <li>Ethics & Compliance</li>
        <li>Events</li>
        <li>Contact Apple</li>
      </ul>
    </div>
  );
}
