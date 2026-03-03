import React from 'react';
import { Coffee, Zap, Moon, Sun, Sparkles } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  thaiName: string;
  category: string;
  realName: string;
  description: string;
  benefit: string;
  price: number;
  icon: React.ReactNode;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Potion of Awakening
  {
    id: 'ancient-root',
    name: 'Ancient Root Extract',
    thaiName: 'สกัดรากไม้บรรพกาล',
    category: 'Potion of Awakening',
    realName: 'Iced Americano',
    description: 'สกัดจากรากไม้ดำในป่าลึก เข้มข้น ขมลึก ปลุกวิญญาณที่หลับใหลให้ตื่นเต็มตา',
    benefit: 'Intelligence +10 (เหมาะกับคนอ่านหนังสือสอบ)',
    price: 65,
    icon: <Zap className="text-stone-400" />,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'moonlight-mist',
    name: 'Moonlight Mist',
    thaiName: 'หมอกแสงจันทร์',
    category: 'Potion of Awakening',
    realName: 'Latte',
    description: 'กาแฟผสมนมฟองนุ่มขาวนวล ดุจหมอกจางๆ ที่ปกคลุมป่าเอลฟ์ยามค่ำคืน รสละมุนลิ้น',
    benefit: 'Calmness +20 (ลดความเครียด)',
    price: 70,
    icon: <Moon className="text-blue-200" />,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'dark-mud',
    name: 'Dark Forest Mud',
    thaiName: 'โคลนป่าต้องห้าม',
    category: 'Potion of Awakening',
    realName: 'Mocha',
    description: 'การผสมผสานระหว่างกาแฟและโกโก้เข้มข้น เหมือนดินโคลนศักดิ์สิทธิ์ที่อุดมสมบูรณ์ หวานปนขม',
    benefit: 'Stamina +15 (เติมพลังกาย)',
    price: 75,
    icon: <Coffee className="text-amber-900" />,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=400&h=500'
  },
  // Elemental Essence
  {
    id: 'emerald-guardian',
    name: 'Emerald Guardian',
    thaiName: 'ผู้พิทักษ์มรกต',
    category: 'Elemental Essence',
    realName: 'Matcha Green Tea',
    description: 'ใบชาจากยอดดอยที่เอลฟ์ดูแล สีเขียวสว่างดุจอัญมณีมรกต กลิ่นหอมธรรมชาติเน้นๆ',
    benefit: 'Wisdom +10 (สงบจิตใจ)',
    price: 80,
    icon: <Sparkles className="text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'dragon-flame',
    name: "Dragon's Flame",
    thaiName: 'เพลิงมังกร',
    category: 'Elemental Essence',
    realName: 'Thai Tea',
    description: 'ชาสีส้มแดงร้อนแรงดั่งไฟมังกร รสชาติหวานมัน ดื่มแล้วเลือดสูบฉีด',
    benefit: 'Strength +10 (กระปรี้กระเปร่า)',
    price: 60,
    icon: <Zap className="text-orange-600" />,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'fairy-kiss',
    name: "Fairy's Kiss",
    thaiName: 'จุมพิตภูตจิ๋ว',
    category: 'Elemental Essence',
    realName: 'Peach Tea',
    description: 'หอมหวานสดชื่นเหมือนโดนภูตตัวจิ๋วแกล้งจุ๊บแก้ม กลิ่นผลไม้ตลบอบอวล',
    benefit: 'Charm +15 (สดใส น่ารัก)',
    price: 65,
    icon: <Sparkles className="text-pink-300" />,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'earth-spirit',
    name: 'Earth Spirit Cocoa',
    thaiName: 'โกโก้วิญญาณปฐพี',
    category: 'Elemental Essence',
    realName: 'Rich Cocoa',
    description: 'โกโก้สีน้ำตาลเข้ม ดั่งพลังแห่งผืนดิน หนักแน่น เข้มข้น ไม่เจือจาง',
    benefit: 'Defense +10 (อิ่มท้องนาน)',
    price: 70,
    icon: <Coffee className="text-amber-800" />,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=400&h=500'
  },
  // Alchemist's Special
  {
    id: 'mana-potion',
    name: 'Mana Potion',
    thaiName: 'มานาโพชั่น',
    category: "Alchemist's Special",
    realName: 'Blue Curacao Soda',
    description: 'น้ำสีฟ้าเรืองแสง (ใส่กากเพชรทานได้) ซ่าสดชื่น ฟื้นฟูค่ามานาที่เสียไปจากการทำงานหนัก',
    benefit: 'MP Recovery 100%',
    price: 85,
    icon: <Zap className="text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'health-potion',
    name: 'Health Potion',
    thaiName: 'เฮลท์โพชั่น',
    category: "Alchemist's Special",
    realName: 'Strawberry Soda',
    description: 'น้ำสีแดงสดใส ช่วยเยียวยาหัวใจที่อ่อนล้า เติมความหวานอมเปรี้ยวให้ชีวิต',
    benefit: 'HP Recovery 50%',
    price: 85,
    icon: <Sparkles className="text-red-500" />,
    image: 'https://nurturedhomes.com/wp-content/uploads/2025/05/strawberry-soda-10.jpg'
  },
  {
    id: 'twilight-galaxy',
    name: 'Twilight Galaxy',
    thaiName: 'กาแล็กซี่สนธยา',
    category: "Alchemist's Special",
    realName: 'Butterfly Pea Lime Juice',
    description: 'เครื่องดื่มเวทมนตร์ที่เปลี่ยนสีได้ เหมือนท้องฟ้ายามค่ำคืน',
    benefit: 'Magic +20 (ตื่นตาตื่นใจ)',
    price: 90,
    icon: <Moon className="text-indigo-400" />,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400&h=500'
  }
];

export const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="card-forest group overflow-hidden flex flex-col h-full">
      <div className="relative h-56 mb-4 overflow-hidden rounded-xl">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-2 mb-1">
            {item.icon}
            <span className="text-[10px] font-bold tracking-widest uppercase text-parchment/80">{item.name}</span>
          </div>
          <h3 className="font-display text-xl text-gold">{item.thaiName}</h3>
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-forest-900/80 backdrop-blur-sm rounded-md border border-gold/20">
          <span className="text-[10px] font-bold text-gold uppercase tracking-tighter">{item.realName}</span>
        </div>
      </div>
      
      <div className="flex-grow">
        <p className="text-xs text-parchment/70 mb-3 leading-relaxed">
          {item.description}
        </p>
        
        <div className="p-2 bg-forest-900/50 rounded-lg border border-gold/10 mb-4">
          <p className="text-[10px] font-medium text-gold/90 italic">
            {item.benefit}
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gold/10">
        <span className="font-display text-lg text-gold">{item.price} Gold</span>
        <button className="px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold hover:text-forest-900 transition-colors">
          Add to Satchel
        </button>
      </div>
    </div>
  );
};
