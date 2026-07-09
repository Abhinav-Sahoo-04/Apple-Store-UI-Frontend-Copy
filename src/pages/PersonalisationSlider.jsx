import React from "react";
import "../assets/styles/PersonalisationSlider.css";
import SlideCardL from "./SlideCardL";
import SlideCardM from "./SlideCardM";
import SlideCardD from "./SlideCardD";
export default function PersonalisationSlider() {
  const appleProductsL = [
    {
      src: "Personalization/store-card-40-holiday-engraving-202511.png",
      heading: "Holiday Store Card",
      price: "Free Engraving",
    },
    {
      src: "Personalization/mac-card-50-customize-202510.png",
      heading: "Customise Mac",
      price: "Choose chip, memory, storage and colour",
    },
  ];
  const appleProductsM = [
    {
      src: "Personalization/ipad-air-select-11in-wifi-starlight-202405.jpeg",
      heading: "11-inch iPad Air",
      price: "From ₹9317.00/mo. with instant cashback or ₹59900.00+",
    },
    {
      src: "Personalization/airpods-pro-3-hero-select-202509.jpeg",
      heading: "AirPods Pro 3",
      price: "MRP ₹25900.00 (Incl. of all taxes)",
    },
    {
      src: "Personalization/airtag-single-select-202104.jpeg",
      heading: "AirTag Single",
      price: "MRP ₹3490.00 (Incl. of all taxes)",
    },
    {
      src: "Personalization/airtag-4pack-select-202104.jpeg",
      heading: "AirTag 4 Pack",
      price: "MRP ₹11900.00 (Incl. of all taxes)",
    },
    {
      src: "Personalization/MX2D3.jpeg",
      heading: "Apple Pencil Pro",
      price: "MRP ₹11900.00 (Incl. of all taxes)",
    },
    {
      src: "Personalization/ipad-mini-select-wifi-starlight-202410.jpeg",
      heading: "iPad mini",
      price: "From ₹7817.00/mo. with instant cashback or ₹49900.00+",
    },
    {
      src: "Personalization/airpods-4-anc-select-202409.jpeg",
      heading: "AirPods 4 with ANC",
      price: "MRP ₹17900.00 (Incl. of all taxes)",
    },
  ];
  const appleAccessoriesL = [
    {
      src: "Holiday/store-card-40-holiday-quick-picks-202511.png",
      heading: "Add some special extras",
      price: "ACCESSORIES ",
    },
  ];
  const appleAccessoriesM = [
    {
      src: "Holiday/MFL84ref.jpeg",
      heading: "AirTag FineWoven Key Ring - Fox Orange",
      price: "MRP ₹3900.00 (Incl. of all taxes)",
    },
    {
      src: "Holiday/MGFJ4.jpeg",
      heading: "Powerbeats Pro 2 – High-Performance Earbuds – Electric Orange",
      price: "MRP ₹29900.00 (Incl. of all taxes)",
    },
    {
      src: "Holiday/MGFY4.jpeg",
      heading: "Magic Mouse (USB-C) - Black Multi-Touch Surface",
      price: "MRP ₹9500.00 (Incl. of all taxes)",
    },
    {
      src: "Holiday/MWR53.jpeg",
      heading: "46mm Turmeric Braided Solo Loop - Size 6 (Only at Apple)",
      price: "MRP ₹9500.00 (Incl. of all taxes)",
    },
    {
      src: "Holiday/MX743.jpeg",
      heading: "Magic Keyboard with Touch ID and Numeric Keypad for Mac",
      price: "MRP ₹19500.00 (Incl. of all taxes)",
    },
    {
      src: "Holiday/MXK63.jpeg",
      heading: "iPhone 17 Pro Silicone Case with MagSafe – Terra Cotta",
      price: "MRP ₹4900.00 (Incl. of all taxes)",
    },
    {
      src: "Holiday/MXK83.jpeg",
      heading: 'Magic Keyboard for iPad Pro 13" (M5) – US English – Black',
      price: "MRP ₹33900.00 (Incl. of all taxes)",
    },
  ];
  const appleM = [
    {
      src: "Apple/store-card-40-holiday-delivery-pickup-202511.jpeg",
      heading: "Get gifts in time for the holidays with free delivery or easy pickup.",
      price: "",
    },
    {
      src: "Apple/store-card-40-holiday-gifting-202511.jpeg",
      heading: "Let them know it’s on the way.",
      price: "APPLE STORE APP",
    },
    {
      src: "Apple/store-card-40-holiday-specialist-help-202511.jpeg",
      heading: "Find gifts with an Apple Specialist in a store or online",
      price: "APPLE SPECIALIST",
    },
  ];

  const appleL = [
    {
      src: "Apple/store-card-50-personal-setup-202408.jpeg",
      heading: "Shop with a Specialist over video.",
      price: "Choose your next device in a guided, one-way video session.",
    },
    {
      src: "Apple/store-card-50-specialist-video-202509_GEO_IN.jpeg",
      heading: "Set up your new device with help from a Specialis.",
      price: "PERSONAL SETUP.",
    },
  ];

  const appleD = [
    {
      src: ["Apple/s1.png", "Apple/s2.png"],
      heading: [
        "Exchange your smartphone, get ₹3350.00-₹64000.00 in credit towards a new one. Footnote",
        "No Cost EMI. Footnote ◊ Plus Instant Cashback. Footnote ",
      ],
      price: ["‡", "∆  "],
    },
    {
      src: ["Apple/s3.png", "Apple/s4.png"],
      heading: [
        "Make them yours. Engrave a mix of emoji, names and numbers for free.",
        "Customise your Mac.",
      ],
      price: ["", ""],
    },
  ];
  const savingL=[{
    src:"Saving/store-card-40-bts-edu-macbook-air-ipad-air-202503.jpeg",
    heading:"Buy a new Mac or iPad with education savings. Footnote",
    price:"EDUCATION"
  },
{
    src:"Saving/store-card-40-business-202506.jpeg",
    heading:"From enterprise to small business, we’ll work with you.",
    price:"SMALL BUSINESS"
  }]

  return (
    <>
      <div className="Personalisation-slider">
        <p>
          <span>Personalisation</span> Make it one of a kind.
        </p>
        <div className="personalisation-carousel">
          <SlideCardL
            src={appleProductsL[0].src}
            head={appleProductsL[0].heading}
            price={appleProductsL[0].price}
            clsName={"slide-card-l"}
          />
          {appleProductsM.map((prod) => (
            <SlideCardM
              src={prod.src}
              head={prod.heading}
              price={prod.price}
              clsName={"slide-card-m"}
            />
          ))}
          <SlideCardL
            src={appleProductsL[1].src}
            head={appleProductsL[1].heading}
            price={appleProductsL[1].price}
            clsName={"slide-card-xl"}
          />
        </div>
      </div>
      <div className="Personalisation-slider">
        <p>
          <span>Holiday picks.</span> Designed to delight.
        </p>
        <div className="personalisation-carousel">
          <SlideCardL
            src={appleAccessoriesL[0].src}
            head={appleAccessoriesL[0].heading}
            price={appleAccessoriesL[0].price}
            clsName={"slide-card-l"}
          />
          {appleAccessoriesM.map((prod) => (
            <SlideCardM
              src={prod.src}
              head={prod.heading}
              price={prod.price}
              clsName={"slide-card-m"}
            />
          ))}
        </div>
      </div>
      <div className="Personalisation-slider">
        <p>
          <span>Holiday picks.</span> Designed to delight.
        </p>
        <div className="personalisation-carousel">
          {appleM.map((prod) => (
            <SlideCardL
              src={prod.src}
              head={prod.heading}
              price={prod.price}
              clsName={"slide-card-l"}
            />
          ))}
          <SlideCardD
            src={appleD[0].src}
            head={appleD[0].heading}
            price={appleD[0].price}
            clsName={"slide-card-d"}
          />
          <SlideCardD
            src={appleD[1].src}
            head={appleD[1].heading}
            price={appleD[1].price}
            clsName={"slide-card-d"}
          />
          {appleL.map((prod) => (
            <SlideCardL
              src={prod.src}
              head={prod.heading}
              price={prod.price}
              clsName={"slide-card-xl"}
            />
          ))}
        </div>
      </div>
      <div className="Personalisation-slider">
        <p>
          <span>Savings and offers. </span> Exclusive deals, special stores and more.
        </p>
        <div className="personalisation-carousel">
          {savingL.map((prod) => (
            <SlideCardL
              src={prod.src}
              head={prod.heading}
              price={prod.price}
              clsName={"slide-card-l"}
            />
          ))}
        </div>
      </div>
    </>
  );
}
