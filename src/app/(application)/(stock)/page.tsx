import { Sidebar } from '@/components/sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estoque'
};

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <h1>Hello World!</h1>
    </div>
  );
}
