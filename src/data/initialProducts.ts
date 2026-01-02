export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
}

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Portland Cement 50kg",
    description: "High-quality Portland cement for all construction needs. Perfect for foundations, walls, and general masonry work.",
    price: 850,
    category: "cement",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "2",
    name: "Masonry Nails 4 inch (1kg)",
    description: "Heavy-duty masonry nails designed for concrete and brick. Rust-resistant coating for durability.",
    price: 280,
    category: "nails",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: "3",
    name: "Crown Emulsion Paint 20L - White",
    description: "Premium interior emulsion paint with excellent coverage. Low odor and quick drying formula.",
    price: 4500,
    category: "paint",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "4",
    name: "Bosch Power Drill 750W",
    description: "Professional-grade power drill with variable speed control. Includes 13mm chuck and side handle.",
    price: 12500,
    category: "power-tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "5",
    name: "PVC Pipe 4 inch (3m)",
    description: "High-pressure PVC pipe for plumbing applications. UV resistant and durable construction.",
    price: 650,
    category: "plumbing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: "6",
    name: "Weatherguard Exterior Paint 20L",
    description: "All-weather exterior paint with 10-year guarantee. Resistant to tropical conditions.",
    price: 6800,
    category: "paint",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "7",
    name: "Circular Saw 1400W",
    description: "Heavy-duty circular saw with laser guide. 185mm blade included for precision cutting.",
    price: 15800,
    category: "power-tools",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: "8",
    name: "Ball Valve 1/2 inch",
    description: "Brass ball valve for water control. Easy quarter-turn operation with chrome finish.",
    price: 450,
    category: "plumbing",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: "9",
    name: "Roofing Nails 2 inch (1kg)",
    description: "Galvanized roofing nails with wide head for secure fastening. Weather resistant.",
    price: 320,
    category: "nails",
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: "10",
    name: "Angle Grinder 850W",
    description: "Compact angle grinder for cutting and polishing. Includes safety guard and handle.",
    price: 8500,
    category: "power-tools",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=400&fit=crop",
    featured: true,
  },
  {
    id: "11",
    name: "White Cement 2kg",
    description: "Fine white cement for decorative work and tile grouting. Smooth finish guaranteed.",
    price: 180,
    category: "cement",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    featured: false,
  },
  {
    id: "12",
    name: "Water Pump 0.5HP",
    description: "Self-priming water pump for domestic use. Quiet operation with thermal protection.",
    price: 9800,
    category: "plumbing",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop",
    featured: true,
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "cement", name: "Cement" },
  { id: "nails", name: "Nails" },
  { id: "paint", name: "Paint" },
  { id: "power-tools", name: "Power Tools" },
  { id: "plumbing", name: "Plumbing" },
];
