import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, TrendingUp, Users, Award } from "lucide-react";

const careers = [
  {
    id: 1,
    title: "Öğretmen",
    description: "Geleceğin bireylerini yetiştir. Eğitim, empati ve ilham verme yeteneklerini keşfet.",
    demand: "Yüksek Talep",
    demandLevel: 88,
    users: "3.2K",
    color: "cyan",
    icon: "👨‍🏫",
    bgImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: 2,
    title: "Yazılım Geliştirici",
    description: "Uygulama ve sistem yazılımları tasarlayıp geliştir. Kodlama ve problem çözme yeteneklerini keşfet.",
    demand: "Çok Yüksek Talep",
    demandLevel: 95,
    users: "2.5K",
    color: "purple",
    icon: "💻",
    bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    id: 3,
    title: "İçerik Üreticisi",
    description: "Yaratıcı içeriklerle kitleleri etkile. Yazma, görsel tasarım ve hikaye anlatımı yeteneklerini kullan.",
    demand: "Yüksek Talep",
    demandLevel: 82,
    users: "3.8K",
    color: "cyan",
    icon: "✍️",
    bgImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
  },
];

interface CareerExplorerNewProps {
  onCareerClick?: (careerId: number) => void;
}

export function CareerExplorerNew({ onCareerClick }: CareerExplorerNewProps) {
  return (
    <section id="explore" className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-15 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
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
            Meslek <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Evrenini</span> Keşfet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Okumak yerine deneyimleyerek öğren. Her mesleği etkileşimli senaryolarla keşfet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
          {careers.map((career, index) => {
            const isGradientCyan = career.color === "cyan";
            
            return (
              <motion.div
                key={career.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-card/90 dark:bg-card/50 border-border hover:border-cyan-500/50 transition-all duration-300 p-0 h-full backdrop-blur-sm group relative overflow-hidden shadow-lg dark:shadow-none">
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${career.bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent"></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 text-6xl opacity-80">
                      {career.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                      {career.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {career.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-3 mb-4">
                      {/* Demand Bar */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {career.demand}
                          </span>
                          <span className="text-xs text-cyan-400">{career.demandLevel}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${
                              isGradientCyan
                                ? "from-cyan-500 to-cyan-600"
                                : "from-purple-500 to-purple-600"
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${career.demandLevel}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          ></motion.div>
                        </div>
                      </div>

                      {/* Users Count */}
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Users className="w-4 h-4" />
                        <span>{career.users} kişi deneyimledi</span>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Sertifika
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                        Simülasyon
                      </Badge>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => onCareerClick?.(career.id)}
                      className={`w-full bg-gradient-to-r ${
                        isGradientCyan
                          ? "from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
                          : "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                      } text-white`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Deneyime Başla
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
          >
            Tüm Meslekleri Gör
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
