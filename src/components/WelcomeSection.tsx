const WelcomeSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pink-50 to-orange-50 py-4 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl">🌸</span>
          <h1 className="text-lg font-semibold text-gray-800">
            Welcome to <span className="text-red-600 font-bold">भारती पुत्र महामेला</span>
          </h1>
          <span className="text-2xl">🌸</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;