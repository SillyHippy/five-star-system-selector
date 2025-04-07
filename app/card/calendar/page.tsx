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

      const eventDate = new Date(`${date}T${time}`);
      const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);

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

      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'joseph-iannazzi-reminder.ics';
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
      <div className="bg-[#1C2541] rounded-lg p-6 max-w-[420px] w-full shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-[28px] text-white mb-4">Add Calendar Reminder</h1>
          <p className="text-gray-300">Schedule a follow-up reminder with Joseph Iannazzi</p>
        </div>

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

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`w-full bg-[#2D3748] text-white p-4 rounded-lg hover:bg-[#4A5568] transition ${
            isDownloading ? 'opacity-75' : ''
          }`}
        >
          {isDownloading ? 'Downloading...' : 'Download Calendar Reminder'}
        </button>

        <a
          href="/card"
          className="mt-4 block text-center text-gray-400 hover:text-white transition"
        >
          ← Back to Contact Card
        </a>
      </div>
    </div>
  );
}