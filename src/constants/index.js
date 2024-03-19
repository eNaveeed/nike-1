import { nanoid } from "nanoid";
import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  {
    id: nanoid(10),
    href: "#home",
    label: "Home",
  },
  {
    id: nanoid(10),
    href: "#about-us",
    label: "About Us",
  },
  {
    id: nanoid(10),
    href: "#products",
    label: "Products",
  },
  {
    id: nanoid(10),
    href: "#contact-us",
    label: "Contact Us",
  },
];

export const shoes = [
  {
    id: nanoid(10),
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    id: nanoid(10),
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    id: nanoid(10),
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  {
    id: nanoid(10),
    value: "1k+",
    label: "Brands",
  },
  {
    id: nanoid(10),
    value: "500+",
    label: "Shops",
  },
  {
    id: nanoid(10),
    value: "250k+",
    label: "Customers",
  },
];

export const products = [
  {
    id: nanoid(10),
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    id: nanoid(10),
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    id: nanoid(10),
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    id: nanoid(10),
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    id: nanoid(10),
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    id: nanoid(10),
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    id: nanoid(10),
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    id: nanoid(10),
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    id: nanoid(10),
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    id: nanoid(10),
    title: "Products",
    links: [
      {
        name: "Air Force 1",
        link: "/",
      },
      {
        name: "Air Max 1",
        link: "/",
      },
      {
        name: "Air Jordan 1",
        link: "/",
      },
      {
        name: "Air Force 2",
        link: "/",
      },
      {
        name: "Nike Waffle Racer",
        link: "/",
      },
      {
        name: "Nike Cortez",
        link: "/",
      },
    ],
  },
  {
    id: nanoid(10),
    title: "Help",
    links: [
      {
        name: "About us",
        link: "/",
      },
      {
        name: "FAQs",
        link: "/",
      },
      {
        name: "How it works",
        link: "/",
      },
      {
        name: "Privacy policy",
        link: "/",
      },
      {
        name: "Payment policy",
        link: "/",
      },
    ],
  },
  {
    id: nanoid(10),
    title: "Get in touch",
    links: [
      {
        name: "customer@nike.com",
        link: "mailto:customer@nike.com",
      },
      {
        name: "+92554862354",
        link: "tel:+92554862354",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: nanoid(10),
    src: facebook,
    alt: "facebook logo",
  },
  {
    id: nanoid(10),
    src: twitter,
    alt: "twitter logo",
  },
  {
    id: nanoid(10),
    src: instagram,
    alt: "instagram logo",
  },
];
