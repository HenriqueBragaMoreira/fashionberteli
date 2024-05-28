import { Metadata } from 'next';
import { Toolbar } from './components/toolbar';

export const metadata: Metadata = {
  title: 'Estoque'
};

export default function Home() {
  return (
    <div className="flex-1 pt-36 px-16">
      <Toolbar />
    </div>
  );
}
