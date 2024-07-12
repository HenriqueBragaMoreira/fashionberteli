import { Sidebar } from '@/components/sidebar';

export default function ApplicationLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
