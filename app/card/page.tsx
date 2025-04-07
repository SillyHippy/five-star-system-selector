"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ShareModal from './ShareModal';

export default function CardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4">
      <div className="bg-[#1C2541] rounded-lg p-6 max-w-[420px] w-full shadow-lg relative">
        {/* Share Icon */}
        <button
          onClick={handleShareClick}
          className="absolute top-4 right-4 w-[30px] h-[30px] z-10 cursor-pointer"
          aria-label="Share"
        >
          <Image
            src="/landingpage/icons/share.svg"
            alt="Share"
            width={30}
            height={30}
          />
        </button>

        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <div className="w-[90px] h-[90px] bg-white rounded-full overflow-hidden mr-4">
            <Image
              src="/images/personal.jpeg"
              alt="Joseph Iannazzi"
              width={90}
              height={90}
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-[26px] font-bold text-white">Joseph Iannazzi</h2>
            <p className="text-gray-400">HR Compliance Leader</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mb-6">
          <h1 className="text-[22px] text-white mb-4">About Me</h1>
          <p className="text-gray-300">
            Legal & Logistics Operations Manager, Project Management Expert,
            Driving Efficiency in Multisector Environments.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="space-y-4">
          <a
            href="/personal.vcf"
            download
            className="flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <Image
              src="/landingpage/icons/contact.svg"
              alt="Contact"
              width={40}
              height={40}
              className="mr-4"
            />
            Download My Contact Details
          </a>

          <a
            href="mailto:iannazzi@alumni.nsuok.edu"
            className="flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <Image
              src="/landingpage/icons/mail.svg"
              alt="Email"
              width={40}
              height={40}
              className="mr-4"
            />
            Email Me
          </a>

          <a
            href="tel:+15393676832"
            className="flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <Image
              src="/landingpage/icons/phone.svg"
              alt="Call"
              width={40}
              height={40}
              className="mr-4"
            />
            Call Me
          </a>

          <a
            href="sms:5393676832"
            className="flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <Image
              src="/landingpage/icons/imessage.svg"
              alt="Text"
              width={40}
              height={40}
              className="mr-4"
            />
            Send a Text
          </a>

          <a
            href="/card/calendar"
            className="flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <Image
              src="/landingpage/icons/calendar-reminder-icon.svg"
              alt="Calendar"
              width={40}
              height={40}
              className="mr-4"
            />
            Add a Reminder
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-iannazzi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <Image
              src="/landingpage/icons/linkedin.svg"
              alt="LinkedIn"
              width={40}
              height={40}
              className="mr-4"
            />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
