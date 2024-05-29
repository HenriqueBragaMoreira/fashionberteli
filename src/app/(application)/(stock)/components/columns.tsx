import { StockResponse } from '@/services/stock/types';
import { ColumnDef } from '@tanstack/react-table';
import { Actions } from './actions';

export const columns: ColumnDef<StockResponse>[] = [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => {
      return row.original.product.name;
    }
  },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ row }) => {
      return row.original.product.description;
    }
  },
  {
    accessorKey: 'quantity',
    header: 'Quantidade'
  },
  {
    accessorKey: 'size',
    header: 'Tamanho'
  },
  {
    accessorKey: 'sellingPrice',
    header: 'Preço de venda',
    cell: ({ row }) => {
      return row.original.product.sellingPrice;
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return <Actions />;
    }
  }
];
