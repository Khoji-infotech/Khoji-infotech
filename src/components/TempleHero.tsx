import templeImage from "@/assets/temple-hero.jpg";

const TempleHero = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="container mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={templeImage} 
            alt="Beautiful illuminated Hindu temple at night with golden lights"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default TempleHero;