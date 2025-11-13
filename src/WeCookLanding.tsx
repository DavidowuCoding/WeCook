import { useState, useEffect } from 'react';
import { 
  Heart, Sparkles, ShoppingCart, Gamepad2, ChefHat, Apple, Smartphone, 
  Plus, Minus, 
  CheckCircle, ArrowRight, Brain, UtensilsCrossed, Flame, Play, Star, Quote, 
  Mail, Shield, Lock, Award, TrendingUp, Clock, Zap, Users, Menu, X
} from 'lucide-react';

export default function WeCookLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stockPhotos = [
    `${import.meta.env.BASE_URL}stock_photos/medium-shot-couple-preparing-food-together.jpg`,
    `${import.meta.env.BASE_URL}stock_photos/medium-shot-family-cooking-delicious-pizza.jpg`,
    `${import.meta.env.BASE_URL}stock_photos/medium-shot-roommates-eating-together.jpg`
  ];

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollPercent = scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          const newIndex = Math.floor(scrollPercent * stockPhotos.length * 2) % stockPhotos.length;
          
          if (newIndex !== currentPhotoIndex) {
            setCurrentPhotoIndex(newIndex);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPhotoIndex, stockPhotos.length]);

  const faqs = [
    {
      q: "Auf welchen Plattformen ist WeCook verfügbar?",
      a: "WeCook ist für iOS und Android verfügbar. Lade es aus dem App Store oder Google Play herunter."
    },
    {
      q: "Wie funktioniert das Rezept-Swiping?",
      a: "Ähnlich wie bei Dating-Apps swipet ihr zusammen durch Rezepte. Wenn beide nach rechts swipen, ist es ein Match! Die App passt das Rezept dann an eure Gruppengröße an."
    },
    {
      q: "Wie funktioniert die KI-Aufgabenverteilung?",
      a: "Unsere KI analysiert das Rezept und teilt es in perfekt getaktete, synchronisierte Aufgaben für jede Person auf. So wird eine reibungslose Koordination gewährleistet und das Chaos beim gemeinsamen Kochen eliminiert."
    },
    {
      q: "Kann ich Rezepte für Ernährungsvorlieben anpassen?",
      a: "Absolut! WeCook passt Rezepte an vegane, keto, glutenfreie und andere Ernährungsvorlieben an, wann immer möglich."
    },
    {
      q: "Welche Spiele können wir beim Kochen spielen?",
      a: "Während der Wartezeiten könnt ihr Spiele & Unterhaltung wie '36 Fragen zum Verlieben', Quiz, kooperative Puzzles und Partyspiele ähnlich wie Jackbox genießen."
    },
    {
      q: "Wie funktioniert die Einkaufslisten-Funktion?",
      a: "Sobald ihr ein Rezept ausgewählt habt, generiert WeCook eine Einkaufsliste, die ihr direkt zu Online-Supermärkten wie Billa und Spar exportieren oder für den Einkauf im Laden speichern könnt."
    },
    {
      q: "Wie viele Personen können zusammen kochen?",
      a: "WeCook ist für 2-4 Personen optimiert, perfekt für Dates, Paare, Familien und kleine Gruppen. Wir bieten auch Teambuilding-Lösungen für Unternehmen."
    },
    {
      q: "Was macht WeCook anders als andere Koch-Apps?",
      a: "Im Gegensatz zu traditionellen Koch-Apps, die für Einzelpersonen konzipiert sind, ist WeCook speziell für gemeinsames Kochen entwickelt. Unsere KI-Aufgabenverteilung und synchronisierte Workflows eliminieren das Chaos beim gemeinsamen Kochen."
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Tom",
      role: "Paar aus Wien",
      content: "Endlich keine Diskussionen mehr, was wir kochen sollen! WeCook hat unser gemeinsames Kochen komplett verändert.",
      rating: 5,
      avatar: "👫"
    },
    {
      name: "Familie Müller",
      role: "Familie mit 2 Kindern",
      content: "Unsere Kinder lieben es, mit WeCook zu kochen. Die Spiele während der Wartezeiten sind ein Hit!",
      rating: 5,
      avatar: "👨‍👩‍👧‍👦"
    },
    {
      name: "Lisa & Maria",
      role: "Mitbewohnerinnen",
      content: "Die KI-Aufgabenverteilung ist genial. Wir kochen jetzt viel öfter zusammen und es macht richtig Spaß!",
      rating: 5,
      avatar: "👯"
    }
  ];

  const recipeCategories = [
    { name: "Italienisch", icon: "🍝", color: "from-red-500 to-orange-500", count: "45+" },
    { name: "Asiatisch", icon: "🍜", color: "from-orange-500 to-amber-500", count: "32+" },
    { name: "Vegetarisch", icon: "🥗", color: "from-green-500 to-emerald-500", count: "58+" },
    { name: "Schnell", icon: "⚡", color: "from-yellow-500 to-orange-500", count: "28+" },
    { name: "Desserts", icon: "🍰", color: "from-pink-500 to-red-500", count: "24+" },
    { name: "Gesund", icon: "🥑", color: "from-green-500 to-teal-500", count: "41+" }
  ];

  const benefits = [
    { icon: Clock, title: "50% Zeitersparnis", desc: "Durch optimierte Aufgabenverteilung" },
    { icon: Heart, title: "Mehr Spaß", desc: "Gemeinsames Kochen ohne Stress" },
    { icon: Zap, title: "Weniger Chaos", desc: "KI-gestützte Koordination" },
    { icon: TrendingUp, title: "Bessere Ergebnisse", desc: "Professionelle Rezepte für alle" }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Danke! Wir informieren dich, sobald WeCook verfügbar ist.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 sm:p-2.5 rounded-xl shadow-md">
              <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              WeCook
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">So funktioniert's</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Preise</button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all">
              Jetzt starten
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => { scrollToSection('features'); setMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Features</button>
              <button onClick={() => { scrollToSection('how-it-works'); setMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">So funktioniert's</button>
              <button onClick={() => { scrollToSection('pricing'); setMobileMenuOpen(false); }} className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2">Preise</button>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all text-center">
                Jetzt starten
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Large Photo Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-0">
        {/* Large Photo Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={stockPhotos[0]} 
            alt="People cooking together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 via-red-900/80 to-orange-900/85"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-left text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-300" />
                <span className="text-xs sm:text-sm text-white font-medium">Creative Pre-Incubator 2025</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-white">Gemeinsam</span>
                <br />
                <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  kochen.
                </span>
                <br />
                <span className="text-white">Einfach.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Transformiere gemeinsames Kochen in ein reibungsloses, unterhaltsames Erlebnis. 
                <span className="text-orange-300 font-semibold"> KI-gestützte Aufgabenverteilung</span> und 
                <span className="text-orange-300 font-semibold"> synchronisierte Workflows</span> für perfekte Koordination.
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/20">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-1.5 sm:p-2 flex-shrink-0">
                      <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-xs sm:text-sm text-white truncate">{benefit.title}</div>
                      <div className="text-[10px] sm:text-xs text-white/80 line-clamp-2">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg">
                  Kostenlos starten
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Demo ansehen
                </button>
              </div>
            </div>

            {/* Right: Floating App Mockup Overlay - Hidden on mobile */}
            <div className="relative z-20 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="flex items-center justify-center gap-4">
                  {/* Phone 1 - Alex */}
                  <div className="relative">
                    <div className="bg-black rounded-[2rem] p-1.5 shadow-2xl">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden w-[180px] aspect-[9/19.5] flex flex-col">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 pt-2.5 pb-2 bg-white">
                          <span className="text-[11px] font-semibold text-gray-900">9:41</span>
                          <div className="flex items-center gap-1">
                            {/* Signal Bars */}
                            <div className="flex items-end gap-0.5">
                              <div className="w-1 h-1 bg-gray-900 rounded-sm"></div>
                              <div className="w-1 h-1.5 bg-gray-900 rounded-sm"></div>
                              <div className="w-1 h-2 bg-gray-900 rounded-sm"></div>
                              <div className="w-1 h-2.5 bg-gray-900 rounded-sm"></div>
                            </div>
                            {/* WiFi Icon */}
                            <div className="w-3 h-2 border border-gray-900 rounded-sm"></div>
                            {/* Battery */}
                            <div className="flex items-center gap-0.5">
                              <div className="w-4 h-2 border border-gray-900 rounded-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full bg-gray-900 rounded-sm" style={{ width: '75%' }}></div>
                              </div>
                              <div className="w-0.5 h-1.5 bg-gray-900 rounded-r-sm"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">A</span>
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 leading-tight">Alex</h3>
                              <p className="text-[9px] text-gray-500 leading-tight">Swiping</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                            <span className="text-[10px] font-semibold text-gray-700">12</span>
                          </div>
                        </div>

                        {/* Recipe Card */}
                        <div className="flex-1 px-4 py-3 relative overflow-hidden bg-gray-50">
                          {/* Background Cards */}
                          <div className="absolute left-4 top-5 right-4 h-[260px] bg-gray-200 rounded-2xl transform rotate-1 opacity-25"></div>
                          <div className="absolute left-4 top-3 right-4 h-[260px] bg-gray-300 rounded-2xl transform -rotate-1 opacity-35"></div>
                          
                          {/* Active Card */}
                          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-500/40 h-full">
                            {/* Match Overlay */}
                            <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center z-10">
                              <div className="bg-white rounded-full p-3 shadow-xl animate-pulse">
                                <Heart className="w-8 h-8 text-green-500 fill-green-500" />
                              </div>
                            </div>
                            
                            {/* Recipe Image - Gradient Placeholder */}
                            <div className="h-32 bg-gradient-to-br from-orange-200 via-orange-300 to-red-200 relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <UtensilsCrossed className="w-10 h-10 text-orange-400 opacity-60" />
                              </div>
                            </div>
                            
                            {/* Recipe Info */}
                            <div className="p-3">
                              <h4 className="text-sm font-bold text-gray-900 mb-1">Pasta Carbonara</h4>
                              <p className="text-[10px] text-gray-600 mb-2 leading-tight">Classic Italian pasta</p>
                              
                              <div className="flex items-center justify-between text-[10px] text-gray-600 mb-2">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>25 min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>4</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                  <span>4.8</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-1.5">
                                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-[9px] font-semibold">Italian</span>
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-[9px] font-semibold">Quick</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="px-4 pb-4 bg-white">
                          <div className="flex items-center justify-center gap-3">
                            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                              <span className="text-gray-500 text-lg font-light">×</span>
                            </button>
                            <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                              <Heart className="w-6 h-6 text-white fill-white" />
                            </button>
                            <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
                              <Star className="w-5 h-5 text-blue-500 fill-blue-500" />
                            </button>
                          </div>
                          <div className="text-center mt-2">
                            <p className="text-[10px] font-bold text-green-600">✨ MATCH! ✨</p>
                            <p className="text-[9px] text-gray-500">You both liked this</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Match Indicator */}
                  <div className="flex flex-col items-center gap-2 px-2">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Heart className="w-7 h-7 text-white fill-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-green-600 mb-1">IT'S A MATCH!</h3>
                      <p className="text-[10px] text-gray-600 max-w-[100px] leading-tight">Both liked Pasta Carbonara</p>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>

                  {/* Phone 2 - Maria */}
                  <div className="relative">
                    <div className="bg-black rounded-[2rem] p-1.5 shadow-2xl">
                      <div className="bg-white rounded-[1.5rem] overflow-hidden w-[180px] aspect-[9/19.5] flex flex-col">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 pt-2.5 pb-2 bg-white">
                          <span className="text-[11px] font-semibold text-gray-900">9:42</span>
                          <div className="flex items-center gap-1">
                            {/* Signal Bars */}
                            <div className="flex items-end gap-0.5">
                              <div className="w-1 h-1 bg-gray-900 rounded-sm"></div>
                              <div className="w-1 h-1.5 bg-gray-900 rounded-sm"></div>
                              <div className="w-1 h-2 bg-gray-900 rounded-sm"></div>
                              <div className="w-1 h-2.5 bg-gray-900 rounded-sm"></div>
                            </div>
                            {/* WiFi Icon */}
                            <div className="w-3 h-2 border border-gray-900 rounded-sm"></div>
                            {/* Battery */}
                            <div className="flex items-center gap-0.5">
                              <div className="w-4 h-2 border border-gray-900 rounded-sm relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full bg-gray-900 rounded-sm" style={{ width: '75%' }}></div>
                              </div>
                              <div className="w-0.5 h-1.5 bg-gray-900 rounded-r-sm"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">M</span>
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-gray-900 leading-tight">Maria</h3>
                              <p className="text-[9px] text-gray-500 leading-tight">Swiping</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                            <span className="text-[10px] font-semibold text-gray-700">8</span>
                          </div>
                        </div>

                        {/* Recipe Card */}
                        <div className="flex-1 px-4 py-3 relative overflow-hidden bg-gray-50">
                          {/* Background Cards */}
                          <div className="absolute left-4 top-5 right-4 h-[260px] bg-gray-200 rounded-2xl transform -rotate-1 opacity-25"></div>
                          <div className="absolute left-4 top-3 right-4 h-[260px] bg-gray-300 rounded-2xl transform rotate-1 opacity-35"></div>
                          
                          {/* Active Card */}
                          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-500/40 h-full">
                            {/* Match Overlay */}
                            <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center z-10">
                              <div className="bg-white rounded-full p-3 shadow-xl animate-pulse">
                                <Heart className="w-8 h-8 text-green-500 fill-green-500" />
                              </div>
                            </div>
                            
                            {/* Recipe Image - Gradient Placeholder */}
                            <div className="h-32 bg-gradient-to-br from-red-200 via-red-300 to-orange-200 relative">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <UtensilsCrossed className="w-10 h-10 text-red-400 opacity-60" />
                              </div>
                            </div>
                            
                            {/* Recipe Info */}
                            <div className="p-3">
                              <h4 className="text-sm font-bold text-gray-900 mb-1">Pasta Carbonara</h4>
                              <p className="text-[10px] text-gray-600 mb-2 leading-tight">Classic Italian pasta</p>
                              
                              <div className="flex items-center justify-between text-[10px] text-gray-600 mb-2">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>25 min</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>4</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                  <span>4.8</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-1.5">
                                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-[9px] font-semibold">Italian</span>
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-[9px] font-semibold">Quick</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="px-4 pb-4 bg-white">
                          <div className="flex items-center justify-center gap-3">
                            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                              <span className="text-gray-500 text-lg font-light">×</span>
                            </button>
                            <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                              <Heart className="w-6 h-6 text-white fill-white" />
                            </button>
                            <button className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
                              <Star className="w-5 h-5 text-blue-500 fill-blue-500" />
                            </button>
                          </div>
                          <div className="text-center mt-2">
                            <p className="text-[10px] font-bold text-green-600">✨ MATCH! ✨</p>
                            <p className="text-[9px] text-gray-500">You both liked this</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">2.2M+</div>
              <div className="text-xs sm:text-sm text-gray-600">Haushalte in Österreich</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-1 sm:mb-2">100+</div>
              <div className="text-xs sm:text-sm text-gray-600">Rezepte verfügbar</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-600">Nutzerbewertung</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-1 sm:mb-2">50%</div>
              <div className="text-xs sm:text-sm text-gray-600">Zeitersparnis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Rezepte für jeden Geschmack</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Über 100 Rezepte in verschiedenen Kategorien</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {recipeCategories.map((category, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer transform hover:scale-105">
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{category.icon}</div>
                <div className="font-bold text-sm sm:text-base text-gray-900 mb-1">{category.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">{category.count} Rezepte</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Wireframe-Inspired Design */}
      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Warum WeCook?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Die erste App, die speziell für gemeinsames Kochen entwickelt wurde
            </p>
          </div>

          {/* Wireframe-Inspired App Screenshot Section */}
          <div className="mb-8 sm:mb-16 bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Recipe Match Screen */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 md:p-8">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">A</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Alex</h3>
                        <p className="text-xs text-gray-500">Swiping recipes</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-sm font-medium">12</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                      <div className="bg-white rounded-full p-4 shadow-xl">
                        <Heart className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                    <div className="h-48 bg-white/50 rounded-xl mb-4"></div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Pasta Carbonara</h4>
                    <p className="text-sm text-gray-600 mb-3">Classic Italian pasta</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-orange-200 rounded-full text-xs">Italian</span>
                      <span className="px-2 py-1 bg-red-200 rounded-full text-xs">Quick</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-6">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Right: Cooking Instructions Screen */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 sm:p-6 md:p-8">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Pasta Carbonara</h3>
                      <p className="text-xs text-gray-500">Cooking with Maria</p>
                    </div>
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Step 3 of 6</span>
                      <span className="text-gray-500">12 min remaining</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">3</span>
                      </div>
                      <h4 className="text-lg font-semibold">Cook the Pasta</h4>
                    </div>
                    <p className="text-white/90 text-sm mb-4">Boil spaghetti in salted water until al dente...</p>
                    <div className="bg-white/20 rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2" />
                        <span className="text-xl font-bold">08:32</span>
                      </div>
                    </div>
                    <button className="w-full bg-white text-orange-600 font-semibold py-2 rounded-xl">
                      Mark as Complete
                    </button>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Maria is on Step 2</p>
                        <p className="text-xs text-gray-600">Preparing the egg mixture</p>
                      </div>
                      <div className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Swipe & Match",
                desc: "Findet gemeinsam Rezepte, die ihr beide liebt. Swipe-Mechanik wie bei Dating-Apps, aber für Rezepte.",
                color: "from-red-500 to-pink-500",
                bgColor: "bg-red-50"
              },
              {
                icon: Brain,
                title: "KI-Aufgabenverteilung",
                desc: "Unsere KI teilt Rezepte in perfekt getaktete Aufgaben auf. Kein Chaos, keine Wartezeiten.",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-50"
              },
              {
                icon: UtensilsCrossed,
                title: "Synchronisiert kochen",
                desc: "Jeder weiß genau, was zu tun ist. Perfekte Koordination für ein reibungsloses Kocherlebnis.",
                color: "from-amber-500 to-orange-500",
                bgColor: "bg-amber-50"
              },
              {
                icon: ShoppingCart,
                title: "Einkaufslisten-Export",
                desc: "Exportiere Zutatenlisten direkt zu Billa, Spar oder deinem Lieblings-Supermarkt.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50"
              },
              {
                icon: Gamepad2,
                title: "Spiele & Unterhaltung",
                desc: "Spiele während der Wartezeiten. 36 Fragen, Quiz und Partyspiele für mehr Spaß.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50"
              },
              {
                icon: Sparkles,
                title: "Individuelle Anpassung",
                desc: "Rezepte werden automatisch an eure Gruppengröße und Ernährungsvorlieben angepasst.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50"
              }
            ].map((feature, i) => (
              <div key={i} className={`${feature.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-shadow`}>
                <div className={`bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People Cooking Together - Featured Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Large Photo - People Prominent */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src={stockPhotos[1]} 
                alt="Family cooking together"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Für die ganze Familie</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                WeCook macht gemeinsames Kochen zum Erlebnis für alle. Egal ob Paare, Familien oder Freunde - 
                unsere KI sorgt dafür, dass jeder die perfekte Aufgabe bekommt.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Perfekte Aufgabenverteilung</h3>
                    <p className="text-gray-600">Jeder bekommt Aufgaben, die zu seinen Fähigkeiten passen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Synchronisierte Schritte</h3>
                    <p className="text-gray-600">Keine Wartezeiten - alles ist perfekt getaktet</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Spaß für alle</h3>
                    <p className="text-gray-600">Spiele während der Wartezeiten für mehr Unterhaltung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">So funktioniert's</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Vier einfache Schritte zum perfekten Kocherlebnis</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { 
                step: 1, 
                icon: Heart, 
                title: "Swipe & Match", 
                desc: "Durchstöbert Rezepte zusammen und swiped rechts bei euren Favoriten. Match = gemeinsames Kochen!",
                color: "from-red-500 to-pink-500"
              },
              { 
                step: 2, 
                icon: Brain, 
                title: "KI plant Aufgaben", 
                desc: "Unsere KI teilt das Rezept in perfekt getaktete Aufgaben für jede Person auf.",
                color: "from-orange-500 to-red-500"
              },
              { 
                step: 3, 
                icon: ChefHat, 
                title: "Gemeinsam kochen", 
                desc: "Folgt euren personalisierten Aufgaben. Spielt Spiele während der Wartezeiten.",
                color: "from-amber-500 to-orange-500"
              },
              { 
                step: 4, 
                icon: ShoppingCart, 
                title: "Einkaufen & Genießen", 
                desc: "Exportiert Einkaufslisten und genießt euer gemeinsames Meisterwerk!",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-orange-200 transition-all h-full shadow-sm hover:shadow-lg">
                  <div className={`absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-gradient-to-r ${item.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl text-white shadow-xl z-10`}>
                    {item.step}
                  </div>
                  <div className={`bg-gradient-to-br ${item.color} bg-opacity-10 rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mt-2 sm:mt-4`}>
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-700" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Another People Section - Roommates */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Perfekt für Mitbewohner</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Keine Diskussionen mehr über "Was sollen wir kochen?". WeCook hilft euch, 
                schnell gemeinsame Favoriten zu finden und effizient zusammen zu kochen.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Schnelle Rezeptauswahl</h3>
                    <p className="text-gray-600">Swipe-Mechanik macht die Entscheidung einfach</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Geteilte Einkaufslisten</h3>
                    <p className="text-gray-600">Export direkt zu deinem Lieblings-Supermarkt</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Geld sparen</h3>
                    <p className="text-gray-600">Gemeinsam kochen ist günstiger als Essen gehen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Photo - People Prominent */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2">
              <img 
                src={stockPhotos[2]} 
                alt="Roommates eating together"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Was unsere Nutzer sagen</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Echte Erfahrungen von echten Menschen</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Einfache Preise</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Starte noch heute mit dem gemeinsamen Kochen</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Free</h3>
              <div className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">€0<span className="text-base sm:text-lg text-gray-500">/Monat</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Begrenzte Rezepte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Basis Features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Werbung</span>
                </li>
              </ul>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all">
                Kostenlos starten
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 border-2 border-orange-400 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative shadow-xl sm:transform sm:scale-105">
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-white text-orange-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                BELIEBT
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Premium</h3>
              <div className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-white">€9.99<span className="text-base sm:text-lg text-orange-100">/Monat</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Unbegrenzte Rezepte</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Erweiterte KI-Features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Alle Anpassungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Alle Spiele</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-white">Keine Werbung</span>
                </li>
              </ul>
              <button className="w-full bg-white text-orange-600 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Kostenlose Testversion
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Family & Friends</h3>
              <div className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">€19.99<span className="text-base sm:text-lg text-gray-500">/Monat</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Alle Premium-Features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Für mehrere Personen</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Teambuilding-Features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Prioritärer Support</span>
                </li>
              </ul>
              <button className="w-full border-2 border-orange-400 text-orange-600 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Waitlist */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500">
        <div className="container mx-auto max-w-3xl text-center">
          <Award className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Sei einer der Ersten!</h2>
          <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8">
            Melde dich für die Waitlist an und erhalte exklusiven Zugang bei Launch
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-0 focus:ring-2 focus:ring-white text-gray-900 text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Anmelden
            </button>
          </form>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-orange-100">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Sicher & geschützt</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Kein Spam</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Alles, was du über WeCook wissen musst</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg pr-4 text-gray-900">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-orange-600 flex-shrink-0" /> : <Plus className="w-5 h-5 text-orange-600 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">Bereit, gemeinsam zu kochen?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">Starte noch heute und verwandle gemeinsames Kochen in ein unvergessliches Erlebnis</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 shadow-lg">
              <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
              Für iOS herunterladen
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 shadow-lg">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              Für Android herunterladen
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-1.5 sm:p-2 rounded-xl">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                WeCook
              </span>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm text-center">
              © 2025 WeCook. Alle Rechte vorbehalten.
              <br />
              <span className="text-orange-400 font-medium">Einfach. Gemeinsam. Kochen.</span>
            </div>
            <button className="text-orange-400 hover:text-orange-300 transition-colors font-semibold text-sm sm:text-base">
              Kontakt
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
