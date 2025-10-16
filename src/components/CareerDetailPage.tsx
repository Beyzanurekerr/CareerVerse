import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
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
  Play
} from "lucide-react";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
}

interface CareerDetailPageProps {
  onBack: () => void;
}

export function CareerDetailPage({ onBack }: CareerDetailPageProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Merhaba! Yazılım geliştirici kariyeri hakkında sorularınızı cevaplayabilirim. Size nasıl yardımcı olabilirim?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [simulationStarted, setSimulationStarted] = useState(false);

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
        content: "Yazılım geliştirme, problemleri teknolojiyle çözme sanatıdır. Python, JavaScript ve diğer programlama dillerini öğrenerek bu yolculuğa başlayabilirsiniz!",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 overflow-hidden">
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
              <div className="text-6xl">💻</div>
              <div>
                <h1 className="text-5xl text-white mb-2">Yazılım Geliştirici</h1>
                <p className="text-white/80 text-lg">
                  Kod ile dünyayı değiştir • Problem çözme • Yaratıcılık
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Message */}
      {simulationStarted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 -mt-8 relative z-20"
        >
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-green-800 dark:text-green-300">Simülasyona başarıyla kaydoldun ✓</h3>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Şimdi gerçek bir yazılım geliştirici deneyimlemeye hazırsın. İstersen genel bilgilendirmeye göz atabilir ya da simülasyona hemen başlayabilirsin.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border p-6 sticky top-24">
              <h3 className="text-lg mb-4 text-foreground">Simülasyona giriş</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-foreground">Acil Servis ve Tru Hakkında</span>
                </div>
                
                <button className="w-full flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors text-left">
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="text-sm text-foreground mb-1">Görev 1: Triage Uygulaması</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      <span>Görev 1: Açıklama</span>
                    </div>
                  </div>
                </button>

                <button className="w-full flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors text-left">
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="text-sm text-foreground mb-1">Görev 2: Adli Vaka ve Raporlama</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      <span>Görev 2: Açıklama</span>
                    </div>
                  </div>
                </button>

                <button className="w-full flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors text-left">
                  <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="text-sm text-foreground mb-1">Görev 3: Bulgular ve Çözüm</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      <span>Görev 3: Örnek Çözüm</span>
                    </div>
                  </div>
                </button>
              </div>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-red-500/90 via-blue-600/90 to-purple-600/90 text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80')] bg-cover bg-center opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl">Acilde İlk Nöbet</h2>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-sm opacity-80 mb-1">Seviye</div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span>Başlangıç</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 mb-1">Dil</div>
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        <span>Türkçe</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 mb-1">Tahmini Süre</div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>1-3 saat</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm opacity-80 mb-1">Tür</div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Uzman Meslekler</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                    <h3 className="text-xl mb-3">Merhaba Beyzanur, simülasyona hoş geldin.</h3>
                    <p className="text-white/90 leading-relaxed">
                      Şimdi gerçek bir yazılım geliştirici deneyimlemeye hazırsın. İstersen genel bilgilendirmeye göz atabilir ya da simülasyona hemen başlayabilirsin.
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-white/90 w-full"
                    onClick={() => setSimulationStarted(true)}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Simülasyonu Başlat
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Skills & Stats */}
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
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">Programlama</span>
                      <span className="text-sm text-cyan-400">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">Problem Çözme</span>
                      <span className="text-sm text-cyan-400">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">Analitik Düşünme</span>
                      <span className="text-sm text-cyan-400">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
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

            {/* AI Chatbot */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-foreground">Kariyer AI Asistanı</h3>
                      <p className="text-xs text-muted-foreground">Sorularınızı yanıtlıyorum</p>
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
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === "bot"
                        ? "bg-gradient-to-br from-cyan-500 to-purple-600"
                        : "bg-muted"
                    }`}>
                      {message.type === "bot" ? (
                        <Bot className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-foreground" />
                      )}
                    </div>
                    <div className={`max-w-[70%] p-4 rounded-2xl ${
                      message.type === "bot"
                        ? "bg-muted text-foreground"
                        : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    }`}>
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
