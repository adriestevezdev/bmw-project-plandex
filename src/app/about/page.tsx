import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">
          BMW History & Heritage
        </h1>
        
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96">
              <Image
                src="/bmw4.webp"
                alt="BMW Heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">The BMW Legacy</h2>
              <p className="mb-4">
                Bayerische Motoren Werke AG, commonly known as BMW, was founded in 1916 in Munich, Germany. 
                Originally established as an aircraft engine manufacturer, BMW has evolved into one of the 
                world's leading premium automobile and motorcycle manufacturers.
              </p>
              <p className="mb-4">
                The iconic blue and white BMW logo, often thought to represent a spinning propeller against a blue sky, 
                actually derives from the Bavarian state colors. This emblem has become one of the most recognizable 
                symbols in the automotive industry, representing precision engineering, innovation, and driving pleasure.
              </p>
              <p>
                For over a century, BMW has maintained its commitment to excellence, pushing the boundaries of 
                automotive technology while preserving its rich heritage and distinctive identity.
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="section-title text-2xl md:text-3xl font-bold mb-8 text-center">
            Key Milestones in BMW History
          </h2>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-bmw-blue"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {/* 1916 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1916: The Beginning</h3>
                      <p>
                        Bayerische Flugzeugwerke AG (BFW) was established, which would later become Bayerische Motoren Werke (BMW).
                        The company initially focused on aircraft engine production during World War I.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1923 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 order-1 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-end">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-2">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1923: First Motorcycle</h3>
                      <p>
                        BMW produced its first motorcycle, the R32. This innovative bike featured a boxer engine and 
                        shaft drive, design elements that continue to characterize many BMW motorcycles to this day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1928 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1928: Automotive Era Begins</h3>
                      <p>
                        BMW acquired the Eisenach vehicle factory and began producing automobiles. The first BMW car, 
                        the Dixi, was a licensed version of the Austin Seven, marking BMW's entry into the automotive market.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1936 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 order-1 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-end">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-2">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1936: The Legendary 328</h3>
                      <p>
                        BMW introduced the 328 sports car, which dominated motorsport competitions and established 
                        BMW's reputation for performance and engineering excellence. The 328 won numerous races, 
                        including the Mille Miglia in 1940.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1959 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1959: Near Bankruptcy and Revival</h3>
                      <p>
                        BMW faced financial crisis and was nearly acquired by Mercedes-Benz. The company was saved by 
                        Herbert Quandt, who increased his investment in BMW, allowing the company to remain independent 
                        and develop new models that would secure its future.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1972 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 order-1 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-end">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-2">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1972: BMW Motorsport GmbH</h3>
                      <p>
                        BMW established its motorsport division, which would later become BMW M GmbH. This subsidiary 
                        would develop high-performance versions of BMW models and manage the company's racing activities, 
                        creating some of the most iconic performance cars in automotive history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1986 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1986: BMW 7 Series</h3>
                      <p>
                        The second generation of the BMW 7 Series (E32) was introduced, featuring groundbreaking 
                        technologies such as Electronic Damper Control and integrated telephone and fax systems. 
                        This luxury sedan established BMW as a serious competitor in the premium segment.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 1999 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 order-1 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-end">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-2">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">1999: X5 - The First SAV</h3>
                      <p>
                        BMW introduced the X5, creating a new category of vehicle: the Sports Activity Vehicle (SAV). 
                        The X5 combined the versatility of an SUV with the driving dynamics of a BMW sedan, setting 
                        the standard for luxury SUVs and expanding BMW's product range.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2013 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">2013: BMW i - Electrification</h3>
                      <p>
                        BMW launched its electric sub-brand, BMW i, with the introduction of the i3 electric city car 
                        and the i8 plug-in hybrid sports car. These vehicles showcased BMW's commitment to sustainable 
                        mobility and innovative technologies.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2022 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="md:w-1/2 md:pr-8 order-1 mb-4 md:mb-0">
                    <div className="flex justify-center md:justify-end">
                      <div className="w-8 h-8 bg-bmw-blue rounded-full border-4 border-white shadow z-10"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8 order-2">
                    <div className="bg-white p-6 rounded shadow-md">
                      <h3 className="text-xl font-bold mb-2 text-bmw-blue">2022: The Future of BMW</h3>
                      <p>
                        BMW continues to innovate with the introduction of the all-electric BMW iX and i4, 
                        representing the next generation of electric mobility. The company also unveiled its 
                        Neue Klasse platform, which will underpin future electric vehicles and incorporate 
                        sustainable materials and manufacturing processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* BMW Values Section */}
        <section className="mb-16 bg-bmw-light-gray py-12 px-6 rounded">
          <h2 className="section-title text-2xl md:text-3xl font-bold mb-8 text-center">
            BMW Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-bmw-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p>
                From the earliest racing successes to today's M models, performance has always been at the heart of BMW's DNA.
                The company's commitment to dynamic driving experiences sets it apart in the automotive world.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-bmw-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                BMW has consistently pushed the boundaries of automotive technology, from pioneering turbocharging 
                to developing advanced driver assistance systems and sustainable mobility solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-bmw-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Precision</h3>
              <p>
                German engineering excellence is evident in every BMW vehicle. The company's meticulous attention to detail 
                and commitment to quality craftsmanship ensures that each BMW delivers an exceptional driving experience.
              </p>
            </div>
          </div>
        </section>
        
        {/* BMW Museum Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Visit the BMW Museum</h2>
              <p className="mb-4">
                Located in Munich, the BMW Museum showcases the company's rich history through a collection of 
                historic vehicles, engines, and interactive exhibits. Visitors can explore the evolution of BMW 
                from its origins as an aircraft engine manufacturer to its current position as a global leader 
                in premium mobility.
              </p>
              <p className="mb-6">
                Adjacent to the museum is BMW Welt, an exhibition and delivery center where customers can pick up 
                their new vehicles and experience the brand's latest innovations. The iconic BMW headquarters, 
                known as the "Four-Cylinder Building," is also located nearby, forming a unique architectural ensemble.
              </p>
              <a 
                href="https://www.bmw-welt.com/en.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bmw-btn"
              >
                Plan Your Visit
              </a>
            </div>
            <div className="relative h-80 lg:h-96">
              <Image
                src="/bmw5.webp"
                alt="BMW Museum"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-bmw-blue text-white text-center py-12 px-6 rounded">
          <h2 className="text-3xl font-bold mb-4">Experience BMW Heritage</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the perfect blend of heritage and innovation that defines BMW. 
            Explore our model lineup and find the BMW that's right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.bmw.com/en/automotive-life/BMW-name-meaning-and-history.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bmw-btn bg-white text-bmw-blue hover:bg-bmw-light-gray"
            >
              Learn More About BMW History
            </a>
            <a 
              href="/models" 
              className="bmw-btn bg-transparent border-2 border-white hover:bg-white hover:text-bmw-blue"
            >
              Explore BMW Models
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
