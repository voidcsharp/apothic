'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// Add this import at the top of your file
import { Montserrat } from 'next/font/google'
interface Tattoo {
  id: number;
  src: string;
}
// Initialize the font
const montserrat = Montserrat({ subsets: ['latin'] })
export default function ApothicTattoo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedTattoo, setSelectedTattoo] = useState<Tattoo | null>(null);

  const sliderRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const artists = [
    { name: "Nathan Hill", title: "" },
    { name: "Monty Trent", title: "" },
    { name: "Joey Ellison", title: "" },
    { name: "Joseph McBride 'Kid'", title: "" }
  ]
  const tattoos = [
    { id: 1, src: '/tattoos/1.png' },
    { id: 2, src: '/tattoos/2.png' },
    { id: 3, src: '/tattoos/3.png' },
    { id: 4, src: '/tattoos/4.png' },
    { id: 5, src: '/tattoos/5.png' },
    { id: 6, src: '/tattoos/6.png' },
    { id: 7, src: '/tattoos/7.png' },
    { id: 8, src: '/tattoos/8.png' },
    { id: 9, src: '/tattoos/9.png' },
    { id: 10, src: '/tattoos/10.png' },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-zinc-900 to-black text-zinc-100 ${montserrat.className}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-center md:justify-center items-center">
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium">About</a>
            <a href="#gallery" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium">Gallery</a>
            <a href="#artists" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium">Artists</a>
            <a href="#contact" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium">Contact</a>
          </div>
          <Button variant="ghost" className="md:hidden absolute right-4 text-zinc-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 py-4 absolute w-full">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#about" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#gallery" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#artists" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Artists</a>
              <a href="#contact" className="text-zinc-300 hover:text-gold-400 transition-colors text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/apthoiclogo.png"
            alt="Mystical tattoo art"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-old-london mb-4 text-gold-400 text-shadow-custom tracking-wide">Apothic Tattoo</h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-zinc-300 font-light">Unveiling the Mystique of Ink</p>
          <Button className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-zinc-100 px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">Book Your Experience</Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold-400" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 px-4 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-old-london mb-12 text-center text-gold-400">Apothic Tattoo</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg md:text-xl mb-6 leading-relaxed font-light text-zinc-300">
                At Apothic Tattoo, we blend artistry with mystique. Our skilled artisans are dedicated to unveiling the hidden stories within your skin, transforming your ideas into mesmerizing, permanent art that resonates with your inner self.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-light text-zinc-300">
                We offer versatility in all styles and genres of tattooing, ensuring 100% sterility and using only the most advanced equipment. With thousands of hand-painted designs to choose from or the option to bring your own, we deliver tattooing the way it was meant to be.
              </p>
            </div>
            <div className="relative h-80 md:h-full mt-8 md:mt-0">
              <img
                src="/20.png"
                alt="Mystical tattoo design"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-old-london mb-12 text-center text-gold-400">Our Enigmatic Collection</h2>
          <Slider ref={sliderRef} {...settings}>
            {tattoos.map((tattoo) => (
              <div key={tattoo.id} className="px-2">
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setSelectedTattoo(tattoo)}
                >
                  <img
                    src={tattoo.src}
                    alt={`Tattoo ${tattoo.id}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Modal for enlarged tattoo view */}
      {selectedTattoo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedTattoo(null)}>
          <div className="max-w-3xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <img src={selectedTattoo.src} alt={`Enlarged Tattoo ${selectedTattoo.id}`} className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      )}

      {/* Artists Section */}
      <section id="artists" className="py-20 md:py-28 px-4 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-old-london mb-16 text-center text-gold-400">Our Tattoo Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {artists.map((artist, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Artist ${artist.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">{artist.name}</h3>
                <p className="text-gold-400 mb-6 font-light text-sm">{artist.title}</p>
                <Button variant="outline" className="mx-auto hover:bg-gold-400 hover:text-black transition-all duration-300 font-medium border-gold-400 text-gold-400 text-sm">View Portfolio</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-zinc-900 to-black px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-old-london mb-12 text-center text-gold-400">Book Your Session</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" className="bg-zinc-800 border-zinc-700 text-zinc-300 placeholder-zinc-500" />
            <Input type="email" placeholder="Email" className="bg-zinc-800 border-zinc-700 text-zinc-300 placeholder-zinc-500" />
            <Input type="tel" placeholder="Phone Number" className="bg-zinc-800 border-zinc-700 text-zinc-300 placeholder-zinc-500" />
            <Input type="text" placeholder="Preferred Time" className="bg-zinc-800 border-zinc-700 text-zinc-300 placeholder-zinc-500" />
            <Textarea placeholder="Describe your tattoo." className="md:col-span-2 bg-zinc-800 border-zinc-700 text-zinc-300 placeholder-zinc-500" rows={6} />
            <Button className="md:col-span-2 bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-zinc-100 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">Send Your Request</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl sm:text-3xl font-old-london text-gold-400 mb-2">Apothic Tattoo</h3>
              <p className="text-zinc-400 font-light">219 W Main St, Morristown, TN 37814 (423) 307-5787</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4 text-zinc-300">Business Hours</h4>
              <p className="text-zinc-400 font-light">Tuesday-Thursday: 12PM - 8PM</p>
              <p className="text-zinc-400 font-light">Sunday and Monday: Closed</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-zinc-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-8 h-8" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-400 transition-colors">
                <Facebook className="w-8 h-8" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-gold-400 transition-colors">
                <Twitter className="w-8 h-8" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div className="mt-12 text-center text-zinc-500 text-sm font-light">
            ©Test!. Template made by Joseph White. Test!
          </div>
        </div>
      </footer>
    </div>
  )
}
