import React, { useState, useEffect } from 'react';

const TimezoneSelector = ({ onTimezoneChange }) => {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');

const timezones = [
  { label: 'Baker Island, USA (UTC-12:00)', value: -12 },
  { label: 'Niue (UTC-11:00)', value: -11 },
  { label: 'American Samoa (UTC-10:00)', value: -10 },
  { label: 'Marquesas Islands (UTC-09:30)', value: -9.5 },
  { label: 'Alaska, USA (UTC-09:00)', value: -9 },
  { label: 'Pacific Time, USA (UTC-08:00)', value: -8 },
  { label: 'Mountain Time, USA (UTC-07:00)', value: -7 },
  { label: 'Central Time, USA (UTC-06:00)', value: -6 },
  { label: 'Eastern Time, USA (UTC-05:00)', value: -5 },
  { label: 'Chile (UTC-04:00)', value: -4 },
  { label: 'Newfoundland, Canada (UTC-03:30)', value: -3.5 },
  { label: 'Argentina (UTC-03:00)', value: -3 },
  { label: 'South Georgia/Sandwich Islands (UTC-02:00)', value: -2 },
  { label: 'Azores, Portugal (UTC-01:00)', value: -1 },
  { label: 'United Kingdom (UTC±00:00)', value: 0 },
  { label: 'Germany (UTC+01:00)', value: 1 },
  { label: 'Greece (UTC+02:00)', value: 2 },
  { label: 'Kenya (UTC+03:00)', value: 3 },
  { label: 'United Arab Emirates (UTC+04:00)', value: 4 },
  { label: 'Afghanistan (UTC+04:30)', value: 4.5 },
  { label: 'Pakistan (UTC+05:00)', value: 5 },
  { label: 'India (UTC+05:30)', value: 5.5 },
  { label: 'Nepal (UTC+05:45)', value: 5.75 },
  { label: 'Bangladesh (UTC+06:00)', value: 6 },
  { label: 'Myanmar (UTC+06:30)', value: 6.5 },
  { label: 'Thailand (UTC+07:00)', value: 7 },
  { label: 'China (UTC+08:00)', value: 8 },
  { label: 'Japan (UTC+09:00)', value: 9 },
  { label: 'Australia (UTC+10:00)', value: 10 },
  { label: 'Lord Howe Island, Australia (UTC+10:30)', value: 10.5 },
  { label: 'Solomon Islands (UTC+11:00)', value: 11 },
  { label: 'New Zealand (UTC+12:00)', value: 12 },
  { label: 'Chatham Islands, New Zealand (UTC+12:45)', value: 12.75 },
  { label: 'Tonga (UTC+13:00)', value: 13 },
  { label: 'Kiritimati, Kiribati (UTC+14:00)', value: 14 },
];

  useEffect(() => {
    const savedTimezone = localStorage.getItem('selectedTimezone');
    if (savedTimezone) {
      setSelectedTimezone(savedTimezone);
      onTimezoneChange(savedTimezone);
    }
  }, []);

  const handleChange = (event) => {
    const timezone = event.target.value;
    setSelectedTimezone(timezone);
    localStorage.setItem('selectedTimezone', timezone);
    onTimezoneChange(timezone);
  };

  return (
    <div>
      <label htmlFor="timezone-selector">Select Timezone:</label>
      <select
        id="timezone-selector"
        value={selectedTimezone}
        onChange={handleChange}
      >
        {timezones.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
