
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center bg-pink-100">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/images/b.jpeg" 
            alt="Bakery Interior"
            width={500} 
            height={400} 
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-mono text-pink-700 mb-4">About Our Bakery</h2>
          <p className="text-lg mb-4 font-thin">
            Welcome to our bakery! We started our journey in 2010 with a passion for creating delicious and 
            fresh baked goods. Our founder, Sarah Johnson, envisioned a place where people could enjoy 
            quality treats made with love and care. Since that day, we have dedicated ourselves to serving 
            the community with delightful desserts and pastries.
          </p>
          <p className="text-lg mb-4 font-thin ">
            At our bakery, we believe in the power of tradition. We use only the finest ingredients sourced 
            from local farms, ensuring that every bite is as fresh and flavorful as possible. Our signature 
            cakes, pastries, and cookies have won the hearts of many, making our bakery a beloved spot 
            in the community. 
          </p>
          <p className="text-lg mb-4 font-thin">
            Over the years, we've expanded our menu to include a variety of treats, from classic chocolate 
            cakes to innovative seasonal pastries. We take pride in our craft, experimenting with new flavors 
            while honoring the timeless recipes that have brought joy to our customers.
          </p>
          <p className="text-lg mb-4 font-thin">
            We are located in the heart of downtown, at 123 Sweet Street, where the aroma of freshly baked 
            goods fills the air. Our doors are always open, and we invite you to visit us to experience the 
            warmth and sweetness of our bakery. Thank you for being a part of our journey!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
