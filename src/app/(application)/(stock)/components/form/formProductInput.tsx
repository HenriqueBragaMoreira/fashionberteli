import { Button } from '@/components/ui/button';
import { handleCloseDialog } from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { TextField } from '@/components/ui/textfield';
import { toast } from '@/components/ui/use-toast';
import { queryClient } from '@/lib/react-query';
import { inputsService } from '@/services/inputs';
import { ProductResponse } from '@/services/product/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

type handleInputProductProps = {
  productId: string;
  quantity: number;
  price: number;
};

const FormProductInputSchema = z.object({
  productId: z.string().min(1, 'Selecione um produto!'),
  quantity: z.number().min(1, 'Digite uma quantidade válida!'),
  price: z.number().min(1, 'Digite um valor!')
});

const formSchema = z.object({
  inputs: z.array(FormProductInputSchema)
});

export function FormProductInput() {
  const products = queryClient.getQueryData<ProductResponse[]>(['products']);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputs: [{ productId: '', quantity: 1, price: 1 }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'inputs'
  });

  async function handleInputProduct(data: handleInputProductProps[]) {
    const updatedPayload = data.map((item) => ({
      ...item,
      productId: Number(item.productId)
    }));
    try {
      await inputsService.post(updatedPayload);
      toast({
        variant: 'success',
        title: 'Sucesso',
        description: 'Entrada realizada com sucesso!'
      });
      handleCloseDialog();
    } catch {
      toast({
        variant: 'error',
        title: 'Erro',
        description: 'Entrada não realizada!'
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit((data) => handleInputProduct(data.inputs))}
      >
        <ScrollArea className="max-h-96">
          {fields.map((field, index) => (
            <div key={index} className="flex gap-2 flex-col">
              <div className="flex items-end gap-4">
                <FormField
                  control={form.control}
                  name={`inputs.${index}.productId`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-bold">Produto:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o produto o qual você quer dar entrada" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {products?.map((item) => (
                            <SelectItem key={item.id} value={item.id.toString()}>
                              {item.name} - {item.color} - {item.size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="outline" size="icon" onClick={() => remove(index)}>
                  <X />
                </Button>
              </div>
              <div key={field.id} className="flex gap-4">
                <FormField
                  control={form.control}
                  name={`inputs.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-bold">Quantidade de entrada:</FormLabel>
                      <FormControl>
                        <TextField.Input
                          className="font-bold"
                          placeholder="Digite a quantidade"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`inputs.${index}.price`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-bold">Preço:</FormLabel>
                      <FormControl>
                        <TextField.Input
                          className="font-bold"
                          placeholder="Digite o preço"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex gap-4">
          <Button
            className="w-full bg-[#e69e8b] hover:bg-[#e69e8b]/80"
            onClick={() => append({ productId: '', quantity: 1, price: 1 })}
          >
            Adicionar Entrada
          </Button>
          <Button
            loading={form.formState.isSubmitting}
            className="w-full bg-white text-black hover:bg-white/70"
            type="submit"
          >
            Dar entrada
          </Button>
        </div>
      </form>
    </Form>
  );
}
