import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, TrendingUp } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

// Premium Slider: full-bleed feel but contained, no arrows (keyboard + dots for navigation), subtle parallax + zoom on active
const PremiumSlider = ({ images = [], alt = 'Slider image', autoplay = true, autoplayDelay = 4500 }) => {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const sliderRef = React.useRef(null);

  const next = React.useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  React.useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    timeoutRef.current = setInterval(() => next(), autoplayDelay);
    return () => clearInterval(timeoutRef.current);
  }, [autoplay, autoplayDelay, images.length, next]);

  const pause = () => clearInterval(timeoutRef.current);
  const play = () => {
    if (!autoplay) return;
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => next(), autoplayDelay);
  };

  // Swipe support
  React.useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let startX = 0;
    let endX = 0;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchMove = (e) => { endX = e.touches[0].clientX; };
    const onTouchEnd = () => {
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) setCurrent((c) => (c + 1) % images.length);
        else setCurrent((c) => (c - 1 + images.length) % images.length);
      }
    };
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove);
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [images.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={sliderRef}
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
      onMouseEnter={pause}
      onMouseLeave={play}
    >
      {/* Slides container: use transform to center each slide; maintain aspect and prevent overflow */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96">
        {images.map((src, i) => {
          const offset = ((i - current + images.length) % images.length);
          // position: only center slide fully visible, others hidden but kept for a smooth transition
          return (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              aria-hidden={i !== current}
            >
              {/* image wrapper keeps image constrained (no overflow) and gives a premium overlay */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 scale-100 hover:scale-105"
                  loading="lazy"
                />
                {/* soft gradient overlay for premium look */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(6,21,68,0.12) 0%, rgba(124,58,237,0.06) 60%, rgba(0,0,0,0.18) 100%)' }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Centered caption / badge (optional) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 bg-yellow-500 text-gray-900 p-5 rounded-xl shadow-lg md:hidden lg:block">
        <div className="text-3xl font-bold">500+</div>
        <div className="text-sm">Happy Clients</div>
      </div>

      {/* Dots (minimal, premium) */}
      {images.length > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'scale-110 bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const HomePage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);

  const features = [
    { icon: Users, title: "Expert Team", desc: "Experienced professionals delivering quality solutions" },
    { icon: Award, title: "Award Winning", desc: "Recognized for excellence in technology solutions" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical support and maintenance" },
    { icon: TrendingUp, title: "Growth Focused", desc: "Solutions designed to scale with your business" }
  ];

  const benefits = [
    "Cutting-edge technology solutions",
    "Proven track record of success",
    "Customized approach for each client",
    "Competitive pricing and value",
    "Fast delivery and implementation",
    "Ongoing support and maintenance"
  ];

  // 5 image premium slider (replace with your own machine photos)
  const machineImages = [
    'https://s.alicdn.com/@sc04/kf/H36591391f2b24502b6eb844309b8a187c.jpg?avif=close&webp=close',
    'https://s.alicdn.com/@sc04/kf/H5169e63e4acc447698d366cb782c7c17S.png?avif=close&webp=close',
    'https://media.licdn.com/dms/image/v2/D4D22AQEagxRLyijtKA/feedshare-shrink_800/B4DZ7Bt6bEKcAg-/0/1781366499257?e=1782950400&v=beta&t=tkP6aH8m35l40kTYGKhSU37T8DtEvN36e5RrTrzNTGo',
    'https://media.licdn.com/dms/image/v2/D4E22AQEKBK4NlFqyZQ/feedshare-shrink_1280/B4EZ5kj9l6HUAM-/0/1779803610132?e=1782950400&v=beta&t=1vqLfl1sODn2d2cFfCFSzZla7wIH_4FT6ii5PHiOhlw'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl  font-bold leading-tight mb-6">
                Acrylic Sheet Solutions Trusted  
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600"> Expert Service Engineering, Reliable Technical Support, and Smart Strategy Planning — All Under One Roof.”</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                “From On-Site Service Engineering to Advanced Technical Support and Strategic Planning — We Deliver Complete Solutions.”
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center group text-sm sm:text-base"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200 text-center text-sm sm:text-base"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Premium Slider inserted here (no arrows) */}
            <div className="relative">
              <div className="rounded-2xl p-2">
                <PremiumSlider images={machineImages} alt="Machine" autoplay={true} autoplayDelay={4500} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              India’s Trusted Service Engineering & Technical Support Partner
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 7+ years of field experience, we provide professional service engineering, on-site technical support, and strategic planning solutions to keep your production running smoothly and efficiently.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Businesses Trust Us for Acrylic Sheet Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring together innovation, expertise, and dedication to deliver exceptional results for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses who trust ShubhSurface for their technology needs. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 inline-flex items-center justify-center text-sm sm:text-base"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {/* <Link
              to="/testimonials"
              className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-200 text-center text-sm sm:text-base"
            >
              See Success Stories
            </Link> */}
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;
