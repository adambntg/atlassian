import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Star, Zap, Palette, Shirt, Users, ArrowRight, Heart, Search } from 'lucide-react';

export default function CustomClothingHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { id: 1, name: "Custom T-Shirt", price: "$29.99", image: "🎨", category: "Shirts" },
    { id: 2, name: "Designer Hoodie", price: "$59.99", image: "👕", category: "Hoodies" },
    { id: 3, name: "Printed Jacket", price: "$89.99", image: "🧥", category: "Jackets" },
    { id: 4, name: "Custom Cap", price: "$24.99", image: "🧢", category: "Accessories" }
  ];

  const testimonials = [
    { name: "Sarah M.", text: "Amazing quality and design!", rating: 5 },
    { name: "Mike R.", text: "Perfect fit and fast delivery.", rating: 5 },
    { name: "Lisa K.", text: "Love the customization options!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-red-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r text-gray-600 bg-clip-text text-transparent">
              Atlassian Wirussian
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Home</a>
              <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Design</a>
              <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">Gallery</a>
              <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors">About</a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all">
                <ShoppingBag className="inline w-4 h-4 mr-2" />
                Cart
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg">
              <div className="flex flex-col space-y-4 p-6">
                <a href="#" className="text-gray-800 hover:text-purple-600">Home</a>
                <a href="#" className="text-gray-800 hover:text-purple-600">Design</a>
                <a href="#" className="text-gray-800 hover:text-purple-600">Gallery</a>
                <a href="#" className="text-gray-800 hover:text-purple-600">About</a>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">
                  Cart
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Design Your
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Dream Clothing
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Create unique, personalized apparel that tells your story. From concept to creation, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex items-center">
              <Palette className="mr-2" />
              Start Designing
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center">
              <Search className="mr-2" />
              Browse Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
              <p className="opacity-90">Get your custom designs printed and shipped within 24-48 hours.</p>
            </div>
            <div className="text-center text-white p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Shirt className="w-16 h-16 mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
              <p className="opacity-90">100% premium cotton and eco-friendly inks for lasting comfort.</p>
            </div>
            <div className="text-center text-white p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-300" />
              <h3 className="text-2xl font-bold mb-2">Expert Support</h3>
              <p className="opacity-90">Our design team helps bring your creative vision to reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who've brought their creative visions to life with Atlassian Wirussian.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex items-center mx-auto">
            Get Started Now
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Atlassian Wirussian
              </div>
              <p className="text-gray-400">Creating custom clothing that expresses your unique style.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Design Tool</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">Follow us for design inspiration and updates!</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  📘
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  📷
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  🐦
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Atlassian Wirussian. All rights reserved. Designed with ❤️ for creative minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}