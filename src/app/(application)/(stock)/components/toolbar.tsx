import { Button } from '@/components/ui/button';

export function Toolbar() {
  return (
    <div>
      <div className="flex justify-between border-b border-white pb-2">
        <h1 className="text-4xl text-white font-bold">Controle de Estoque</h1>
        <Button className="bg-[#FFB6A1] hover:bg-[#FFB6A1]/80">Adicionar produto</Button>
      </div>
    </div>
  );
}
