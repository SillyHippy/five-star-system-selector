"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ShareModal from './card/ShareModal';

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
      </div>

      {/* Share Modal */}
      <ShareModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}