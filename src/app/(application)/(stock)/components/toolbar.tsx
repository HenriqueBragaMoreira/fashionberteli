import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { FormCreateProduct } from './form/formCreateProduct';

export function Toolbar() {
  return (
    <div>
      <div className="flex justify-between border-b border-gray-400 pb-2">
        <h1 className="text-4xl font-bold">Controle de Estoque</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-[#FFB6A1] hover:bg-[#FFB6A1]/80">
              Criar produto
              <PlusCircle />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar novo produto</DialogTitle>
            </DialogHeader>
            <FormCreateProduct />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
