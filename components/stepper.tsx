import React from "react";
import { Steps } from "antd";

// Helper function to format dates
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
    new Date(date)
  );

  // Memasukkan koma setelah bulan
  const [day, month, year] = formattedDate.split(" ");
  return `${day} ${month}, '${year}`;
};

const StepperPpdb: React.FC = () => {
  // Define the date ranges for each step
  const stepsDates = [
    { title: "Pendaftaran Online", start: "2024-12-9", end: "2024-12-31" },
    {
      title: "Pengumuman Seleksi Administrasi",
      start: "2025-02-09",
      end: "2025-02-09",
    },
    { title: "Test Akademik", start: "2025-02-15", end: "2025-02-16" },
    {
      title: "Pengumuman Test Akademik",
      start: "2025-02-22",
      end: "2025-02-22",
    },
    { title: "Test Bacaan Al-Qur’an", start: "2025-03-08", end: "2025-03-09" },
    {
      title: "Pengumuman Jadwal Wawancara",
      start: "2025-03-14",
      end: "2025-03-14",
    },
    {
      title: "Interview & Home visit (on & off)",
      start: "2025-04-22",
      end: "2025-04-27",
    },
    {
      title: `Psikotest Online& Offline`,
      start: "2025-05-03",
      end: "2025-05-06",
    },
    { title: "Pengumuman Akhir", start: "2025-06-01", end: "2025-06-01" },
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
      style={{ gap: "24px" }} // Atur jarak antar step
      progressDot
      current={currentStep}
      // direction={window.innerWidth > 1000 ? "horizontal" : "vertical"} // Horizontal for large screens, vertical for small screens
      items={stepsDates.map((step) => ({
        title: step.title,
        description:
          step.start === step.end
            ? formatDate(step.start) // Single-day event
            : `${formatDate(step.start)} s.d ${formatDate(step.end)}`, // Date range
      }))}
    />
  );
};

export default StepperPpdb;
