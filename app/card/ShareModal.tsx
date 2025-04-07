"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [copySuccess, setCopySuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const cardUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Copy URL function
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(cardUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-t-lg p-6 w-full max-w-[420px] shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Share Joseph Iannazzi's Digital Business Card</h2>
        <div className="space-y-3">
          <div
            className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors cursor-pointer"
            onClick={handleCopyLink}
          >
            <div className="flex items-center">
              <Image src="/images/personal.svg" alt="Link" width={24} height={24} />
              <span className="ml-3 text-gray-800">{copySuccess ? "Link Copied!" : "Copy Card Link"}</span>
            </div>
            <Image src="/landingpage/icons/copy.svg" alt="Copy" width={24} height={24} />
          </div>
          <div
            className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors cursor-pointer"
            onClick={() => (window.location.href = `sms:?&body=Check out this card: ${cardUrl}`)}
          >
            <div className="flex items-center">
              <Image src="/landingpage/icons/imessage.svg" alt="Text" width={24} height={24} />
              <span className="ml-3 text-gray-800">Share via Text</span>
            </div>
            <Image src="/landingpage/icons/external link icon.svg" alt="External Link" width={24} height={24} />
          </div>
          <div
            className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors cursor-pointer"
            onClick={() => (window.location.href = `mailto:?subject=Check out this card&body=${cardUrl}`)}
          >
            <div className="flex items-center">
              <Image src="/landingpage/icons/mail.svg" alt="Email" width={24} height={24} />
              <span className="ml-3 text-gray-800">Share via Email</span>
            </div>
            <Image src="/landingpage/icons/external link icon.svg" alt="External Link" width={24} height={24} />
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-[#3B82F6] text-white py-2 rounded-lg hover:bg-[#2563EB] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
