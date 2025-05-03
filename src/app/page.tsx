import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <Image
          src="/bmw4.webp"
          alt="BMW Luxury Car"
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="container mx-auto">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              The Ultimate <br />Driving Machine
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Experience the perfect blend of luxury, performance, and innovation that defines BMW.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/models" className="bmw-btn">
                Explore Models
              </Link>
              <Link href="/gallery" className="bmw-btn bmw-btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured BMW Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="card">
              <div className="relative h-64">
                <Image
                  src="/bmw2.jpg"
                  alt="BMW 3 Series"
                  fill
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">BMW 3 Series</h3>
                <p className="mb-4">
                  The iconic sports sedan that combines dynamic performance with everyday usability.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Starting from $41,450</span>
                  <Link href="/models" className="bmw-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Model 2 */}
            <div className="card">
              <div className="relative h-64">
                <Image
                  src="/bmw3.jpg"
                  alt="BMW X5"
                  fill
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">BMW X5</h3>
                <p className="mb-4">
                  The versatile Sports Activity Vehicle that combines luxury, capability, and innovation.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Starting from $61,600</span>
                  <Link href="/models" className="bmw-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Model 3 */}
            <div className="card">
              <div className="relative h-64">
                <Image
                  src="/bmw5.webp"
                  alt="BMW i4"
                  fill
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">BMW i4</h3>
                <p className="mb-4">
                  The all-electric Gran Coupé that delivers exhilarating performance with zero emissions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">Starting from $52,200</span>
                  <Link href="/models" className="bmw-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMW Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-3xl md:text-4xl font-bold mb-6">
                The BMW Experience
              </h2>
              <p className="mb-4">
                For over a century, BMW has been at the forefront of automotive innovation, 
                creating vehicles that deliver the ultimate driving experience.
              </p>
              <p className="mb-6">
                From the iconic kidney grille to the precision engineering under the hood, 
                every BMW is crafted with attention to detail and a passion for excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bmw-btn">
                  Discover Our Heritage
                </Link>
                <Link href="/gallery" className="bmw-btn bmw-btn-secondary">
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/bmw4.webp"
                alt="BMW Experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience BMW?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our collection of luxury vehicles and find the perfect BMW for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/models" 
              className="bmw-btn bg-white text-primary hover:bg-bmw-light-gray hover:text-primary-hover"
            >
              Browse Models
            </Link>
            <a 
              href="https://www.bmw.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bmw-btn bg-transparent border-2 border-white hover:bg-white hover:text-primary"
            >
              Visit Official BMW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
