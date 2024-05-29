import { Toaster } from '@/components/ui/toaster';
import { queryClient } from '@/lib/react-query';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: {
    default: 'Sistema fashionberteli',
    template: '%s | fashionberteli'
  },
  description:
    'System fully developed by Henrique Braga and Lucas Fernandes with the aim of managing and innovating the Fashionberteli store.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./icon.ico" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
