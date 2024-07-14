import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ProductResponse } from '@/services/product/types';
import { MoreHorizontal } from 'lucide-react';
import { AllInformations, UpdateProduct } from './tableActions';

type ActionsProps = {
  row: ProductResponse;
};

export function Actions({ row }: ActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger title="Mais ações">
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mais Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <AllInformations row={row} />
        <UpdateProduct />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
