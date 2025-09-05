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
          onClick={() => window.open('https://khoji.in/NonKyc/add_mahakumbh_member_special?type=khoya', '_blank')}
        >
          <Upload className="h-5 w-5 mr-3" />
          Upload Khoya
        </Button>
        
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
          onClick={() => window.open('https://khoji.in/NonKyc/add_mahakumbh_member_special?type=paya', '_blank')}
        >
          <User className="h-5 w-5 mr-3" />
          Upload Paya
        </Button>
        
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
          onClick={() => window.open('https://khoji.in/NonKyc/add_mahakumbh_member_special?type=general', '_blank')}
        >
          <FileText className="h-5 w-5 mr-3" />
          Upload General
        </Button>
        
        <Button 
          variant="divine" 
          size="lg" 
          className="w-full h-14 text-base font-semibold rounded-2xl"
          onClick={() => window.open('https://khoji.in/check-person-face-funnel', '_blank')}
        >
          <Search className="h-5 w-5 mr-3" />
          Search By Face Photo
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;