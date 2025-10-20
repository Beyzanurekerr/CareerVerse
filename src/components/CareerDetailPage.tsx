import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { useEffect } from "react";
import { Alert } from "./Alert";
import { useToast } from "./Toast";
import {
  ArrowLeft,
  CheckCircle,
  Code,
  Briefcase,
  TrendingUp,
  Clock,
  BookOpen,
  Target,
  Send,
  Bot,
  User,
  Sparkles,
  Play,
} from "lucide-react";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
}

interface CareerDetailPageProps {
  id: number;
  onBack: () => void;
}

export function CareerDetailPage({ id, onBack }: CareerDetailPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content:
        "Merhaba! Yazılım geliştirici kariyeri hakkında sorularınızı cevaplayabilirim. Size nasıl yardımcı olabilirim?",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [simulationStarted, setSimulationStarted] = useState(false);
 const { addToast } = useToast();
  // Sayfa ilk yüklendiğinde en üste kaydır
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

useEffect(() => {
  if (simulationStarted) {
    const timer = setTimeout(() => setSimulationStarted(false), 5000);
    return () => clearTimeout(timer);
  }
}, [simulationStarted]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content:
          "Yazılım geliştirme, problemleri teknolojiyle çözme sanatıdır. Python, JavaScript ve diğer programlama dillerini öğrenerek bu yolculuğa başlayabilirsiniz!",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  const careerData: Record<
    number,
    { title: string; subtitle: string; intro: string; emoji: string }
  > = {
    1: {
      title: "Öğretmen",
      subtitle: "Eğitim • Empati • İlham Verme",
      intro:
        "Öğrencilere ilham veren, bilgiyle geleceği şekillendiren bir öğretmen olma yolundasın.",
      emoji: "📚",
    },
    2: {
      title: "Yazılım Geliştirici",
      subtitle: "Kod ile dünyayı değiştir • Problem çözme • Yaratıcılık",
      intro:
        "Gerçek bir yazılım geliştirici gibi projelerdeki hataları analiz et, kod kalitesini artır ve çözüm üret. Bu simülasyonda seni bekleyen görevlerle geliştirme döngüsünü deneyimleyeceksin.",
      emoji: "💻",
    },
    3: {
      title: "İçerik Üreticisi",
      subtitle: "Yaratıcılık • Hikaye Anlatımı • Dijital Etki",
      intro:
        "İçerik üretimiyle kitlelere ulaşacak, fikirlerini dijital dünyaya aktaracaksın.",
      emoji: "🎥",
    },
  };

  const currentCareer = careerData[id] || careerData[2];

  return (
    <div className="min-h-screen bg-background">
      {/* Üst kısım */}
      <div className="relative h-60 md:h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-cyan-900/80"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/20 w-fit mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Dön
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-6xl">{currentCareer.emoji}</div>
              <div>
                <h1 className="text-5xl text-white mb-2">
                  {currentCareer.title}
                </h1>
                <p className="text-white/80 text-lg">{currentCareer.subtitle}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simülasyon mesajı */}
  {simulationStarted && (
  <Alert
    type="success"
    message="Simülasyona başarıyla kaydoldun ✨ Artık gerçek bir yazılım geliştirici gibi projelere hazırsın. İstersen genel bilgilendirmeye göz atabilir ya da simülasyona hemen başlayabilirsin."
    onClose={() => setSimulationStarted(false)}
  />
)}


      {/* Ana içerik */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol menü */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border p-6 sticky top-24">
              <h3 className="text-lg mb-4 text-foreground">Simülasyona giriş</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-foreground">Proje Hakkında</span>
                </div>

                {[1, 2, 3].map((task) => (
                  <button
                    key={task}
                    className="w-full flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors text-left"
                  >
                    <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs mt-0.5">
                      {task}
                    </div>
                    <div>
                      <div className="text-sm text-foreground mb-1">
                        Görev {task}:{" "}
                        {task === 1
                          ? "Kod İnceleme"
                          : task === 2
                          ? "API Entegrasyonu"
                          : "Arayüz Geliştirme"}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="w-3 h-3" />
                        <span>
                          {task === 1
                            ? "Yazılım hatalarını analiz et"
                            : task === 2
                            ? "Veri alışverişini yapılandır"
                            : "React ile kullanıcı arayüzü oluştur"}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          {/* Sağ ana alan */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bilgilendirme kartı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-red-500/90 via-blue-600/90 to-purple-600/90 text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80')] bg-cover bg-center opacity-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl">İlk Proje: Hata Avına Çık</h2>
                  </div>

                  <p className="text-white/90 leading-relaxed mb-6">
                    Gerçek bir yazılım geliştirici gibi projelerdeki hataları analiz et, kod
                    kalitesini artır ve çözüm üret. Bu simülasyonda seni bekleyen görevlerle
                    geliştirme döngüsünü deneyimleyeceksin.
                  </p>

                  <Button
  size="lg"
  className="bg-white text-purple-600 hover:bg-white/90 w-full"
  onClick={() => {
    setSimulationStarted(true);
    addToast("success", "Simülasyona başarıyla kaydoldun ✨");
  }}
>
  <Play className="w-5 h-5 mr-2" />
  Simülasyonu Başlat
</Button>

                </div>
              </Card>
            </motion.div>

            {/* Beceriler ve istatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground">Temel Beceriler</h3>
                    <p className="text-sm text-muted-foreground">İhtiyaç duyulanlar</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[ 
                    { name: "Programlama", value: 90 },
                    { name: "Problem Çözme", value: 85 },
                    { name: "Analitik Düşünme", value: 88 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-sm text-cyan-400">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground">Kariyer İstatistikleri</h3>
                    <p className="text-sm text-muted-foreground">Piyasa verileri</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ortalama Maaş</span>
                    <span className="text-foreground">₺35.000 - ₺60.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">İş İlanı Sayısı</span>
                    <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                      15.000+
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Talep Durumu</span>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      Çok Yüksek
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sohbet */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-foreground">Kariyer AI Asistanı</h3>
                      <p className="text-xs text-muted-foreground">
                        Sorularınızı yanıtlıyorum
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI
                  </Badge>
                </div>
              </div>

              <div className="h-80 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === "bot"
                          ? "bg-gradient-to-br from-cyan-500 to-purple-600"
                          : "bg-muted"
                      }`}
                    >
                      {message.type === "bot" ? (
                        <Bot className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-foreground" />
                      )}
                    </div>
                    <div
                      className={`max-w-[70%] p-4 rounded-2xl ${
                        message.type === "bot"
                          ? "bg-muted text-foreground"
                          : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border p-4 bg-muted/30">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Mesleğin detayları hakkında soru sor..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-background border-border text-foreground"
                  />
                  <Button
                    onClick={handleSend}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
