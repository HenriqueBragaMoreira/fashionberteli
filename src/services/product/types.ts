export type ProductResponse = {
  id: number;
  name: string;
  description: string;
  type: string;
  color: string;
  size: string;
  costPrice: number;
  sellingPrice: number;
  createdAt: string;
  stocks: Stock[];
};

type Stock = {
  quantity: number;
  size: string;
};

export type PostProps = {
  name: string;
  description: string;
  type: string;
  color: string;
  size: string;
  costPrice: string;
  sellingPrice: string;
};
