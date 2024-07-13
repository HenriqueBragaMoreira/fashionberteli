import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { BadgeInfo } from 'lucide-react';

export function AllInformations() {
  return (
    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
      <BadgeInfo size={16} className="mr-1" /> Informações Gerais
    </DropdownMenuItem>
  );
}
