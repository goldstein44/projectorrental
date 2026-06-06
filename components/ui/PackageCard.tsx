// components/ui/PackageCard.tsx
// Reusable card for all rental packages

import { Package } from '@/lib/packages';

interface PackageCardProps {
  packageData: Package;
  whatsappNumber: string;
}

const PackageCard = ({ packageData, whatsappNumber }: PackageCardProps) => {
  const whatsappLink = `https://wa.me/234${whatsappNumber.replace(/\D/g, '')}?text=Hi,%20I%20want%20to%20rent%20${encodeURIComponent(packageData.title)}`;

  return (
    <div className={`bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${packageData.popular ? 'ring-2 ring-amber-500 relative' : ''}`}>
      {packageData.popular && (
        <div className="absolute -top-3 right-6 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          🔥 MOST POPULAR
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-2">{packageData.title}</h3>
      <div className="text-4xl font-bold text-amber-600 mb-6">
        ₦{packageData.price.toLocaleString()}
        <span className="text-base font-normal text-gray-500">/day</span>
      </div>

      <p className="text-gray-600 mb-8">{packageData.description}</p>

      <ul className="space-y-3 mb-10 flex-grow">
        {packageData.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <span className="text-green-500 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink}
        target="_blank"
        className="mt-auto block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-2xl transition-all"
      >
        Book via WhatsApp
      </a>
    </div>
  );
};

export default PackageCard;

