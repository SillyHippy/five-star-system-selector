"use client";

import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CalendarPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleDownload = async () => {
    try {
      if (!date || !time) {
        toast({
          title: "Required Fields",
          description: "Please select both date and time for your reminder.",
          duration: 3000,
        });
        return;
      }

      setIsDownloading(true);
      
      // Create calendar event with selected date/time
      const eventDate = new Date(`${date}T${time}`);
      const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000); // 1 hour duration

      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Joseph Iannazzi//Calendar Reminder//EN
BEGIN:VEVENT
UID:${Date.now()}@justlegalsolutions.org
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Follow up with Joseph Iannazzi 
DESCRIPTION:Reminder to connect with Joseph Iannazzi
LOCATION:Tulsa, OK
END:VEVENT
END:VCALENDAR`;

      // Create and download the file
      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Reminder.ics'; // updated file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Removed success toast
      router.push('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download the reminder. Please try again.",
        duration: 3000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] flex items-center justify-center p-4">
      <div className="bg-[#1C2541] rounded-[24px] p-8 max-w-[420px] w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] text-white mb-4">Add Calendar Reminder</h1>
          <p className="text-[#A8B2D1]">Schedule a follow-up reminder with Joseph Iannazzi</p>
        </div>

        {/* Date/Time Selection */}
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-[#A8B2D1] mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 bg-[#233554] text-white rounded-lg border border-[#3E4C63] focus:outline-none focus:border-[#64FFDA]"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-[#A8B2D1] mb-2">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 bg-[#233554] text-white rounded-lg border border-[#3E4C63] focus:outline-none focus:border-[#64FFDA]"
            />
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`w-full relative flex items-center justify-between bg-[#233554] text-white p-5 rounded-lg transition-colors group ${
            isDownloading ? 'opacity-75' : 'hover:bg-[#3E4C63]'
          }`}
        >
          <div
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-[48px] h-[48px] bg-[#2A3B58] rounded-full flex items-center justify-center shadow-md"
            style={{
              transform: "scale(1.5)", // Adjust this value to scale the icon
            }}
          >
            <Image
              src="/landingpage/icons/calendar-reminder-icon.svg"
              alt="Calendar"
              width={24}
              height={24}
              className="object-cover"
            />
          </div>
          <span className="pl-12 text-base">
            {isDownloading ? 'Downloading...' : 'Download Calendar Reminder'}
          </span>
          <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Back Button */}
        <a
          href="/"
          className="mt-4 w-full flex items-center justify-center text-[#A8B2D1] hover:text-[#64FFDA] transition-colors py-3"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}