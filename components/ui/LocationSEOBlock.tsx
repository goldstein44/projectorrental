// components/ui/LocationSEOBlock.tsx
// Clickable internal links to all district landing pages

import Link from 'next/link';
import { allLocationNames, locations } from '@/lib/locations';

const LocationSEOBlock = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Serving Premium Island Zones</h2>
          <p className="text-xl text-gray-600">Fast same-day delivery and professional setup in all listed areas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/districts/${location.slug}`}
              className="group border border-gray-200 hover:border-amber-500 hover:bg-amber-50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-amber-600 mb-2 text-xl">📍</div>
                <h3 className="font-semibold text-lg group-hover:text-amber-700 transition-colors">
                  {location.name}
                </h3>
              </div>
              <div className="mt-6 text-sm text-amber-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                View rental packages in this area 
                <span className="text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          Click on any location above to see dedicated pricing, offers and local information
        </p>
      </div>
    </section>
  );
};

export default LocationSEOBlock;