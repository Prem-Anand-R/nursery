import { BENEFITS } from '@/constants/data';

export default function About() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About GreenGarden</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            GreenGarden is your one-stop destination for high-quality plant saplings and gardening supplies. 
            We are passionate about helping people grow their own food and create beautiful, sustainable gardens.
          </p>

          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to make home gardening accessible to everyone. We believe that growing your own food 
            is not just a hobby, but a way to live a healthier, more sustainable life.
          </p>

          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 