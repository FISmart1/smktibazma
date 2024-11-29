import React from 'react';
import { Steps } from 'antd';

// Helper function to format dates
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

const StepperPpdb: React.FC = () => {
  // Define the date ranges for each step
  const stepsDates = [
    { title: 'Pendaftaran Online', start: '2025-11-27', end: '2025-12-31' },
    { title: 'Pengumuman Seleksi Berkas', start: '2025-02-09', end: '2025-02-09' },
    { title: 'Test Akademik', start: '2025-03-02', end: '2025-03-03' },
    { title: 'Test Bacaan Al-Qur’an', start: '2025-03-25', end: '2025-03-26' },
    { title: 'Wawancara & Survey Faktual', start: '2025-04-06', end: '2025-04-08' },
    { title: 'Psikotest', start: '2025-04-27', end: '2025-04-28' },
    { title: 'Pengumuman Akhir', start: '2025-05-20', end: '2025-05-20' },
  ];

  // Get current date
  const today = new Date();

  // Determine the current step based on today's date
  let currentStep = 0;
  for (let i = 0; i < stepsDates.length; i++) {
    const step = stepsDates[i];
    const startDate = new Date(step.start);
    const endDate = new Date(step.end);

    if (today >= startDate && today <= endDate) {
      currentStep = i;
      break;
    }
  }

  return (
    <Steps
      progressDot
      current={currentStep}
      direction="horizontal"
      items={stepsDates.map((step) => ({
        title: step.title,
        description: step.start === step.end 
          ? formatDate(step.start) // Single-day event
          : `${formatDate(step.start)} s.d ${formatDate(step.end)}`, // Date range
      }))}
    />
  );
};

export default StepperPpdb;
