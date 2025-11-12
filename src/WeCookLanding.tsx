import { useState } from 'react';
import { 
  Heart, Users, Sparkles, ShoppingCart, Gamepad2, ChefHat, Apple, Smartphone, 
  Plus, Minus, 
  CheckCircle, ArrowRight, Brain, UtensilsCrossed, Flame, Play, Star, Quote, 
  Mail, Shield, Lock, Award, TrendingUp, Clock, Zap
} from 'lucide-react';

export default function WeCookLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

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
      a: "Während der Wartezeiten könnt ihr Bonding-Spiele wie '36 Fragen zum Verlieben', Quiz, kooperative Puzzles und Partyspiele ähnlich wie Jackbox genießen."
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
    // Email submission logic here
    alert(`Danke! Wir informieren dich, sobald WeCook verfügbar ist.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2.5 rounded-xl shadow-md">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
                <Flame className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-orange-800 font-medium">Creative Pre-Incubator 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Gemeinsam</span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  kochen.
                </span>
                <br />
                <span className="text-gray-900">Einfach.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Transformiere gemeinsames Kochen in ein reibungsloses, unterhaltsames Erlebnis. 
                <span className="text-orange-600 font-semibold"> KI-gestützte Aufgabenverteilung</span> und 
                <span className="text-orange-600 font-semibold"> synchronisierte Workflows</span> für perfekte Koordination.
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-2">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{benefit.title}</div>
                      <div className="text-xs text-gray-600">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2 shadow-lg">
                  Kostenlos starten
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Demo ansehen
                </button>
              </div>

              {/* App Store Badges */}
              <div className="flex gap-4 mt-8">
                <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors">
                  <Apple className="w-6 h-6 text-gray-700" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Download on the</div>
                    <div className="text-sm font-semibold text-gray-900">App Store</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors">
                  <Smartphone className="w-6 h-6 text-gray-700" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Get it on</div>
                    <div className="text-sm font-semibold text-gray-900">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Visual Mockup */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 shadow-2xl border border-orange-100">
                <div className="bg-white rounded-2xl shadow-xl p-4">
                  <div className="bg-gray-900 rounded-xl p-2">
                    <div className="bg-gradient-to-br from-orange-400 via-red-500 to-orange-500 rounded-lg aspect-[9/19] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/50"></div>
                      <div className="relative z-10 text-center p-8">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                          <ChefHat className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-white font-bold text-xl mb-2">WeCook</div>
                        <div className="text-white/80 text-sm">Gemeinsam kochen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg border border-orange-100">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg border border-orange-100">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">2.2M+</div>
              <div className="text-gray-600">Haushalte in Österreich</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Rezepte verfügbar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-600 mb-2">4.9★</div>
              <div className="text-gray-600">Nutzerbewertung</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-gray-600">Zeitersparnis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Rezepte für jeden Geschmack</h2>
            <p className="text-xl text-gray-600">Über 100 Rezepte in verschiedenen Kategorien</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recipeCategories.map((category, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 text-center hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{category.name}</div>
                <div className="text-sm text-gray-600">{category.count} Rezepte</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Warum WeCook?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Die erste App, die speziell für gemeinsames Kochen entwickelt wurde
            </p>
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
                title: "Bonding-Spiele",
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
              <div key={i} className={`${feature.bgColor} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow`}>
                <div className={`bg-gradient-to-br ${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Vorher vs. Nachher</h2>
            <p className="text-xl text-gray-600">So verändert WeCook euer gemeinsames Kochen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">❌</span>
                <h3 className="text-2xl font-bold text-red-700">Ohne WeCook</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Chaos in der Küche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Unklare Aufgabenverteilung</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Lange Diskussionen über Rezepte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Wartezeiten und Langeweile</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Stress statt Spaß</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-700">Mit WeCook</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Perfekte Koordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>KI-gestützte Aufgabenverteilung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Schnelle Rezeptauswahl durch Swiping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Spiele während der Wartezeiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Mehr Spaß, weniger Stress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">So funktioniert's</h2>
            <p className="text-xl text-gray-600">Vier einfache Schritte zum perfekten Kocherlebnis</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-200 transition-all h-full shadow-sm hover:shadow-lg">
                  <div className={`absolute -top-6 -left-6 bg-gradient-to-r ${item.color} w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-xl z-10`}>
                    {item.step}
                  </div>
                  <div className={`bg-gradient-to-br ${item.color} bg-opacity-10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 mt-4`}>
                    <item.icon className="w-10 h-10 text-gray-700" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Was unsere Nutzer sagen</h2>
            <p className="text-xl text-gray-600">Echte Erfahrungen von echten Menschen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
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

      {/* Partner Integration */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Integration mit deinen Lieblings-Supermärkten</h3>
            <p className="text-gray-600">Exportiere Einkaufslisten direkt zu:</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-xl px-8 py-4 border-2 border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-green-600">BILLA</div>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 border-2 border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-red-600">SPAR</div>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 border-2 border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">HOFER</div>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 border-2 border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">PENNY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Einfache Preise</h2>
            <p className="text-xl text-gray-600">Starte noch heute mit dem gemeinsamen Kochen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Free</h3>
              <div className="text-5xl font-bold mb-6 text-gray-900">€0<span className="text-lg text-gray-500">/Monat</span></div>
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

            <div className="bg-gradient-to-br from-orange-500 to-red-500 border-2 border-orange-400 rounded-2xl p-8 relative shadow-xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                BELIEBT
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
              <div className="text-5xl font-bold mb-6 text-white">€9.99<span className="text-lg text-orange-100">/Monat</span></div>
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

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Family & Friends</h3>
              <div className="text-5xl font-bold mb-6 text-gray-900">€19.99<span className="text-lg text-gray-500">/Monat</span></div>
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
      <section className="py-20 px-6 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500">
        <div className="container mx-auto max-w-3xl text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sei einer der Ersten!</h2>
          <p className="text-xl text-orange-100 mb-8">
            Melde dich für die Waitlist an und erhalte exklusiven Zugang bei Launch
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-2 focus:ring-white text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Anmelden
            </button>
          </form>
          <div className="flex items-center justify-center gap-6 mt-8 text-orange-100">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Sicher & geschützt</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="text-sm">Kein Spam</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Häufig gestellte Fragen</h2>
            <p className="text-xl text-gray-600">Alles, was du über WeCook wissen musst</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4 text-gray-900">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-orange-600 flex-shrink-0" /> : <Plus className="w-5 h-5 text-orange-600 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Bereit, gemeinsam zu kochen?</h2>
          <p className="text-xl text-gray-600 mb-8">Starte noch heute und verwandle gemeinsames Kochen in ein unvergessliches Erlebnis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 shadow-lg">
              <Apple className="w-6 h-6" />
              Für iOS herunterladen
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 shadow-lg">
              <Smartphone className="w-6 h-6" />
              Für Android herunterladen
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-xl">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                WeCook
              </span>
            </div>
            <div className="text-gray-400 text-sm text-center">
              © 2025 WeCook. Alle Rechte vorbehalten.
              <br />
              <span className="text-orange-400 font-medium">Einfach. Gemeinsam. Kochen.</span>
            </div>
            <button className="text-orange-400 hover:text-orange-300 transition-colors font-semibold">
              Kontakt
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
