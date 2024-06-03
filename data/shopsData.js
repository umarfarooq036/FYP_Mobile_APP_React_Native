import FashionImg1 from "../assets/Category-Fashion/fashion1.jpg";
import FashionImg2 from "../assets/Category-Fashion/fashion2.jpg";
import FashionImg3 from "../assets/Category-Fashion/fashion3.jpg";
import FashionImg4 from "../assets/Category-Fashion/fashion4.jpg";
import FDImg1 from "../assets/Category-Food&Drink/food&drink1.jpg";
import FDImg2 from "../assets/Category-Food&Drink/food&drink2.jpg";
import FDImg3 from "../assets/Category-Food&Drink/food&drink3.jpg";

export const shops = [
  {
    id: 1,
    name: "Fashion Store 1",
    category: "Fashion",
    description: "Description of Fashion Store 1",
    image: FashionImg1,
  },
  {
    id: 2,
    name: "Fashion Store 2",
    category: "Fashion",
    description: "Description of Fashion Store 2",
    image: FashionImg2,
  },
  {
    id: 3,
    name: "Food & Drink Shop 1",
    category: "Food & Drink",
    description: "Description of Food & Drink Shop 1",
    image: FDImg1,
  },
  {
    id: 4,
    name: "Food & Drink Shop 2",
    category: "Food & Drink",
    description: "Description of Food & Drink Shop 2",
    image: FDImg2,
  },
  {
    id: 5,
    name: "Health & Fitness Center 1",
    category: "Health & Fitness",
    description: "Description of Health & Fitness Center 1",
    image: FashionImg1,
  },
  {
    id: 6,
    name: "Health & Fitness Center 2",
    category: "Health & Fitness",
    description: "Description of Health & Fitness Center 2",
    image: FashionImg2,
  },
  {
    id: 7,
    name: "Travel Agency 1",
    category: "Travel",
    description: "Description of Travel Agency 1",
    image: FDImg1,
  },
  {
    id: 8,
    name: "Travel Agency 2",
    category: "Travel",
    description: "Description of Travel Agency 2",
    image: FDImg2,
  },
  {
    id: 9,
    name: "Technology Store 1",
    category: "Technology",
    description: "Description of Technology Store 1",
    image: FashionImg1,
  },
  {
    id: 10,
    name: "Technology Store 2",
    category: "Technology",
    description: "Description of Technology Store 2",
    image: FashionImg2,
  },
  {
    id: 11,
    name: "Fashion Store 3",
    category: "Fashion",
    description: "Description of Fashion Store 3",
    image: FashionImg3,
  },
  {
    id: 12,
    name: "Food & Drink Shop 3",
    category: "Food & Drink",
    description: "Description of Food & Drink Shop 3",
    image: FDImg3,
  },
  {
    id: 13,
    name: "Health & Fitness Center 3",
    category: "Health & Fitness",
    description: "Description of Health & Fitness Center 3",
    image: FashionImg3,
  },
  {
    id: 14,
    name: "Travel Agency 3",
    category: "Travel",
    description: "Description of Travel Agency 3",
    image: FDImg3,
  },
  {
    id: 15,
    name: "Technology Store 3",
    category: "Technology",
    description: "Description of Technology Store 3",
    image: FashionImg3,
  },
];

export const groupedShops = shops.reduce((groups, shop) => {
  const { category } = shop;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(shop);
  return groups;
}, {});
