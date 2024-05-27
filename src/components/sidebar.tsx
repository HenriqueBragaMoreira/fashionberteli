import { CircleUserRound, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const routes = [
  {
    id: 1,
    name: 'Controle de Estoque',
    path: '/'
  },
  {
    id: 2,
    name: 'Cadastrar produtos',
    path: '/'
  },
  {
    id: 3,
    name: 'Histórico de movimentações',
    path: '/'
  },
  {
    id: 4,
    name: 'Formas de pagamento',
    path: '/'
  }
];

export function Sidebar() {
  return (
    <aside className="bg-[#FFB6A1] flex flex-col h-screen px-10 py-5 gap-5 items-center">
      <div className="flex justify-between gap-6 w-full">
        <CircleUserRound size={28} className="cursor-pointer" />
        <LogOut size={26} className="cursor-pointer" />
      </div>
      <div>
        <Image
          src="/logo.png"
          className="rounded-full px-5 py-16 bg-white"
          alt="Logo fashionberteli"
          width={210}
          height={210}
        />
      </div>
      <div className="flex flex-col gap-6 mt-4">
        {routes.map((item) => (
          <Link
            className="bg-[#FFE6D1] hover:bg-[#FFE6D1]/70 rounded-2xl py-3 px-2"
            key={item.id}
            href={item.path}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
