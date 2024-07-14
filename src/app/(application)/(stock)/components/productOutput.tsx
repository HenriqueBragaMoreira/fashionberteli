import { Button } from '@/components/ui/button';
import { ArchiveRestore } from 'lucide-react';

export function ProductOutput() {
  return (
    <Button className="gap-2 bg-[#FFB6A1] hover:bg-[#FFB6A1]/80">
      <ArchiveRestore size={16} className="mr-1" /> Saída de Produto
    </Button>
  );
}
