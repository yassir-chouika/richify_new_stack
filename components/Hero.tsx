import React, {  useRef } from "react";

const Hero = ({
  title = "Ride the Future with BananaTinette",
  description = "The sleekest, most powerful electric scooter designed for urban explorers. With a 50km range and lightning-fast charging, your city is now limitless.",
  specs = {
    range: { value: 50, unit: "km range" },
    charge: { value: 4.2, unit: "hr charge" },
    weight: { value: 25, unit: "kg weight" },
  },
  features = [
    {
      icon: "🔋",
      title: "Long-Lasting Battery",
      description:
        "Our advanced lithium-ion battery provides up to 50km on a single charge, with fast 4.2-hour charging.",
    },
    {
      icon: "⚡",
      title: "Powerful Performance",
      description:
        "750W motor with peak 1200W power delivers smooth acceleration and 45km/h top speed.",
    },
    {
      icon: "🍃",
      title: "Eco-Friendly Design",
      description:
        "100% electric with zero emissions. Made with sustainable materials wherever possible.",
    },
  ],
  onPreOrder = () => console.log("Pre-order clicked"),
  onTestRide = () => console.log("Test ride clicked"),
}) => {
  const scooterRef = useRef(null);
  const heroContentRef = useRef(null);
  const featuresRef = useRef(null);

  const ScooterSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 500"
      className="w-full max-w-2xl mx-auto"
    >
      {/* Scooter Frame */}
      <path
        fill="#2C3E50"
        d="M300,300 Q400,100 500,300 L480,320 Q400,150 320,320 Z"
      />
      <circle cx="300" cy="350" r="50" fill="#34495E" />
      <circle cx="300" cy="350" r="40" fill="#2C3E50" />
      <circle cx="300" cy="350" r="25" fill="#E74C3C" />
      <circle cx="500" cy="350" r="50" fill="#34495E" />
      <circle cx="500" cy="350" r="40" fill="#2C3E50" />
      <circle cx="500" cy="350" r="25" fill="#E74C3C" />

      {/* Banana Details */}
      <path
        fill="#FFDE59"
        d="M400,250 Q420,230 450,240 Q460,250 450,260 Q420,270 400,250 Z"
      />
      <path fill="#E8C252" d="M400,250 Q430,235 450,250 Q435,265 400,250 Z" />

      {/* Handlebars */}
      <path fill="#34495E" d="M350,200 L400,220 L410,210 L360,190 Z" />
      <circle cx="360" cy="190" r="10" fill="#2C3E50" />

      {/* Electric motor details */}
      <circle cx="480" cy="330" r="10" fill="#3498DB" />
      <path fill="#2980B9" d="M480,320 L490,330 L480,340 L470,330 Z" />

      {/* Decorative sparks */}
      <path
        fill="#00A8FF"
        d="M490,320 L495,315 L500,320 L495,325 Z"
        opacity="0.8"
      />
      <path
        fill="#00A8FF"
        d="M480,300 L485,295 L490,300 L485,305 Z"
        opacity="0.6"
      />
    </svg>
  );

  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");

        * {
          font-family: "Poppins", sans-serif;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotateY(0deg);
          }
          50% {
            transform: translateY(-20px) rotateY(5deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scooter-float {
          animation: float 6s ease-in-out infinite;
        }

        .speed-dial-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .banana-peel {
          width: 80px;
          height: 80px;
          background: #ffde59;
          border-radius: 50% 50% 0 50%;
          transform: rotate(-45deg);
          opacity: 0.7;
        }

        .cta-button {
          background: linear-gradient(45deg, #ffde59 0%, #e8c252 100%);
          box-shadow: 0 4px 15px rgba(232, 194, 82, 0.5);
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 20px rgba(232, 194, 82, 0.7);
        }

        .feature-card:hover .feature-icon {
          transform: rotate(15deg) scale(1.1);
        }

        .hero-bg {
          background: linear-gradient(135deg, #ffeeb2 0%, white 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="banana-peel absolute top-20 left-5 animate-bounce hidden sm:block"></div>
        <div
          className="banana-peel absolute bottom-1/4 right-10 animate-bounce hidden md:block"
          style={{ width: "60px", height: "60px" }}
        ></div>

        {/* Speed dial animation */}
        <div className="speed-dial-pulse absolute -bottom-10 -left-10  lg:block w-30 h-30 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <div className="text-center">
            <span className="text-3xl font-bold text-yellow-500">45</span>
            <span className="block text-gray-600 text-sm">km/h</span>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Content */}
            <div
              ref={heroContentRef}
              className="lg:w-1/2 relative z-10 text-center lg:text-left mb-16 lg:mb-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {title.split("BananaTinette").map((part, index) =>
                  index === 0 ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <span key={index}>
                      <span className="text-yellow-500">BananaTinette</span>
                      {part}
                    </span>
                  )
                )}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <button
                  onClick={onPreOrder}
                  className="cta-button px-8 py-4 rounded-full text-white font-semibold text-lg"
                >
                  Pre-order Now ⚡
                </button>
                <button
                  onClick={onTestRide}
                  className="px-8 py-4 rounded-full border-2 border-yellow-500 text-yellow-500 font-semibold text-lg hover:bg-yellow-50 transition"
                >
                  Take a Test Ride
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-8">
                {Object.entries(specs).map(([key, spec]) => (
                  <div key={key} className="text-center">
                    <div className="text-3xl font-bold text-yellow-500">
                      {spec.value}
                    </div>
                    <div className="text-gray-600">{spec.unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scooter Illustration */}
            <div className="lg:w-1/2 relative">
              <div
                ref={scooterRef}
                className="scooter-float w-full max-w-2xl mx-auto"
              >
                <ScooterSVG />
              </div>

              <div className="absolute -bottom-8 right-0 hidden lg:block">
                <div className="flex space-x-4 animate-bounce">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                  <div
                    className="w-8 h-8 bg-yellow-400 rounded-full"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-8 h-8 bg-yellow-400 rounded-full"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why <span className="text-yellow-500">BananaTinette</span> Stands
            Out
          </h2>

          <div
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="feature-icon w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-500 text-2xl transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
