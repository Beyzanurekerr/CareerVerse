import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ChatbotSection } from "./components/ChatbotSection";
import { CareerExplorerNew } from "./components/CareerExplorerNew";
import { Footer } from "./components/Footer";
import { CareerDetailPage } from "./components/CareerDetailPage";
import { ToastProvider } from "./components/Toast"; // ✅ Toast sistemi eklendi

export default function App() {
  const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

  const handleCareerClick = (careerId: number) => {
    // Sadece Yazılım Geliştirici (id: 2) için detay sayfası göster
    if (careerId === 2) {
      setSelectedCareer(careerId);
    }
  };

  const handleBackToHome = () => {
    setSelectedCareer(null);
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        {selectedCareer ? (
          <CareerDetailPage id={selectedCareer} onBack={handleBackToHome} /> // ✅ id prop'u eklendi
        ) : (
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <HeroSection />
              <FeaturesSection />
              <ChatbotSection />
              <CareerExplorerNew onCareerClick={handleCareerClick} />
            </main>
            <Footer />
          </div>
        )}
      </ToastProvider>
    </ThemeProvider>
  );
}
