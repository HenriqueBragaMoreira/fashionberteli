import { ProductResponse } from '@/services/product/types';
import { CellContext, ColumnDef } from '@tanstack/react-table';
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
    accessorKey: 'quantity',
    header: 'Quantidade',
    cell: ({ row }) => {
      return row.original.stocks.map((item) => item.quantity);
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
    cell: ({ row }: CellContext<ProductResponse, unknown>) => {
      const inf = row.original;

      return <Actions row={inf} />;
    }
  }
];
