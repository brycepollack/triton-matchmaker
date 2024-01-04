import type { Metadata } from 'next'
//import './globals.css'

import { AppProvider } from "@/components/Misc";


export const metadata: Metadata = {
  title: 'Triton Matchmaker',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
