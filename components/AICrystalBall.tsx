import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { CrystalBallScene } from './MagicScene';
import { Sparkles, Wand2, Loader2 } from 'lucide-react';
import { menuItems, MenuItem } from './CoffeeMenu';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const AICrystalBall = () => {
  const [vibe, setVibe] = useState('');
  const [prediction, setPrediction] = useState<string | null>(null);
  const [recommendedItem, setRecommendedItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState(false);

  const consultOracle = async () => {
    if (!vibe.trim()) return;
    
    setLoading(true);
    setPrediction(null);
    setRecommendedItem(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an ancient Elven Oracle in a magical coffee shop. 
        A customer tells you their current vibe: "${vibe}".
        Based on this, recommend ONE of these drinks: ${menuItems.map(i => i.name).join(', ')}.
        Provide a short, mystical "prophecy" (in Thai) about why this drink fits their destiny today.
        Return the response in JSON format with two fields: "recommendedDrink" (exact name of the drink) and "prophecy" (the Thai text).`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recommendedDrink: { type: Type.STRING },
              prophecy: { type: Type.STRING }
            },
            required: ["recommendedDrink", "prophecy"]
          }
        }
      });

      const result = JSON.parse(response.text || "{}");
      const item = menuItems.find(i => i.name === result.recommendedDrink) || menuItems[0];
      
      setRecommendedItem(item);
      setPrediction(result.prophecy);
    } catch (error) {
      console.error("Oracle error:", error);
      setPrediction("ดวงดาวขัดข้อง... ลองใหม่อีกครั้งในภายหลัง");
    } finally {
      setLoading(false);
    }
  };

  const randomOracle = () => {
    setLoading(true);
    setPrediction(null);
    setRecommendedItem(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * menuItems.length);
      const item = menuItems[randomIndex];
      setRecommendedItem(item);
      setPrediction(`ดวงชะตาของท่านถูกลิขิตโดยพลังแห่งบรรพกาล... วันนี้ท่านควรลิ้มรส "${item.thaiName}" เพื่อเสริมพลัง ${item.benefit.split('(')[0]}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="card-forest max-w-4xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative group cursor-pointer" onClick={randomOracle}>
          <CrystalBallScene />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-forest-900/80 px-4 py-2 rounded-full border border-gold/50 text-gold text-xs font-bold uppercase tracking-widest">
              แตะเพื่อสุ่มโชคชะตา
            </div>
          </div>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-forest-900/40 backdrop-blur-sm rounded-full">
              <Loader2 className="w-12 h-12 text-mana-blue animate-spin" />
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h2 className="font-display text-3xl text-gold mb-4 flex items-center gap-3">
            <Wand2 className="text-gold" /> ลูกแก้วพยากรณ์
          </h2>
          <p className="text-parchment/80 mb-6 font-cursive text-xl">
            "วันนี้ดวงชะตา (Data) ของท่านเหมาะกับสิ่งใด?"
          </p>
          
          <div className="space-y-4">
            <button 
              onClick={randomOracle}
              disabled={loading}
              className="w-full btn-crystal flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "กำลังสื่อสารกับบรรพกาล..." : "แตะลูกแก้วเพื่อร่ายคำทำนาย"}
            </button>
          </div>
          
          {prediction && (
            <div className="mt-8 p-6 bg-forest-900/80 rounded-xl border border-mana-blue/30 animate-fade-in">
              <p className="text-mana-glow text-lg italic mb-4 leading-relaxed">
                "{prediction}"
              </p>
              {recommendedItem && (
                <div className="flex items-center gap-4 p-3 bg-gold/10 rounded-lg border border-gold/20">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/50">
                    <img src={recommendedItem.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-gold font-bold uppercase tracking-widest">คำแนะนำจากดวงดาว</p>
                    <p className="font-display text-lg">{recommendedItem.thaiName}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
