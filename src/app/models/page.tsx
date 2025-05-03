import Image from 'next/image';
import Link from 'next/link';

// Define BMW model series data
const bmwModels = [
  {
    id: '1-series',
    name: '1 Series',
    description: 'The BMW 1 Series is a sporty compact car that combines agile handling with premium features.',
    image: '/bmw2.jpg',
    specs: {
      engines: ['1.5L 3-cylinder', '2.0L 4-cylinder'],
      power: '134-302 hp',
      acceleration: '4.8-8.9 seconds (0-60 mph)',
      topSpeed: '132-155 mph',
      drivetrain: 'Front-wheel drive / All-wheel drive',
      transmission: '6-speed manual / 7-speed dual-clutch / 8-speed automatic'
    },
    features: [
      'BMW iDrive infotainment system',
      'LED headlights',
      'Sport seats',
      'Driving Assistant',
      'Parking Assistant'
    ],
    price: 'Starting from $35,700'
  },
  {
    id: '3-series',
    name: '3 Series',
    description: 'The iconic BMW 3 Series sedan delivers a perfect balance of performance, luxury, and technology.',
    image: '/bmw3.jpg',
    specs: {
      engines: ['2.0L 4-cylinder', '3.0L 6-cylinder'],
      power: '255-382 hp',
      acceleration: '4.1-5.6 seconds (0-60 mph)',
      topSpeed: '130-155 mph',
      drivetrain: 'Rear-wheel drive / All-wheel drive',
      transmission: '8-speed automatic'
    },
    features: [
      'Live Cockpit Professional',
      'Ambient lighting',
      'Harman Kardon surround sound',
      'Driving Assistant Professional',
      'Gesture Control'
    ],
    price: 'Starting from $41,450'
  },
  {
    id: '5-series',
    name: '5 Series',
    description: 'The BMW 5 Series is a luxurious midsize sedan that offers sophisticated technology and refined driving dynamics.',
    image: '/bmw4.webp',
    specs: {
      engines: ['2.0L 4-cylinder', '3.0L 6-cylinder', '4.4L V8'],
      power: '248-523 hp',
      acceleration: '3.6-6.1 seconds (0-60 mph)',
      topSpeed: '130-155 mph',
      drivetrain: 'Rear-wheel drive / All-wheel drive',
      transmission: '8-speed automatic'
    },
    features: [
      'BMW Curved Display',
      'Panoramic moonroof',
      'Comfort Access',
      'Parking Assistant Plus',
      'Bowers & Wilkins Diamond Surround Sound'
    ],
    price: 'Starting from $54,800'
  },
  {
    id: '7-series',
    name: '7 Series',
    description: 'The flagship BMW 7 Series sedan represents the pinnacle of luxury, innovation, and driving pleasure.',
    image: '/bmw5.webp',
    specs: {
      engines: ['3.0L 6-cylinder', '4.4L V8', 'Electric'],
      power: '375-650 hp',
      acceleration: '3.5-5.2 seconds (0-60 mph)',
      topSpeed: '130-155 mph',
      drivetrain: 'All-wheel drive',
      transmission: '8-speed automatic'
    },
    features: [
      'BMW Theater Screen',
      'Executive Lounge seating',
      'Automatic doors',
      'Crystal headlights',
      'Highway Assistant'
    ],
    price: 'Starting from $93,300'
  },
  {
    id: 'x-series',
    name: 'X Series',
    description: 'The BMW X Series offers a range of Sports Activity Vehicles that combine versatility, performance, and luxury.',
    image: '/bmw3.jpg',
    specs: {
      models: ['X1', 'X3', 'X5', 'X7'],
      engines: ['2.0L 4-cylinder', '3.0L 6-cylinder', '4.4L V8'],
      power: '241-617 hp',
      drivetrain: 'All-wheel drive',
      groundClearance: '8.0-8.7 inches',
      towing: 'Up to 7,200 lbs'
    },
    features: [
      'xDrive intelligent all-wheel drive',
      'Panoramic Sky Lounge LED roof',
      'Off-road packages',
      'Third-row seating (select models)',
      'Trailer hitch'
    ],
    price: 'Starting from $38,600'
  },
  {
    id: 'm-series',
    name: 'M Series',
    description: 'BMW M models deliver track-inspired performance, aggressive styling, and advanced technology for the ultimate driving experience.',
    image: '/bmw2.jpg',
    specs: {
      models: ['M2', 'M3', 'M4', 'M5', 'M8', 'X3 M', 'X5 M'],
      engines: ['3.0L 6-cylinder', '4.4L V8'],
      power: '473-617 hp',
      acceleration: '2.8-4.1 seconds (0-60 mph)',
      topSpeed: '155-190 mph',
      transmission: '6-speed manual / 8-speed M Steptronic'
    },
    features: [
      'M xDrive',
      'Adaptive M Suspension',
      'M Sport differential',
      'M Carbon ceramic brakes',
      'M Sport exhaust system'
    ],
    price: 'Starting from $63,700'
  }
];

