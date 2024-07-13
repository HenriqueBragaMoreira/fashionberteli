import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { RotateCw } from 'lucide-react';

export function UpdateProduct() {
  return (
    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
      <RotateCw size={16} className="mr-1" /> Atualizar Produto
    </DropdownMenuItem>
  );
}
