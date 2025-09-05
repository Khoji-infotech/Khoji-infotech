import { Button } from "@/components/ui/button";
import { Upload, Search, User, FileText } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="container mx-auto max-w-md space-y-4">
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
        >
          <Upload className="h-5 w-5 mr-3" />
          Upload Khoya
        </Button>
        
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
        >
          <User className="h-5 w-5 mr-3" />
          Upload Paya
        </Button>
        
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
        >
          <FileText className="h-5 w-5 mr-3" />
          Upload General
        </Button>
        
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
        >
          <Search className="h-5 w-5 mr-3" />
          Search By Face Photo
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;