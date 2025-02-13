import Image from "next/image";
import { FaPhone,  FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-col lg:flex-row justify-center items-center px-6 md:px-12 lg:px-16 py-16 space-y-8 lg:space-x-8 bg-white text-black">
    {/* Left Section - Contact Form */}
    <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-[#ed7d31] mb-4">Get in Touch with Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
        <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <input type="text" placeholder="Subject" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-24"></textarea>
        <button className="w-full bg-[#004274] text-white p-3 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>

    {/* Right Section - Contact Info */}
    <div className="w-full lg:w-1/2 md:mt-6 lg:mt-0 md:pl-0 lg:pl-8">
      <h3 className="text-xl font-bold mb-2">Contact</h3>
      <p><FaPhone className="inline-block mr-2" /> 07316984799</p>
      <p><FaEnvelope className="inline-block mr-2" /> contact@beezinfo.com</p>

      <h3 className="text-xl font-bold mt-6">Office Locations - Odisha, India</h3>
      <div className="mt-4">
        <h4 className="font-bold">Bhubaneswar</h4>
        <p>N6/321, Jaydev Vihar, Bhubaneswar</p>
      </div>
    </div>
  </section>
  );
}
