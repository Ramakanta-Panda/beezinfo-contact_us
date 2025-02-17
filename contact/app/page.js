'use client';
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import contactImg from '../app/Componets/Images/contact-bg.jpg'

import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const contactDetails = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-3xl mx-auto mb-4 text-[#004274]" />,
      title: "ADDRESS",
      info: "N6/321, Jaydev Vihar, Bhubaneswar",
    },
    {
      id: 2,
      icon: <FaPhoneAlt className="text-3xl mx-auto mb-4 text-[#004274]" />,
      title: "PHONE",
      info: "07316984799",
    },
    {
      id: 3,
      icon: <FaEnvelope className="text-3xl mx-auto mb-4 text-[#004274]" />,
      title: "E-MAIL",
      info: "contact@beezinfo.com",
    },
  ];

  return (
    <section className="relative min-h-screen px-6 md:px-8 lg:px-16 py-16 space-y-8 bg-white text-black">
      <div className="absolute inset-0 z-0">
        <Image
          src={contactImg}
          alt="Contact Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Left Section - Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-[#004274] mb-6 text-center md:text-left">
            Get in Touch with Us
          </h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Full Name" />
            <Input type="tel" placeholder="Phone" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Subject" />
            <Textarea placeholder="Your Message" />
            <button className="w-full bg-[#004274] text-white border-2 p-3 rounded hover:bg-transparent hover:border-[#004274] hover:text-[#004274] transition">
              Submit
            </button>
          </form>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full lg:w-1/2 text-center">
          <h3 className="text-4xl text-white font-bold mb-12">Contact</h3>
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="bg-white text-black p-6 md:p-5 rounded-lg shadow-lg w-60 md:w-60 h-auto"
              >
                {item.icon}
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
