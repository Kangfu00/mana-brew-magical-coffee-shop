import React, { useState, useEffect } from 'react';
import { ForestScene } from './components/MagicScene';
import { menuItems, MenuCard } from './components/CoffeeMenu';
import { AICrystalBall } from './components/AICrystalBall';
import { 
  Coffee, 
  Scroll, 
  Map, 
  Users, 
  ArrowDown, 
  Menu, 
  X, 
  Sparkles, 
  ShieldCheck,
  Send
} from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-forest-900 text-parchment selection:bg-gold selection:text-forest-900 relative">
      
      {/* Global Golden Particles Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: 0.2 + Math.random() * 0.5
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-forest-900/90 backdrop-blur-lg border-b border-gold/20 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-forest-900 font-display font-bold text-2xl shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
              MB
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-gold hidden sm:block">
              MANA BREW
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
            <a href="#oracle" onClick={scrollToSection('oracle')} className="hover:text-gold transition-colors cursor-pointer">The Oracle</a>
            <a href="#menu" onClick={scrollToSection('menu')} className="hover:text-gold transition-colors cursor-pointer">Potions</a>
            <a href="#guild" onClick={scrollToSection('guild')} className="hover:text-gold transition-colors cursor-pointer">Guild</a>
            <button 
              onClick={scrollToSection('menu')}
              className="px-6 py-2 bg-gold text-forest-900 rounded-full hover:bg-gold-bright transition-all shadow-[0_0_10px_rgba(212,175,55,0.3)] cursor-pointer"
            >
              Pre-Order
            </button>
          </div>

          <button className="md:hidden text-gold p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-forest-900 flex flex-col items-center justify-center gap-8 text-xl font-display animate-fade-in">
            <a href="#oracle" onClick={scrollToSection('oracle')} className="hover:text-gold transition-colors uppercase tracking-widest">The Oracle</a>
            <a href="#menu" onClick={scrollToSection('menu')} className="hover:text-gold transition-colors uppercase tracking-widest">Potions</a>
            <a href="#guild" onClick={scrollToSection('guild')} className="hover:text-gold transition-colors uppercase tracking-widest">Guild</a>
            <button 
              onClick={scrollToSection('menu')}
              className="px-8 py-3 bg-gold text-forest-900 rounded-full shadow-lg font-bold uppercase tracking-widest"
            >
              Order Now
            </button>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <ForestScene />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-forest-900/40 via-forest-900/60 to-forest-900" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-gold/30 text-gold text-[10px] tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-md bg-forest-900/30">
            <Sparkles size={12} /> Established in Ancient Times
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-parchment drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            MANA BREW
          </h1>
          
          <p className="font-cursive text-2xl md:text-4xl text-gold/90 mb-8 italic">
            "จิบรสชาติแห่งป่าศักดิ์สิทธิ์ เติมมานาให้ชีวิต"
          </p>
          
          <p className="max-w-2xl mx-auto text-lg text-parchment/70 font-light leading-relaxed mb-12">
            ไม่ต้องร่ายเวทย์รอคิว สั่งจองความสดชื่นล่วงหน้าได้ทันที <br/>
            สัมผัสพลังงานจากพงไพรในทุกหยดที่ดื่ม
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center sm:items-end">
             <div className="flex flex-col items-center gap-4">
               <div className="animate-bounce hidden sm:block">
                  <ArrowDown className="text-gold/50" />
               </div>
               <button 
                  onClick={scrollToSection('menu')} 
                  className="relative px-10 py-4 font-display font-bold text-forest-900 bg-gold rounded-xl 
                             transition-all duration-300 hover:bg-gold-bright hover:scale-110 
                             shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)]
                             animate-pulse hover:animate-none"
               >
                  ร่ายคาถาสั่งเครื่องดื่ม (Pre-Order)
               </button>
             </div>
             <button onClick={scrollToSection('oracle')} className="px-10 py-4 border-2 border-gold/40 rounded-xl font-display font-bold text-gold hover:bg-gold/10 transition-all backdrop-blur-sm">
                ปรึกษาลูกแก้วพยากรณ์
             </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce sm:hidden">
             <ArrowDown className="text-gold/50" />
          </div>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* Smart Feature: Oracle */}
        <section id="oracle" className="py-32 bg-forest-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full bg-mana-blue blur-[150px] absolute -top-64 -left-64"></div>
            <div className="w-[500px] h-[500px] rounded-full bg-gold blur-[150px] absolute -bottom-64 -right-64"></div>
          </div>
          
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.4em] text-gold uppercase mb-4 block">Smart Business</span>
              <h2 className="section-title">ลูกแก้วพยากรณ์</h2>
              <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-50"></div>
            </div>
            
            <AICrystalBall />
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-32 bg-forest-800/30 border-y border-gold/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.4em] text-gold uppercase mb-4 block">The Collection</span>
              <h2 className="font-display text-4xl md:text-6xl text-parchment mb-4">เมนูโพชั่น</h2>
              <p className="text-parchment/60 max-w-2xl mx-auto">
                เครื่องดื่มทุกแก้วปรุงด้วยวัตถุดิบจากป่าลึก ผ่านการร่ายมนตร์เพื่อดึงรสชาติที่แท้จริงออกมา
              </p>
            </div>
            
            {/* Categories */}
            {['Potion of Awakening', 'Elemental Essence', "Alchemist's Special"].map(cat => (
              <div key={cat} className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <h3 className="font-display text-2xl text-gold whitespace-nowrap">{cat}</h3>
                  <div className="h-[1px] w-full bg-gold/20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {menuItems.filter(item => item.category === cat).map(item => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Section */}
        <section id="guild" className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-parchment p-8 md:p-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              {/* Paper Texture Effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
              
              {/* Decorative Borders */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-forest-900/20 pointer-events-none"></div>
              <div className="absolute top-8 left-8 right-8 bottom-8 border border-forest-900/10 pointer-events-none"></div>

              <div className="relative z-10 text-forest-900 text-center">
                <div className="flex justify-center mb-8">
                  <ShieldCheck size={64} className="text-gold-dark" />
                </div>
                
                <h2 className="font-display text-4xl md:text-5xl mb-4">ลงนามพันธสัญญาแห่งป่า</h2>
                <p className="font-cursive text-2xl mb-12 text-forest-700">
                  "เข้าร่วมกิลด์นักผจญภัย เพื่อรับสิทธิพิเศษเหนือใคร"
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                        <Sparkles className="text-gold-dark" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase tracking-wider text-sm">Welcome Gift</h4>
                        <p className="text-sm text-forest-700">รับฟรี! เหรียญทองส่วนลด 15 Gold สำหรับภารกิจแรก</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                        <Users className="text-gold-dark" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold uppercase tracking-wider text-sm">Guild Access</h4>
                        <p className="text-sm text-forest-700">สะสมคะแนนเพื่อเลื่อนระดับนักผจญภัย รับเมนูลับเฉพาะกิลด์</p>
                      </div>
                    </div>
                  </div>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2">ชื่อนักผจญภัย (Name)</label>
                      <input 
                        type="text" 
                        placeholder="ระบุชื่อของคุณ..."
                        className="w-full bg-transparent border-b-2 border-forest-900/30 py-2 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2">หินสื่อสาร (Line ID / Tel)</label>
                      <input 
                        type="text" 
                        placeholder="ช่องทางติดต่อ..."
                        className="w-full bg-transparent border-b-2 border-forest-900/30 py-2 focus:outline-none focus:border-gold-dark transition-colors"
                      />
                    </div>
                    <button className="w-full mt-6 py-4 bg-forest-900 text-parchment font-display font-bold tracking-widest hover:bg-forest-800 transition-colors flex items-center justify-center gap-2">
                      ลงนาม (REGISTER) <Send size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-forest-900 border-t border-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="w-12 h-12 bg-gold mx-auto rounded-lg flex items-center justify-center text-forest-900 font-display font-bold text-2xl mb-6">
            MB
          </div>
          <p className="font-display text-gold tracking-widest mb-4">MANA BREW</p>
          <p className="text-parchment/40 text-sm max-w-md mx-auto mb-8">
            ตั้งอยู่ในโพรงต้นไม้ใหญ่ใจกลางป่าเวทมนตร์ <br/>
            เปิดให้บริการตั้งแต่แสงแรกจนถึงแสงสุดท้ายของวัน
          </p>
          <div className="flex justify-center gap-6 text-parchment/60">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-gold transition-colors">Line Official</a>
          </div>
          <p className="mt-12 text-[10px] text-parchment/20 uppercase tracking-[0.3em]">
            © 2024 Mana Brew Coffee & Magic. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
