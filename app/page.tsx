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

  const buttons: ButtonProps[] = [
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
      onClick: handleResumeClick
    }
  ];

  return (

        {/* Button Section */}
        <div className="space-y-4">
          {[
            {
              href: "/contact-details.vcf",
              icon: "/landingpage/icons/contact.svg",
              label: "Download my contact details",
              download: true,
              customSize: "120%",
              onClick: null
            },
            {
              href: "mailto:iannazzi@alumni.nsuok.edu",
              icon: "/landingpage/icons/mail.svg",
              label: "Email",
              customSize: "110%",
              onClick: null
            },
            {
              href: "tel:+15393676832",
              icon: "/landingpage/icons/phone.svg",
              label: "Call",
              customSize: "120%",
              onClick: null
            },
            {
              href: "sms:+15393676832",
              icon: "/landingpage/icons/imessage.svg",
              label: "Message",
              customSize: "120%",
              onClick: null
            },
            {
              href: "/calendar",
              icon: "/landingpage/icons/calendar-reminder-icon.svg",
              label: "Add a Reminder",
              customSize: "150%",
              onClick: null
            },
            {
              href: "https://www.linkedin.com/in/joseph-iannazzi/",
              icon: "/landingpage/icons/linkedin.svg",
              label: "LinkedIn",
              customSize: "140%",
              onClick: null
            },
            {
              href: "#",
              icon: "/landingpage/icons/document.svg",
              label: "View Resumes",
              customSize: "130%",
              onClick: handleResumeClick
            }
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
                  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4)"
                }}
              >
                <Image
                  src={icon}
                  alt={label}
                  width={48}
                  height={48}
                  className="object-cover"
                  style={{
                    transform: `scale(${customSize})`
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
            Due to holding multiple hats while working for a small business, these are my tailored resumes towards specific roles.
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