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
import { TextField } from '@/components/ui/textfield';
import { toast } from '@/components/ui/use-toast';
import { queryClient } from '@/lib/react-query';
import { productService } from '@/services/product';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type handleCreateNewProductProps = {
  name: string;
  description: string;
  type: string;
  color: string;
  size: string;
  costPrice: string;
  sellingPrice: string;
};

const FormCreateProductSchema = z.object({
  name: z.string().min(1, 'Digite um nome válido!'),
  description: z.string().optional(),
  type: z.string().min(1, 'Digite um tipo válido!'),
  color: z.string().min(1, 'Digite uma cor válida!'),
  size: z.string().min(1, 'Digite um tamanho válido!'),
  costPrice: z
    .string()
    .min(1, 'Digite um valor de compra!')
    .refine(
      (val) => {
        const regex = /^-?\d+([.,]\d+)?$/;
        return regex.test(val);
      },
      {
        message: 'The string must contain a valid number'
      }
    )
    .transform((val) => {
      return val.replace(',', '.');
    }),
  sellingPrice: z
    .string()
    .min(1, 'Digite um valor de venda!')
    .refine(
      (val) => {
        const regex = /^-?\d+([.,]\d+)?$/;
        return regex.test(val);
      },
      {
        message: 'The string must contain a valid number'
      }
    )
    .transform((val) => {
      return val.replace(',', '.');
    })
});

export function FormCreateProduct() {
  const form = useForm({
    resolver: zodResolver(FormCreateProductSchema),
    defaultValues: {
      name: '',
      description: '',
      type: '',
      color: '',
      size: '',
      costPrice: '',
      sellingPrice: ''
    }
  });

  async function handleCreateNewProduct(data: handleCreateNewProductProps) {
    try {
      await productService.post(data);
      toast({
        variant: 'success',
        title: 'Sucesso',
        description: 'Produto cadastrado com sucesso'
      });
      queryClient.invalidateQueries({
        queryKey: ['products']
      });
      handleCloseDialog();
    } catch {
      toast({
        variant: 'error',
        title: 'Erro',
        description: 'Erro ao cadastrar produto!'
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit((data) => handleCreateNewProduct(data))}
      >
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Nome do produto:</FormLabel>
                <FormControl>
                  <TextField.Input className="font-bold" placeholder="Digite o nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Descrição do produto:</FormLabel>
                <FormControl>
                  <TextField.Input
                    className="font-bold"
                    placeholder="Digite uma breve descrição"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Tipo do produto:</FormLabel>
                <FormControl>
                  <TextField.Input
                    className="font-bold"
                    placeholder="Digite o tipo de produto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Tamanho do produto:</FormLabel>
                <FormControl>
                  <TextField.Input
                    className="font-bold"
                    placeholder="Digite o tamanho da peça"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="font-bold">Cor do produto:</FormLabel>
              <FormControl>
                <TextField.Input
                  className="font-bold"
                  placeholder="Digite a cor do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="sellingPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Preço de venda:</FormLabel>
                <FormControl>
                  <TextField.Input
                    className="font-bold"
                    placeholder="Digite o preço de venda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="costPrice"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-bold">Preço de compra:</FormLabel>
                <FormControl>
                  <TextField.Input
                    className="font-bold"
                    placeholder="Digite o preço de compra"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          loading={form.formState.isSubmitting}
          className="bg-white text-black font-bold hover:bg-white/70"
          type="submit"
        >
          Criar Produto
        </Button>
      </form>
    </Form>
  );
}
