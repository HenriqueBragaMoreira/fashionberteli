import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';

export function Toolbar() {
  return (
    <div>
      <div className="flex justify-between border-b border-gray-400 pb-2">
        <h1 className="text-4xl font-bold">Controle de Estoque</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-[#FFB6A1] hover:bg-[#FFB6A1]/80">
              Adicionar produto
              <PlusCircle />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
