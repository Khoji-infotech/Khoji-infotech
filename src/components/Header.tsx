const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/0d2b8871-26f7-4feb-9b66-94110480021a.png" 
            alt="Ujjain Kumbh Simhastha 2028 Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-lg text-gray-800">Lapata.in</span>
        </div>
      </div>
    </header>
  );
};

export default Header;