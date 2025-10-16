import { motion } from "motion/react";
import { Bot, Gamepad2, Target, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Bot,
    title: "Yapay Zeka Destekli Asistan",
    description: "Kişisel kariyer asistanınız, ilgi alanlarınızı ve becerilerinizi analiz ederek size özel öneriler sunar.",
    color: "cyan",
  },
  {
    icon: Gamepad2,
    title: "Meslek Simülasyon Senaryoları",
    description: "Gerçek dünya senaryolarında meslekleri deneyimle. Eğlenerek öğren, karar verirken emin ol.",
    color: "purple",
  },
  {
    icon: Target,
    title: "Kişiye Özel Meslek Önerileri",
    description: "İlgi, beceri ve özelliklerinize göre en uygun kariyer yollarını keşfedin.",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Etkileşimli Görevler ile Uyum Analizi",
    description: "Pratik görevler yaparak mesleklere ne kadar uygun olduğunuzu keşfedin.",
    color: "purple",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                           linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Nasıl <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Çalışır?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            CareerVerse, en son yapay zeka teknolojilerini kullanarak size en uygun kariyer yolunu bulmanızda yardımcı olur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isGradientCyan = feature.color === "cyan";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card/80 dark:bg-card/50 border-border hover:border-cyan-500/50 transition-all duration-300 p-6 h-full backdrop-blur-sm group shadow-lg dark:shadow-none">
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${
                      isGradientCyan 
                        ? "from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30" 
                        : "from-purple-500/20 to-purple-600/20 border border-purple-500/30"
                    } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${isGradientCyan ? "text-cyan-400" : "text-purple-400"}`} />
                    </div>
                    <div className={`absolute inset-0 blur-xl ${
                      isGradientCyan ? "bg-cyan-400/10" : "bg-purple-400/10"
                    } group-hover:blur-2xl transition-all`}></div>
                  </div>
                  
                  <h3 className={`text-xl text-foreground mb-3 ${
                    isGradientCyan ? "group-hover:text-cyan-400" : "group-hover:text-purple-400"
                  } transition-colors`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
