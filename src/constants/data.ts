import { Plant, Benefit } from '@/types';

export const CATEGORIES = [
  { id: 'leafy', name: 'Leafy Vegetables' },
  { id: 'root', name: 'Root Vegetables' },
  { id: 'climbers', name: 'Climbers' },
  { id: 'fruits', name: 'Fruits' },
];

export const SEASONS = [
  { id: 'summer', name: 'Summer' },
  { id: 'winter', name: 'Winter' },
  { id: 'all', name: 'All Season' },
];

export const PLANTS: Plant[] = [
  {
    id: '1',
    name: "Tomato",
    image: "/images/plants/tomato.jpg",
    price: "₹99",
    description: "High-yield tomato plant perfect for home gardens",
    category: "climbers",
    season: "summer",
    availability: true,
    rating: 4.5,
    reviews: 120
  },
  {
    id: '2',
    name: "Brinjal",
    image: "/images/plants/brinjal.jpg",
    price: "₹89",
    description: "Organic brinjal sapling with disease resistance",
    category: "climbers",
    season: "summer",
    availability: true,
    rating: 4.2,
    reviews: 85
  },
  {
    id: '3',
    name: "Chili",
    image: "/images/plants/chili.jpg",
    price: "₹79",
    description: "Spicy chili plant with high yield potential",
    category: "climbers",
    season: "summer",
    availability: true,
    rating: 4.0,
    reviews: 95
  },
  {
    id: '4',
    name: "Spinach",
    image: "/images/plants/spinach.jpg",
    price: "₹69",
    description: "Nutrient-rich spinach plant",
    category: "leafy",
    season: "winter",
    availability: true,
    rating: 4.3,
    reviews: 75
  },
  {
    id: '5',
    name: "Carrot",
    image: "/images/plants/carrot.jpg",
    price: "₹89",
    description: "Sweet and crunchy carrot variety",
    category: "root",
    season: "winter",
    availability: true,
    rating: 4.4,
    reviews: 110
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    title: "Fresh & Organic",
    description: "Grow your own pesticide-free vegetables and enjoy the freshest produce right from your garden.",
    icon: "🌱"
  },
  {
    id: '2',
    title: "Cost Effective",
    description: "Save money on groceries by growing your own vegetables at home.",
    icon: "💰"
  },
  {
    id: '3',
    title: "Therapeutic",
    description: "Gardening is a great stress reliever and provides a sense of accomplishment.",
    icon: "🧘"
  }
]; 