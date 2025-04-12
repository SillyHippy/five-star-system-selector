"use client";

import React, { useState } from "react";
import Image from "next/image";
import ShareModal from "./card/ShareModal";
import ResumeModal from "./components/ResumeModal";

interface ButtonProps {
  href: string;
  icon: string;
  label: string;
  download?: boolean;
  customSize: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleShareClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleResumeClick = () => setIsResumeModalOpen(true);
  const handleCloseResumeModal = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#121D34] to-[#0A0F1C] flex items-center justify-center p-4 relative">
      {/* Light effect */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-radial from-white/20 to-transparent rounded-full blur-[200px] opacity-50"></div>

      <div className="bg-[#1B2738] rounded-[24px] p-8 max-w-[420px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md relative border border-[#2A3653]">
        {/* Share Icon */}
        <button
          onClick={handleShareClick}
          className="absolute top-4 right-4 w-[40px] h-[40px] z-10 cursor-pointer border-none bg-transparent p-0"
          aria-label="Share"
        >
          <Image
            src="/landingpage/icons/share.svg"
            alt="Share"
            width={20}
            height={20}
            className="w-full h-full"
          />
        </button>

        {/* Top Profile Section */}
        <div className="flex items-center mb-6">
          <div className="w-[90px] h-[90px] bg-white rounded-full flex-shrink-0 mr-4 flex items-center justify-center overflow-hidden border-[1px] border-gray-100">
            <Image
              src="/images/personal.jpeg"
              alt="Joseph Iannazzi"
              width={90}
              height={90}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-[22px] font-semibold text-white leading-tight">
              Joseph Iannazzi
            </h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="pl-1 mb-6">
          <div className="flex flex-col gap-2">
            <span className="inline-block px-4 py-2 bg-[#2A3B58] text-[#CBD5E1] rounded-full text-sm shadow-sm">
              HR Compliance Leader
            </span>
            <span className="inline-block px-4 py-2 bg-[#2A3B58] text-[#CBD5E1] rounded-full text-sm shadow-sm">
              Legal & Logistics Operations Manager
            </span>
            <span className="inline-block px-4 py-2 bg-[#2A3B58] text-[#CBD5E1] rounded-full text-sm shadow-sm">
              Project Management Expert
            </span>
            <span className="inline-block px-4 py-2 bg-[#2A3B58] text-[#CBD5E1] rounded-full text-sm shadow-sm">
              Driving Efficiency in Multisector Environments
            </span>
          </div>
        </div>

        {/* About Me Section */}
        <div className="pl-1 mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">About Me</h3>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">
            Executive Assistant and Business Operations Specialist with 10+ years of experience streamlining HR, legal, onboarding, and compliance operations. Open to full-time, part-time, On-site, remote, or hybrid roles.
          </p>
        </div>

        {/* Button Section */}
        <div className="space-y-4">
          {[
            {
              href: "/contact-details.vcf",
              icon: "/landingpage/icons/contact.svg",
              label: "Download my contact details",
              download: true,
              customSize: "120%",
            },
            {
              href: "mailto:iannazzi@alumni.nsuok.edu",
              icon: "/landingpage/icons/mail.svg",
              label: "Email",
              customSize: "110%",
            },
            {
              href: "tel:+15393676832",
              icon: "/landingpage/icons/phone.svg",
              label: "Call",
              customSize: "120%",
            },
            {
              href: "sms:+15393676832",
              icon: "/landingpage/icons/imessage.svg",
              label: "Message",
              customSize: "120%",
            },
            {
              href: "/calendar",
              icon: "/landingpage/icons/calendar-reminder-icon.svg",
              label: "Add a Reminder",
              customSize: "150%",
            },
            {
              href: "https://www.linkedin.com/in/joseph-iannazzi/",
              icon: "/landingpage/icons/linkedin.svg",
              label: "LinkedIn",
              customSize: "140%",
            },
            {
              href: "#",
              icon: "/landingpage/icons/document.svg",
              label: "View Resumes",
              customSize: "130%",
              onClick: handleResumeClick,
            },
          ].map(({ href, icon, label, download, customSize, onClick }) => (
            <a
              key={label}
              href={onClick ? "#" : href}
              onClick={onClick}
              {...(download ? { download: true } : {})}
              className="relative flex items-center bg-[#1B2738] text-white h-[64px] px-8 rounded-[16px] hover:bg-[#263448] transition-all duration-200 group shadow-[0_6px_20px_rgba(0,0,0,0.4)]"
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center bg-[#2A3B58] rounded-full overflow-hidden"
                style={{
                  width: "48px",
                  height: "48px",
                  left: "-16px",
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4)",
                }}
              >
                <Image
                  src={icon}
                  alt={label}
                  width={48}
                  height={48}
                  className="object-cover"
                  style={{
                    transform: `scale(${customSize})`,
                  }}
                />
              </div>
              <span className="text-base font-medium text-white/90 group-hover:text-white pl-[56px]">
                {label}
              </span>
              <span className="absolute right-4 text-xl font-bold text-white/70 group-hover:text-white transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
          <p className="text-sm text-[#CBD5E1] mt-2">
            Due to wearing multiple hats while working for various businesses, these resumes are tailored to specific roles. Although my primary role was often that of an Executive Assistant, which involved a combination of responsibilities depending on the needs of my executive, I have gained experience in multiple aspects of business operations.
          </p>
        </div>
      </div>

      <ShareModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {isResumeModalOpen && (
        <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResumeModal} />
      )}
    </div>
  );
}
