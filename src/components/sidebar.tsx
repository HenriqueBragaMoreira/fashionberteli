'use client';
import { authToken } from '@/constants/auth';
import { CircleUserRound, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { destroyCookie } from 'nookies';
import { toast } from './ui/use-toast';

export const routes = [
  {
    id: 1,
    name: 'Controle de Estoque',
    path: '/'
  },
  {
    id: 2,
    name: 'Histórico de movimentações',
    path: '/'
  },
  {
    id: 3,
    name: 'Formas de pagamento',
    path: '/'
  }
];

export function Sidebar() {
  const router = useRouter();

  function handleSignOut() {
    destroyCookie(null, authToken);
    toast({
      variant: 'success',
      title: 'Sucesso',
      description: 'Você será redirecionado em alguns segundos'
    });
    router.push('/login');
  }

  return (
    <aside className="bg-[#FFB6A1] flex flex-col px-10 py-5 gap-5 items-center min-h-screen">
      <div className="flex justify-between gap-6 w-full">
        <CircleUserRound size={28} className="cursor-pointer" />
        <LogOut
          onClick={() => handleSignOut()}
          size={26}
          className="cursor-pointer hover:text-black/40"
        />
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
            href={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
