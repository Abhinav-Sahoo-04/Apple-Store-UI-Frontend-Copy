import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import NavList from "./NavList";
import { motion } from "motion/react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const [tvHome] = useState([
  {
    category: "Explore TV & Home",
    links: [
      "Explore TV & Home",
      "Apple TV 4K",
      "HomePod",
      "HomePod mini"
    ]
  },
  {
    category: "Shop TV & Home",
    links: [
      "Shop Apple TV 4K",
      "Shop HomePod",
      "Shop HomePod mini",
      "Shop Siri Remote",
      "TV & Home Accessories"
    ]
  },
  {
    category: "More from TV & Home",
    links: [
      "Apple TV Support",
      "HomePod Support",
      "AppleCare for Apple TV",
      "AppleCare for HomePod",
      "Apple TV app",
      "Apple TV",
      "Home app",
      "Apple Music",
      "Siri",
      "AirPlay"
    ]
  }
]);

  const [airpods] = useState([
  {
    category: "Explore AirPods",
    links: [
      "Explore All AirPods",
      "AirPods 4",
      "AirPods Pro 3",
      "AirPods Max",
      "Compare AirPods"
    ]
  },
  {
    category: "Shop AirPods",
    links: [
      "Shop AirPods",
      "AirPods Accessories"
    ]
  },
  {
    category: "More from AirPods",
    links: [
      "AirPods Support",
      "AppleCare",
      "Apple Music"
    ]
  }
]);


  const [watch] = useState([
  {
    category: "Explore Watch",
    links: [
      "Explore All Apple Watch",
      "Apple Watch Series 11",
      "Apple Watch SE 3",
      "Apple Watch Ultra 3",
      "Apple Watch Nike",
      "Compare Watch",
      "Why Apple Watch"
    ]
  },
  {
    category: "Shop Watch",
    links: [
      "Shop Apple Watch",
      "Apple Watch Straps",
      "Apple Watch Accessories",
      "Ways to Buy"
    ]
  },
  {
    category: "More from Watch",
    links: [
      "Apple Watch Support",
      "AppleCare",
      "watchOS 26",
      "Apple Watch For Your Kids",
      "Apps by Apple"
    ]
  }
]);

  const [mac] = useState([
    {
      category: "Explore Mac",
      links: [
        "Explore All Mac",
        "MacBook Air",
        "MacBook Pro",
        "iMac",
        "Mac mini",
        "Mac Studio",
        "Mac Pro",
        "Displays",
        "Compare Mac",
        "Switch from PC to Mac",
      ],
    },
    {
      category: "Shop Mac",
      links: ["Shop Mac", "Mac Accessories", "Ways to Buy"],
    },
    {
      category: "More from Mac",
      links: [
        "Mac Support",
        "AppleCare",
        "macOS Tahoe",
        "Apple Intelligence",
        "Apps by Apple",
        "Better with iPhone",
        "iCloud+",
        "Mac for Business",
        "Education",
      ],
    },
  ]);
  const [ipad] = useState([
  {
    category: "Explore iPad",
    links: [
      "Explore All iPad",
      "iPad Pro",
      "iPad Air",
      "iPad",
      "iPad mini",
      "Apple Pencil",
      "Keyboards",
      "Compare iPad"
    ]
  },
  {
    category: "Shop iPad",
    links: [
      "Shop iPad",
      "iPad Accessories",
      "Ways to Buy"
    ]
  },
  {
    category: "More from iPad",
    links: [
      "iPad Support",
      "AppleCare",
      "iPadOS 26",
      "Apple Intelligence",
      "Apps by Apple",
      "iCloud+",
      "Education"
    ]
  }
]);


  const [store] = useState([
    {
      category: "Shop",
      links: [
        "Shop the Latest",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "AirPods",
        "Accessories",
      ],
    },
    {
      category: "Quick Links",
      links: [
        "Find a Store",
        "Order Status",
        "Apple Trade In",
        "Ways to Buy",
        "Personal Setup",
      ],
    },
    {
      category: "Shop Special Stores",
      links: ["Education", "Business"],
    },
  ]);
  const [iphone] = useState([
  {
    category: "Explore iPhone",
    links: [
      "Explore All iPhone",
      "iPhone 17 Pro",
      "iPhone Air",
      "iPhone 17",
      "iPhone 16",
      "iPhone 16e",
      "Compare iPhone",
      "Switch from Android"
    ]
  },
  {
    category: "Shop iPhone",
    links: [
      "Shop iPhone",
      "iPhone Accessories",
      "Apple Trade In",
      "Ways to Buy"
    ]
  },
  {
    category: "More from iPhone",
    links: [
      "iPhone Support",
      "AppleCare",
      "iOS 26",
      "Apple Intelligence",
      "Apps by Apple",
      "iPhone Privacy",
      "Better with Mac",
      "iCloud+",
      "Wallet",
      "Siri"
    ]
  }
]);
const [entertainment] = useState([
  {
    category: "Explore Entertainment",
    links: [
      "Apple One",
      "Apple TV",
      "Apple Music",
      "Apple Arcade",
      "Apple Podcasts",
      "Apple Books",
      "App Store"
    ]
  },
  {
    category: "Support",
    links: [
      "Apple TV Support",
      "Apple Music Support"
    ]
  },
  {
    category:"",
    links:[""]
  }
]);
const [accessories] = useState([
  {
    category: "Shop Accessories",
    links: [
      "Shop All Accessories",
      "Mac",
      "iPad",
      "iPhone",
      "Apple Watch",
      "AirPods",
      "TV & Home"
    ]
  },
  {
    category: "Explore Accessories",
    links: [
      "Made by Apple",
      "Beats",
      "AirTag"
    ]
  },
  {
    category: "",
    links: [""
    ]
  }
]);
const [support] = useState([
  {
    category: "Explore Support",
    links: [
      "iPhone",
      "Mac",
      "iPad",
      "Watch",
      "AirPods",
      "Music",
      "TV"
    ]
  },
  {
    category: "Get Help",
    links: [
      "Community",
      "Check Coverage",
      "Genius Bar",
      "Repair"
    ]
  },
  {
    category: "Helpful Topics",
    links: [
      "Get AppleCare",
      "Apple Account and Password",
      "Billing & Subscriptions",
      "Accessibility"
    ]
  }
]);





  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <i className="ri-apple-fill"></i>
          </li>

          {/* STORE */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "store" ? null : "store");
              }}
            >
              Store
            </a>
          </motion.li>

          {/* MAC */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "mac" ? null : "mac");
              }}
            >
              Mac
            </a>
          </motion.li>

          {/* iPad */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "ipad" ? null : "ipad");
              }}
            >
              iPad
            </a>
          </motion.li>
          {/* iPhone */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "iphone" ? null : "iphone");
              }}
            >
              iPhone
            </a>
          </motion.li>
          {/* Watch */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "watch" ? null : "watch");
              }}
            >
              Watch
            </a>
          </motion.li>
          {/* AirPods */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "airpods" ? null : "airpods");
              }}
            >
              AirPods
            </a>
          </motion.li>
          {/* TVHOme */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "tvHome" ? null : "tvHome");
              }}
            >
              TV & Home
            </a>
          </motion.li>
          {/* Entertainment */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "Entertainment" ? null : "Entertainment");
              }}
            >
              Entertainment
            </a>
          </motion.li>
          {/* Accessories */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "accessories" ? null : "accessories");
              }}
            >
              Accessories
            </a>
          </motion.li>
          {/* Accessories */}
          <motion.li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(activeMenu === "support" ? null : "support");
              }}
            >
              Support
            </a>
          </motion.li>
          <li><i className="ri-search-line"></i></li>
          <li><i className="ri-shopping-bag-line"></i></li>
        </ul>

        {/* BLUR PANEL */}
        <div className={`nav-panel-wrap ${activeMenu ? "open" : ""}`}></div>

        {/* STORE PANEL */}
        <div className={`nav-panel store ${activeMenu === "store" ? "open-store" : ""}`}>
          <NavList store={store} classN={"storeS"} />
        </div>

        {/* MAC PANEL */}
        <div className={`nav-panel mac ${activeMenu === "mac" ? "open-store" : ""}`}>
          <NavList store={mac} classN={"macS"} />
        </div>
        {/* iPad PANEL */}
        <div className={`nav-panel ipad ${activeMenu === "ipad" ? "open-store" : ""}`}>
          <NavList store={ipad} classN={"ipadS"} />
        </div>
        {/* iPhone PANEL */}
        <div className={`nav-panel iphone ${activeMenu === "iphone" ? "open-store" : ""}`}>
          <NavList store={iphone} classN={"iphoneS"} />
        </div>
        {/* Watch PANEL */}
        <div className={`nav-panel watch ${activeMenu === "watch" ? "open-store" : ""}`}>
          <NavList store={watch} classN={"watchS"} />
        </div>
        {/* airpods PANEL */}
        <div className={`nav-panel airpods ${activeMenu === "airpods" ? "open-store" : ""}`}>
          <NavList store={airpods} classN={"airpodsS"} />
        </div>
        {/* tvHome PANEL */}
        <div className={`nav-panel tvHome ${activeMenu === "tvHome" ? "open-store" : ""}`}>
          <NavList store={tvHome} classN={"tvHomeS"} />
        </div>
        {/* Entertainment PANEL */}
        <div className={`nav-panel Entertainment ${activeMenu === "Entertainment" ? "open-store" : ""}`}>
          <NavList store={entertainment} classN={"EntertainmentS"} />
        </div>
        {/* accessories PANEL */}
        <div className={`nav-panel accessories ${activeMenu === "accessories" ? "open-store" : ""}`}>
          <NavList store={accessories} classN={"accessoriesS"} />
        </div>
        {/* support PANEL */}
        <div className={`nav-panel support ${activeMenu === "support" ? "open-store" : ""}`}>
          <NavList store={support} classN={"supportS"} />
        </div>
      </nav>
    </>
  );
}
