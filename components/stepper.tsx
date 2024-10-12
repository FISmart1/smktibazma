import React from 'react';
import { Divider, Steps } from 'antd';

const StepperJS: React.FC = () => (
  <>
    {/* <Steps
      progressDot
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    /> */}
    <Steps
      progressDot
      current={2}
      direction="horizontal"
      items={[
        {
          title: 'Registrasi',
          description: 'Registrasi PPDB sampai tanggal 21 Desember 2024',
        },
        {
          title: 'Pengumpulan Berkas',
          description: 'Bagian ini adalah pengumpulan berkas yang dibutuhkan sekolah',
        },
        {
          title: 'Seleksi Pertama',
          description: 'Para siswa akan di seleksi untuk ke tahap selanjutnya.',
        },
        {
          title: 'Seleksi Kedua',
          description: 'Seleksi ini yang menentukan siswa akan lolos.',
        },
        {
          title: 'Hasil Seleksi',
          description: 'Semua peserta akan mendapat hasil seleksi.',
        },
      ]}
    />
  </>
);

export default StepperJS;