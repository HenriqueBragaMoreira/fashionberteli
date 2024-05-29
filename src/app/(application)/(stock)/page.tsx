import { Metadata } from 'next';
import { DataTable } from './components/dataTable';

export const metadata: Metadata = {
  title: 'Estoque'
};

export default function Home() {
  return (
    <div className="flex-1 pt-32 pb-10 px-16">
      <DataTable />
    </div>
  );
}
