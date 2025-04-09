"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  if (!isOpen) return null;

  const resumes = [
    {
      title: "Administrative Assistant Resume",
      path: "/resumes/Administrative Assistant - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Executive Assistant Resume",
      path: "/resumes/Executive Assistant - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Human Resources Assistant Resume",
      path: "/resumes/Human Resources Assistant - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Legal Assistant Resume",
      path: "/resumes/Legal Assistant - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Office Assistant Resume",
      path: "/resumes/Office Assistant - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Payroll Resume",
      path: "/resumes/Payroll - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Process Server Resume",
      path: "/resumes/Process Server - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    },
    {
      title: "Project Manager Resume",
      path: "/resumes/Project Manager - Resume.pdf",
      icon: "/landingpage/icons/document.svg"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-[#1B2738] rounded-[24px] p-8 max-w-[500px] w-full max-h-[80vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white border border-[#2A3653]">
        <h2 className="text-[22px] font-bold mb-6">Joseph Iannazzi's Resumes</h2>
        <div className="space-y-3">
          {resumes.map((resume, index) => (
            <a 
              key={index}
              href={resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-[#2A3B58] rounded-[12px] hover:bg-[#304060] transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <Image src={resume.icon} alt={resume.title} width={24} height={24} />
                </div>
                <span className="ml-3">{resume.title}</span>
              </div>
              <div className="flex items-center">
                <Image src="/landingpage/icons/external link icon.svg" alt="External Link" width={20} height={20} className="opacity-70" />
              </div>
            </a>
          ))}
        </div>
        <button 
          onClick={onClose} 
          className="mt-6 w-full bg-[#2A3B58] text-white py-3 rounded-[12px] hover:bg-[#304060] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
