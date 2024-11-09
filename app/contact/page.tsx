
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 bg-pink-100">
        <h2 className="text-center text-4xl font-extrabold text-pink-700 mb-8">CONTACT US!</h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">GET IN TOUCH!</h3>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-pink-600 text-white p-2 rounded hover:bg-pink-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2 md:pl-4">
            <h3 className="text-2xl font-extrabold text-blue-300 mb-4">Contact Information</h3>
            <div className="mb-4">
              <span> DHA phase 8 Karachi,Pakistan</span>
            </div>
            <div className="mb-4">
              <span>(123) 456-7890</span>
            </div>
            <div className="mb-4">
              <span>nisarmuskan14@gmail.com</span>
            </div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
