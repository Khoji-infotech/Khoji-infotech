import { Search, Upload, LogIn, HelpCircle } from "lucide-react";

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          <button className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-primary transition-colors">
            <Search className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Face Search</span>
          </button>
          
          <button className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-primary transition-colors">
            <Upload className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Upload</span>
          </button>
          
          <button className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-primary transition-colors">
            <LogIn className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Login</span>
          </button>
          
          <button className="flex flex-col items-center py-2 px-4 text-gray-600 hover:text-primary transition-colors">
            <HelpCircle className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Help</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;