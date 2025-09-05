import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">K</span>
          </div>
          <span className="font-bold text-lg text-gray-800">KHHOJI.in</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="temple" size="sm" className="rounded-full px-6">
            Signup / Login
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;