import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Inbox } from 'lucide-react';

export function ProductInput() {
  return (
    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
      <Inbox size={16} className="mr-1" /> Entrada de Produto
    </DropdownMenuItem>
  );
}
