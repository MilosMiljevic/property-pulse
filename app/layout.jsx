import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'ProperyPulse | Find a Perfect Rental',
  description: 'Find your Dream Property',
  keyword: 'find rental, find property'
};

const MainLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
