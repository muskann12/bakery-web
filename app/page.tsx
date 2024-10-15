// app/page.tsx
import Navbar from './components/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import Image from 'next/image';
import Footer from './components/Footer';

const specialties = [
  { name: 'Chocolate Cake', image: '/images/cc.jpeg', price: '$25' },
  { name: 'Blueberry Cake', image: '/images/bb.jpeg', price: '$30' },
  { name: 'Fudge Brownie', image: '/images/f1.jpeg', price: '$15' },
  { name: 'Coca Cake', image: '/images/h.jpeg', price: '$20' },
  { name: 'Muffins', image: '/images/c1.jpeg', price: '$10' },
  { name: 'Lemon Tart', image: '/images/l1.jpeg', price: '$12' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 bg-blue-50">
        <h2 className="text-center text-4xl font-mono mt-8 mb-4 underline text-pink-700">BEST IN OUR MENU</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specialties.map((product, index) => (
            <div
              key={index}
              className="bg-pink-100 shadow-lg rounded-lg p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}  // Set width
                height={200} // Set height
                className="rounded-t-lg object-cover" // Use object-cover for proper aspect ratio
              />
              <div className="flex flex-col justify-between items-center mt-4 bg-pink-100">
                <h3 className="text-2xl font-extrabold text-blue-400">{product.name}</h3>
                <p className="text-lg font-semibold text-pink-600">{product.price}</p> {/* Price added here */}
                <button className="text-pink-600 hover:text-pink-700 mt-2">
                  <FaCartPlus size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
