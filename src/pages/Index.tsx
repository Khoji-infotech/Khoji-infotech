import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import TempleHero from "@/components/TempleHero";
import EventBranding from "@/components/EventBranding";
import ActionButtons from "@/components/ActionButtons";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50 pb-20">
      <Header />
      <WelcomeSection />
      <TempleHero />
      <EventBranding />
      <ActionButtons />
      <BottomNavigation />
    </div>
  );
};

export default Index;
