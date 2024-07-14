import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { TextField } from '@/components/ui/textfield';
import { ProductResponse } from '@/services/product/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { BadgeInfo } from 'lucide-react';

type AllInformationsProps = {
  row: ProductResponse;
};

export function AllInformations({ row }: AllInformationsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <BadgeInfo size={16} className="mr-1" /> Informações Gerais
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informações Gerais</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-right">Nome do produto:</Label>
            <TextField.Input
              disabled
              value={row.name}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Quantidade:</Label>
            <TextField.Input
              disabled
              value={row.stocks[0].quantity}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Descrição:</Label>
            <TextField.Input
              disabled
              value={row.description}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Tamanho:</Label>
            <TextField.Input
              disabled
              value={row.size}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Cor:</Label>
            <TextField.Input
              disabled
              value={row.color}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Tipo do produto:</Label>
            <TextField.Input
              disabled
              value={row.type}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Preço de venda:</Label>
            <TextField.Input
              disabled
              value={`R$${row.sellingPrice}`}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
          <div>
            <Label className="text-right">Preço de compra:</Label>
            <TextField.Input
              disabled
              value={`R$${row.costPrice}`}
              placeholder="Digite um novo nome para o produto"
              className="font-bold col-span-3"
            />
          </div>
        </div>
        <div>
          <Label className="text-right">Criado em:</Label>
          <TextField.Input
            disabled
            value={format(new Date(row.createdAt), 'dd/MM/yyyy HH:mm:ss', {
              locale: ptBR
            })}
            placeholder="Digite um novo nome para o produto"
            className="font-bold col-span-3"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
