export type StockResponse = {
  product: Product;
  quantity: number;
  size: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  sellingPrice: string;
};
