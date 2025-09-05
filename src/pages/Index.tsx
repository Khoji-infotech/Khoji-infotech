import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import TempleHero from "@/components/TempleHero";
import EventBranding from "@/components/EventBranding";
import ActionButtons from "@/components/ActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Header />
      <WelcomeSection />
      <TempleHero />
      <EventBranding />
      <ActionButtons />
    </div>
  );
};

export default Index;
