import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
import FooterLink from "./FooterLink";
export default function Footer() {
  const footerLinks = {
  "Shop and Learn": [
    "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"
  ],
  "Apple Wallet": [
    "Wallet"
  ],
  "Account": [
    "Manage Your Apple Account", "Apple Store Account", "iCloud.com"
  ],
  "Entertainment": [
    "Apple One", "Apple TV", "Apple Music", "Apple Arcade", "Apple Podcasts", "Apple Books", "App Store"
  ],
  "Apple Store": [
    "Find a Store", "Genius Bar", "Today at Apple", "Apple Summer Camp", "Ways to Buy", "Apple Trade In", "Recycling Programme", "Order Status", "Shopping Help"
  ],
  "For Business": [
    "Apple and Business"
  ],
  "For Education": [
    "Apple and Education", "Shop for Education", "Shop for College"
  ],
  "For Healthcare": [
    "Apple in Healthcare", "Health on Apple Watch"
  ],
  "Apple Values": [
    "Accessibility", "Environment", "Privacy", "Supply Chain"
  ],
  "About Apple": [
    "Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"
  ]
};


  return (
    <div className="footer">
      <div className="quick-links">
        <h2>Quick links</h2>
        <ul>
          <li>
            <Link to="/development">Find a store</Link>
          </li>
          <li>
            <Link to="/development">Order Status</Link>
          </li>
          <li>
            <Link to="/development">Shoping Help</Link>
          </li>
          <li>
            <Link to="/development">Your Saves</Link>
          </li>
        </ul>
      </div>
      <div className="footer-para">
        <p>
          ◊ No Cost EMI is available with the purchase of an eligible product
          made using qualifying cards on 3- or 6-month tenures from most leading
          card issuers. Monthly pricing is rounded to the nearest rupee. Exact
          pricing will be provided by your card issuer, subject to your card
          issuer’s terms and conditions. Minimum order spend applies as per your
          card issuer’s threshold. No Cost EMI is not available to Business
          customers and cannot be combined with Apple Store for Education or
          Corporate Employee Purchase Plan pricing. Card eligibility is subject
          to terms and conditions between you and your card issuer. Offer may be
          revised or withdrawn at any time without any prior notice. Terms
          apply.
        </p>
        <p>
          Footnote ∆ Instant cashback is available with the purchase of an
          eligible product with qualifying American Express, Axis Bank and ICICI
          Bank cards only. Minimum transaction value of ₹10001.00 applies. Click
          here to see instant cashback amounts and eligible devices. Instant
          cashback is available for up to two orders per rolling 90-day period
          with an eligible card. Card eligibility is subject to terms and
          conditions between you and your card issuer. Total transaction value
          is calculated after any trade-in credit or eligible discount is
          applied. Any subsequent order adjustment(s) or cancellation(s) may
          result in instant cashback being recalculated, and any refund may be
          adjusted to account for instant cashback clawback; this may result in
          no refund being made to you. Offer may be revised or withdrawn at any
          time without any prior notice. Additional terms apply. Instant
          cashback is not available to Business customers and cannot be combined
          with Apple Store for Education or Corporate Employee Purchase Plan
          pricing. Multiple separate orders cannot be combined for instant
          cashback.
        </p>
        <p>
          Footnote ± Apple Intelligence is available in beta. Some features may
          not be available in all regions or languages. For feature and language
          availability and system requirements, see support.{" "}
          <a href="#">apple.com/121115</a>
        </p>
        <p>
          Footnote ‡ Mac, iPad and Apple Watch trade-in is available only
          in-store in India. Apple Retail Online in India does not offer
          trade-in for Mac, iPad and Apple Watch. Trade‑in values will vary
          based on the condition, year and configuration of your eligible
          trade‑in device. Not all devices are eligible for credit. You must be
          at least the age of majority to be eligible to trade in for credit.
          Trade‑in value may be applied towards a qualifying new device
          purchase. Actual value awarded is based on receipt of a qualifying
          device matching the description provided when estimate was made. Sales
          tax may be assessed on full value of a new device purchase. In-store
          trade‑in requires presentation of a valid photo ID (local law may
          require saving this information). Some stores may have additional
          requirements. Apple or its trade‑in partners reserve the right to
          refuse, cancel or limit the quantity of any trade‑in transaction for
          any reason. More details are available from Apple’s trade‑in partner
          for trade‑in and recycling of eligible devices. Restrictions and
          limitations may apply.
        </p>
        <p>
          1. Special pricing available to qualified customers. To learn more
          about how to start qualifying for special pricing, talk to an Apple
          Specialist in a store or give us a call on 000800 040 1966.
        </p>{" "}
        <br />
        <p>
          We use your location to show you delivery options faster. We found
          your location using your IP address or because you entered it during a
          previous visit to Apple.
        </p>
      </div>
      <div className="footer-links">
        <div className="footer-links-top">
          <i className="ri-apple-fill"></i>{" "}
          <i class="ri-arrow-right-s-line"></i>{" "}
          <a href="/"> Apple Store Online</a>
        </div>
        
            <FooterLink/>
        <a className="last-p">More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</a>
      </div>
      <div className="footer-end">
        
      <pre className="copy-tag">
        Copyright © 2025 Apple Inc.All rights reserved.     Privacy Policy  |  Terms of Use  |   Sales Policy  |  Legal  |  Site Map                                                                   
      </pre>
      <span>India</span>
      </div>
      

    </div>
  );
}
