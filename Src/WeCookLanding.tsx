import React, { useState } from 'react';
import { Heart, Users, Sparkles, ShoppingCart, Gamepad2, ChefHat, Apple, Smartphone, Plus, Minus } from 'lucide-react';

export default function WeCookLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What platforms is WeCook available on?",
      a: "WeCook is available for both iOS and Android devices. Download it from the App Store or Google Play."
    },
    {
      q: "How does the recipe swiping work?",
      a: "Similar to dating apps, you and your cooking partner swipe through recipes together. When you both swipe right, it's a match! The app then customizes the recipe for your group size."
    },
    {
      q: "Can I modify recipes for dietary preferences?",
      a: "Absolutely! WeCook adapts recipes to fit vegan, keto, gluten-free, and other dietary preferences whenever possible."
    },
    {
      q: "What kind of games can we play while cooking?",
      a: "During waiting times, enjoy bonding games like '36 Questions to Fall in Love', trivia, collaborative puzzles, and party games similar to Jackbox."
    },
    {
      q: "How does the shopping list feature work?",
      a: "Once you've selected a recipe, WeCook generates a shopping list you can export directly to online grocery stores like Billa and Spar, or save for in-store shopping."
    },
    {
      q: "How many people can cook together?",
      a: "WeCook is optimized for 2-4 people cooking together, perfect for dates and couples, but can accommodate small groups."
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-teal-600 p-2 rounded-xl">
              <ChefHat className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              WeCook
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="hover:text-blue-400 transition-colors">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-blue-400 transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors">Pricing</button>
            <button className="bg-gradient-to-r from-blue-500 to-teal-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span className="text-sm">Turn cooking into a shared experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cook Together,
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              Create Memories
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform ordinary meals into extraordinary moments with AI-guided tasks, interactive games, and recipes designed for cooking together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all flex items-center gap-2">
              Get Started Now
              <Heart className="w-5 h-5" />
            </button>
            <button className="border border-teal-400/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-500/10 transition-all">
              Watch Demo
            </button>
          </div>

          {/* App Preview Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-teal-500/30 blur-3xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-teal-600/20 rounded-2xl p-6 border border-blue-500/30">
                  <Heart className="w-12 h-12 mb-4 text-blue-400" />
                  <h3 className="font-bold text-lg mb-2">Swipe Together</h3>
                  <p className="text-gray-400 text-sm">Find recipes you both love</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-600/20 rounded-2xl p-6 border border-teal-500/30">
                  <Users className="w-12 h-12 mb-4 text-teal-400" />
                  <h3 className="font-bold text-lg mb-2">Cook in Sync</h3>
                  <p className="text-gray-400 text-sm">AI assigns tasks perfectly</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-6 border border-cyan-500/30">
                  <Gamepad2 className="w-12 h-12 mb-4 text-cyan-400" />
                  <h3 className="font-bold text-lg mb-2">Play & Bond</h3>
                  <p className="text-gray-400 text-sm">Games during wait times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Four simple steps to culinary romance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, icon: Heart, title: "Swipe & Match", desc: "Browse recipes together and swipe right on your favorites. When you both love it, it's a match!" },
              { step: 2, icon: Users, title: "AI Plans Tasks", desc: "Our AI divides the recipe into perfectly timed tasks for each person, ensuring smooth coordination." },
              { step: 3, icon: Gamepad2, title: "Cook & Play", desc: "Follow your personalized tasks. Play bonding games together during cooking downtime." },
              { step: 4, icon: ShoppingCart, title: "Shop Seamlessly", desc: "Export ingredients to Billa, Spar, or your favorite grocery store with one tap." }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-2xl p-6 hover:border-teal-500/50 transition-all">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <item.icon className="w-12 h-12 mb-4 text-teal-400" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-gray-400 text-lg">Features that make cooking together effortless and fun</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Heart, title: "Recipe Matching", desc: "Swipe together on hundreds of recipes designed for couples. Only cook what you both love." },
              { icon: Users, title: "Smart Task Assignment", desc: "AI automatically divides recipes into synchronized tasks, so you're never waiting or overwhelmed." },
              { icon: Sparkles, title: "Dietary Customization", desc: "Adapt any recipe to vegan, keto, gluten-free, or other preferences with a single tap." },
              { icon: Gamepad2, title: "Bonding Games", desc: "Play 36 Questions, trivia, and party games during downtime to deepen your connection." },
              { icon: ShoppingCart, title: "Grocery Integration", desc: "Export shopping lists directly to Billa, Spar, and other stores. No manual entry needed." },
              { icon: Smartphone, title: "iOS & Android", desc: "Available on all devices. Cook from your phone with a beautiful, intuitive interface." }
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all">
                <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="font-bold text-2xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400 text-lg">Start cooking together today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-6">€0<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>5 recipe matches per week</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Basic task coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gamepad2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>2 bonding games</span>
                </li>
              </ul>
              <button className="w-full border border-teal-400/50 py-3 rounded-full font-semibold hover:bg-teal-500/10 transition-all">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-teal-600/20 border-2 border-blue-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-teal-600 px-4 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-6">€9.99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Unlimited recipe matches</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Advanced AI task planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>All dietary customizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Gamepad2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>All bonding games</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>Grocery store integration</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-500 to-teal-600 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about WeCook</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-800/50 border border-blue-500/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-teal-500/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-blue-400 flex-shrink-0" /> : <Plus className="w-5 h-5 text-blue-400 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-teal-600/10 border-y border-blue-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Cook Together?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of couples making memories in the kitchen</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all flex items-center justify-center gap-2">
              <Apple className="w-6 h-6" />
              Download for iOS
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all flex items-center justify-center gap-2">
              <Smartphone className="w-6 h-6" />
              Download for Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-blue-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 p-2 rounded-xl">
                <ChefHat className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                WeCook
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 WeCook. All rights reserved.
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

