import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ArchiveRestore } from 'lucide-react';
import { FormProductOutput } from './form/formProductOutput';

export function ProductOutput() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-[#FFB6A1] hover:bg-[#FFB6A1]/80">
          <ArchiveRestore size={16} className="mr-1" /> Saída de Produto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Saída de Produto</DialogTitle>
        </DialogHeader>
        <FormProductOutput />
      </DialogContent>
    </Dialog>
  );
}
