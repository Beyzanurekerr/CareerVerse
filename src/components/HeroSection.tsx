import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-background dark:from-cyan-500/10 dark:via-purple-500/10"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Yapay Zeka Destekli Kariyer Keşfi</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-foreground text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Her Gencin{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Potansiyelini
            </span>
            <br />
            Keşfedebileceği Bir{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
              Kariyer Evreni
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Yapay zeka ile desteklenen kişiselleştirilmiş kariyer rehberliği, 
            oyunlaştırılmış deneyimler ve etkileşimli görevlerle geleceğini keşfet.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8"
            >
              Keşfetmeye Başla
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
            >
              Nasıl Çalışır?
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cyan-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <div className="text-3xl md:text-4xl text-cyan-400 mb-2">500+</div>
              <div className="text-muted-foreground text-sm md:text-base">Meslek Keşfi</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-purple-400 mb-2">10K+</div>
              <div className="text-muted-foreground text-sm md:text-base">Aktif Kullanıcı</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl text-cyan-400 mb-2">95%</div>
              <div className="text-muted-foreground text-sm md:text-base">Memnuniyet</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/30 to-purple-500/30 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