export default function ModelsPage() {
  return (
    <div className="min-h-screen py-16 pt-32">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-3xl md:text-4xl font-bold mb-12 text-center">
          BMW Model Series
        </h1>
        
        <p className="text-center max-w-3xl mx-auto mb-12 text-bmw-gray">
          Explore the complete range of BMW models, from the compact 1 Series to the 
          luxurious 7 Series, versatile X Series SUVs, and high-performance M models.
          Each BMW delivers the perfect blend of driving dynamics, innovation, and premium craftsmanship.
        </p>
        
        {/* Model Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {bmwModels.map((model) => (
            <div key={model.id} className="card">
              <div className="relative h-64">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="card-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-content">
                <h2 className="card-title text-2xl">{model.name}</h2>
                <p className="mb-4 text-bmw-gray">{model.description}</p>
                <p className="text-primary font-bold mb-4">{model.price}</p>
                <button 
                  className="bmw-btn w-full"
                  onClick={() => document.getElementById(model.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Specifications
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Detailed Model Specifications */}
        <div className="space-y-24">
          {bmwModels.map((model) => (
            <div key={model.id} id={model.id} className="scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-80 lg:h-96">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">{model.name}</h2>
                  <p className="mb-6 text-bmw-gray">{model.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Specifications</h3>
                    <div className="space-y-2">
                      {'engines' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Engines:</span>
                          <span>{model.specs.engines.join(', ')}</span>
                        </div>
                      )}
                      {'models' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Models:</span>
                          <span>{model.specs.models.join(', ')}</span>
                        </div>
                      )}
                      {'power' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Power:</span>
                          <span>{model.specs.power}</span>
                        </div>
                      )}
                      {'acceleration' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">0-60 mph:</span>
                          <span>{model.specs.acceleration}</span>
                        </div>
                      )}
                      {'topSpeed' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Top Speed:</span>
                          <span>{model.specs.topSpeed}</span>
                        </div>
                      )}
                      {'drivetrain' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Drivetrain:</span>
                          <span>{model.specs.drivetrain}</span>
                        </div>
                      )}
                      {'transmission' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Transmission:</span>
                          <span>{model.specs.transmission}</span>
                        </div>
                      )}
                      {'groundClearance' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Ground Clearance:</span>
                          <span>{model.specs.groundClearance}</span>
                        </div>
                      )}
                      {'towing' in model.specs && (
                        <div className="flex">
                          <span className="font-semibold w-32">Towing Capacity:</span>
                          <span>{model.specs.towing}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {model.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://www.bmw.com/en/bmw-models/${model.id}.html`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bmw-btn"
                    >
                      Official Details
                    </a>
                    <a 
                      href="https://www.bmw.com/en/configurator.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bmw-btn bmw-btn-secondary"
                    >
                      Build Your Own
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-bmw-light-gray p-8 rounded mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Find Your Perfect BMW</h2>
          <p className="mb-6">
            Visit the official BMW website to explore all models in detail, configure your dream car, 
            or schedule a test drive at your local dealership.
          </p>
          <a 
            href="https://www.bmw.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bmw-btn"
          >
            Visit BMW Official Site
          </a>
        </div>
      </div>
    </div>
  );
}
