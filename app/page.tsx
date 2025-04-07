"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import ShareModal from './card/ShareModal'; // Adjusted import path for ShareModal

export default function HomePage() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const router = useRouter(); // Initialize router

  const handleShareClick = () => setIsShareModalOpen(true);
  const handleCloseShareModal = () => setIsShareModalOpen(false);

  const handleResumeClick = () => setIsResumeModalOpen(true);
  const handleCloseResumeModal = () => setIsResumeModalOpen(false);

  // Updated function to prevent default on click
  const handleCalendarReminder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push('/card/calendar');
  };

  return (
    <div className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4">
      <div className="bg-[#1C2541] rounded-lg p-6 max-w-[420px] w-full shadow-lg relative space-y-6">
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
        <div className="flex items-center mb-4">
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
          </div>
        </div>

        {/* Gray Buttons Section */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
            HR Compliance Leader
          </span>
          <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
            Legal & Logistics Operations Manager
          </span>
          <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
            Project Management Expert
          </span>
          <span className="inline-block px-3 py-1.5 bg-[#374151] text-[#E5E7EB] rounded-full text-sm">
            Driving Efficiency in Multisector Environments
          </span>
        </div>

        {/* Buttons Section */}
        <div className="space-y-4">
          <a
            href="/personal.vcf"
            download
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/contact.svg"
                alt="Contact"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">Download my contact details</span>
            <span className="ml-auto text-xl">→</span>
          </a>

          <a
            href="mailto:iannazzi@alumni.nsuok.edu"
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/mail.svg"
                alt="Email"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">Email</span>
            <span className="ml-auto text-xl">→</span>
          </a>

          <a
            href="tel:+15393676832"
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/phone.svg"
                alt="Call"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">Call</span>
            <span className="ml-auto text-xl">→</span>
          </a>

          <a
            href="sms:5393676832"
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/imessage.svg"
                alt="Text"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">Send Text Message</span>
            <span className="ml-auto text-xl">→</span>
          </a>

          <a
            onClick={handleCalendarReminder}
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition cursor-pointer"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/calendar-reminder-icon.svg"
                alt="Calendar"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">Add a Reminder</span>
            <span className="ml-auto text-xl">→</span>
          </a>

          <a
            href="https://www.linkedin.com/in/joseph-iannazzi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/linkedin.svg"
                alt="LinkedIn"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">LinkedIn</span>
            <span className="ml-auto text-xl">→</span>
          </a>

          <a
            onClick={handleResumeClick}
            className="relative flex items-center bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition cursor-pointer"
          >
            <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-13 h-13">
              <Image
                src="/landingpage/icons/document.svg"
                alt="Resume"
                width={60} // updated from 40
                height={60} // updated from 40
                className="rounded-full"
              />
            </div>
            <span className="pl-12">View Resumes</span>
            <span className="ml-auto text-xl">→</span>
          </a>
        </div>

        {/* Resume Description */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Due to holding multiple hats while working for a small business, these are my tailored resumes towards specific roles.
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal isOpen={isShareModalOpen} onClose={handleCloseShareModal} />

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-[420px] shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Select a Resume</h2>
            <div className="space-y-3">
              <a
                href="/resumes/Administrative Assistant - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Administrative Assistant Resume
              </a>
              <a
                href="/resumes/Project Manager - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Project Manager Resume
              </a>
              <a
                href="/resumes/Process Server - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Process Server Resume
              </a>
              <a
                href="/resumes/Payroll - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Payroll Resume
              </a>
              <a
                href="/resumes/Office Assistant - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Office Assistant Resume
              </a>
              <a
                href="/resumes/Legal Assistant - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Legal Assistant Resume
              </a>
              <a
                href="/resumes/Human Resources Assistant - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Human Resources Assistant Resume
              </a>
              <a
                href="/resumes/Executive Assistant - Resume.pdf"
                download
                className="block p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#E5E7EB] transition-colors text-gray-800"
              >
                Executive Assistant Resume
              </a>
            </div>
            <button
              onClick={handleCloseResumeModal}
              className="mt-4 w-full bg-[#3B82F6] text-white py-2 rounded-lg hover:bg-[#2563EB] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}