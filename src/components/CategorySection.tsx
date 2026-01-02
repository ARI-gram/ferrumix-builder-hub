import { Link } from "react-router-dom";
import { Paintbrush, Wrench, Droplets, HardHat, CircleDot, Zap } from "lucide-react";

const categories = [
  {
    id: "cement",
    name: "Cement",
    icon: HardHat,
    description: "Quality cement for all construction needs",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: "paint",
    name: "Paint",
    icon: Paintbrush,
    description: "Interior & exterior paints and finishes",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "power-tools",
    name: "Power Tools",
    icon: Zap,
    description: "Professional-grade power tools",
    color: "bg-primary/10 text-primary",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Droplets,
    description: "Pipes, valves, and fittings",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    id: "nails",
    name: "Nails & Fasteners",
    icon: CircleDot,
    description: "Nails, screws, and anchors",
    color: "bg-gray-500/10 text-gray-600",
  },
  {
    id: "all",
    name: "All Products",
    icon: Wrench,
    description: "Browse our complete catalog",
    color: "bg-secondary text-secondary-foreground",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Shop By Category
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            What Are You Building?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Find the right tools and materials for every project
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/products${category.id !== "all" ? `?category=${category.id}` : ""}`}
                className="group p-6 bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
