import Image from 'next/image'

const logos = [
  { src: "/assets/images/png/logo1.png", alt: "Partner 1", width: 111, height: 37 },
  { src: "/assets/images/png/logo2.png", alt: "Partner 2", width: 111, height: 37 },
  { src: "/assets/images/png/logo3.png", alt: "Partner 3", width: 85, height: 69 },
  { src: "/assets/images/png/logo4.png", alt: "Partner 4", width: 85, height: 69 },
  { src: "/assets/images/png/logo5.png", alt: "Partner 5", width: 64, height: 62 },
  { src: "/assets/images/png/logo6.png", alt: "Deloitte", width: 124, height: 36 },
  { src: "/assets/images/png/logo7.png", alt: "Infosys", width: 142, height: 77 },
  { src: "/assets/images/png/logo8.png", alt: "Partner 8", width: 152, height: 40 },
  { src: "/assets/images/png/logo9.png", alt: "Partner 9", width: 123, height: 55 },
  { src: "/assets/images/png/logo10.png", alt: "Partner 10", width: 114, height: 66 },
  { src: "/assets/images/png/logo11.png", alt: "Partner 11", width: 121, height: 40 },
  { src: "/assets/images/png/logo12.png", alt: "Partner 12", width: 85, height: 78 },
]

const Trusted = () => {
  return (
    <section className="w-full py-12 md:py-16  overflow-hidden max-w-[1320px] px-5 mx-auto">
      <div className="max-w-[1320px] px-5 mx-auto">
        <p className="text-light-grey text-xl font-semibold italic text-center mb-8">
          Trusted Our Service
        </p>

        {/* Marquee Container */}
        <div className="relative flex">
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center min-w-[180px] h-[80px] opacity-90"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          
          </div>
          <div className="flex animate-marquee">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center min-w-[180px] h-[80px] opacity-90"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Trusted