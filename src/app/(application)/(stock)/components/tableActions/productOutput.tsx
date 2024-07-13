import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ArchiveRestore } from 'lucide-react';

export function ProductOutput() {
  return (
    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
      <ArchiveRestore size={16} className="mr-1" /> Saída de Produto
    </DropdownMenuItem>
  );
}
