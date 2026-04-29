interface CategoryCardProps {
  name: string;
  priceRange: string;
  image: string;
}

export default function CategoryCard({ name, priceRange, image }: CategoryCardProps) {
  return (
    <a
      href="#shop"
      data-piano="card"
      className="category-card group relative flex-shrink-0 w-[260px] sm:w-[280px] h-[360px] sm:h-[380px] overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1">{name}</h3>
        <p className="text-white/80 text-sm">{priceRange}</p>
      </div>
    </a>
  );
}