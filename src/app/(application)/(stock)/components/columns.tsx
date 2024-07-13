import { ProductResponse } from '@/services/product/types';
import { ColumnDef } from '@tanstack/react-table';
import { Actions } from './actions';

export const columns: ColumnDef<ProductResponse>[] = [
  {
    accessorKey: 'product',
    header: 'Produto',
    cell: ({ row }) => {
      return row.original.name;
    }
  },
  {
    accessorKey: 'color',
    header: 'Cor do produto'
  },
  {
    accessorKey: 'size',
    header: 'Tamanho'
  },
  {
    accessorKey: 'sellingPrice',
    header: 'Preço de venda',
    cell: ({ row }) => {
      return <span>R${row.original.sellingPrice}</span>;
    }
  },
  {
    accessorKey: 'costPrice',
    header: 'Preço de custo',
    cell: ({ row }) => {
      return <span>R${row.original.costPrice}</span>;
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
