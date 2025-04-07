"use client";

import React, { useState } from 'react';

export default function CalendarPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDownload = async () => {
    try {
      if (!date || !time) {
        alert("Please select both date and time for your reminder.");
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
UID:${Date.now()}@iannazzi.org
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Follow up with Joseph Iannazzi
DESCRIPTION:Reminder to connect with Joseph Iannazzi.
Email: iannazzi@alumni.nsuok.edu
Phone: 539-367-6832
LOCATION:Tulsa, OK
END:VEVENT
END:VCALENDAR`;

      // Create and download the file
      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'just-legal-solutions-reminder.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      alert("Your reminder has been downloaded successfully.");
    } catch (error) {
      alert("Failed to download the reminder. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B132B] flex items-center justify-center p-4">
      <div className="bg-[#1C2541] rounded-[15px] p-6 max-w-[420px] w-full shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-[28px] text-white mb-4">Add Calendar Reminder</h1>
          <p className="text-gray-300">Schedule a follow-up reminder with Just Legal Solutions</p>
        </div>

        {/* Date/Time Selection */}
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 bg-[#2D3748] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
              Select Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 bg-[#2D3748] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`w-full relative flex items-center justify-between bg-[#2D3748] text-white p-5 rounded-lg transition-colors group ${
            isDownloading ? 'opacity-75' : 'hover:bg-[#4A5568]'
          }`}
        >
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[62px] h-[62px]">
            <img
              src="/landingpage/icons/calendar-reminder-icon.svg"
              alt="Calendar"
              className="w-full h-full"
            />
          </div>
          <span className="pl-12 text-base">
            {isDownloading ? 'Downloading...' : 'Download Calendar Reminder'}
          </span>
          <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Back Button */}
        <a
          href="/card"
          className="mt-4 w-full flex items-center justify-center text-gray-400 hover:text-white transition-colors py-3"
        >
          ← Back to Contact Card
        </a>
      </div>
    </div>
  );
}