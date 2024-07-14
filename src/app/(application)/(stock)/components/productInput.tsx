import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Inbox } from 'lucide-react';
import { FormProductInput } from './form/formProductInput';

export function ProductInput() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-[#FFB6A1] hover:bg-[#FFB6A1]/80">
          <Inbox size={16} className="mr-1" /> Entrada de Produto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Entrada de Produto</DialogTitle>
        </DialogHeader>
        <FormProductInput />
      </DialogContent>
    </Dialog>
  );
}
