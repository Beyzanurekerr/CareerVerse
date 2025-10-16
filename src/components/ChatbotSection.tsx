import { useState } from "react";
import { motion } from "motion/react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

interface Message {
  id: number;
  type: "user" | "bot";
  content: string;
}

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot",
      content: "Merhaba! Ben CareerVerse AI asistanınızım. Size kariyer yolculuğunuzda yardımcı olmak için buradayım. İlgi alanlarınız ve becerileriniz hakkında konuşalım mı?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: "bot",
        content: "İlginç bir soru! Analiz ediyorum ve size en uygun kariyer önerilerini hazırlıyorum. Bu bilgilere dayanarak, teknoloji ve yaratıcılık alanlarında harika fırsatlar olabilir.",
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
    <section id="assistant" className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6">
            <Bot className="w-4 h-4" />
            <span>AI Kariyer Asistanı</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Yapay Zeka
            </span>{" "}
            ile Tanışın
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kişisel asistanınız, ilgi alanlarınızı analiz ederek size özel kariyer önerileri sunar.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/90 dark:bg-card/50 border-border backdrop-blur-sm overflow-hidden shadow-xl dark:shadow-none">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div>
                      <h3 className="text-foreground">CareerVerse AI</h3>
                      <p className="text-xs text-muted-foreground">Çevrimiçi • Her zaman hazır</p>
                    </div>
                  </div>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Powered
                  </Badge>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
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

              {/* Input Area */}
              <div className="border-t border-border p-4 bg-muted/30">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="İlgi alanlarınızı, becerilerinizi yazın..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-cyan-500"
                  />
                  <Button
                    onClick={handleSend}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  AI asistanınız ilgi alanlarınızı analiz ederek kişiselleştirilmiş öneriler sunar.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
