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
import { outputsService } from '@/services/outputs';
import { paymentService } from '@/services/payment';
import { ProductResponse } from '@/services/product/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

interface handleOutputProductProps {
  quantity: string;
  price: string;
  totalPaid: string;
  productId: string;
  paymentId: number;
  method: string;
}

const FormProductOutputSchema = z.object({
  quantity: z
    .string()
    .min(1, 'Digite uma quantidade válida!')
    .refine(
      (val) => {
        const regex = /^-?\d+([.,]\d+)?$/;
        return regex.test(val);
      },
      {
        message: 'Digite somente números!'
      }
    ),
  price: z
    .string()
    .min(1, 'Digite um valor!')
    .refine(
      (val) => {
        const regex = /^-?\d+([.,]\d+)?$/;
        return regex.test(val);
      },
      {
        message: 'Digite somente números!'
      }
    )
    .transform((val) => {
      return val.replace(',', '.');
    }),
  totalPaid: z
    .string()
    .min(1, 'Digite um valor!')
    .refine(
      (val) => {
        const regex = /^-?\d+([.,]\d+)?$/;
        return regex.test(val);
      },
      {
        message: 'Digite somente números!'
      }
    )
    .transform((val) => {
      return val.replace(',', '.');
    }),
  productId: z.string().min(1, 'Selecione um produto!'),
  paymentId: z.number(),
  method: z.string()
});

const formSchema = z.object({
  outputs: z.array(FormProductOutputSchema)
});

export function FormProductOutput() {
  const { data } = useQuery({
    queryKey: ['paymentMethods'],
    queryFn: async () => {
      return await paymentService.get();
    }
  });

  const products = queryClient.getQueryData<ProductResponse[]>(['products']);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      outputs: [
        { quantity: '1', price: '1', totalPaid: '1', productId: '', paymentId: 0, method: '' }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'outputs'
  });

  async function handleOutputProduct(data: handleOutputProductProps[]) {
    const updatePayload = data.map((item) => ({
      quantity: Number(item.quantity),
      price: Number(item.price),
      totalPaid: Number(item.totalPaid),
      productId: Number(item.productId),
      paymentId: item.paymentId,
      method: item.method
    }));
    try {
      await outputsService.post(updatePayload);
      toast({
        variant: 'success',
        title: 'Sucesso',
        description: 'Saída realizada com sucesso!'
      });
      queryClient.invalidateQueries({
        queryKey: ['products']
      });
      handleCloseDialog();
    } catch {
      toast({
        variant: 'error',
        title: 'Erro',
        description: 'Saída não realizada!'
      });
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit((data) => handleOutputProduct(data.outputs))}
      >
        <ScrollArea className="max-h-96">
          {fields.map((field, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex gap-2 flex-col">
                <div className="flex items-end gap-4">
                  <FormField
                    control={form.control}
                    name={`outputs.${index}.productId`}
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
                    name={`outputs.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="font-bold">Quantidade de saída:</FormLabel>
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
                    name={`outputs.${index}.price`}
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
              <div className="flex gap-2 flex-col">
                <div key={field.id} className="flex gap-4">
                  <FormField
                    control={form.control}
                    name={`outputs.${index}.totalPaid`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="font-bold">Total pago:</FormLabel>
                        <FormControl>
                          <TextField.Input
                            className="font-bold"
                            placeholder="Digite o total pago"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`outputs.${index}.method`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="font-bold">Método de pagamento:</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            const selectedMethod = data?.find(
                              (item) => item.id.toString() === value
                            );
                            form.setValue(
                              `outputs.${index}.paymentId`,
                              selectedMethod?.id as number
                            );
                            field.onChange(selectedMethod?.method);
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="max-w-56">
                              <SelectValue placeholder="Selecione o método de pagamento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {data?.map((item) => (
                              <SelectItem key={item.id} value={item.id.toString()}>
                                {item.method}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex gap-4">
          <Button
            type="button"
            className="w-full bg-[#e69e8b] hover:bg-[#e69e8b]/80"
            onClick={() =>
              append({
                productId: '',
                quantity: '1',
                price: '1',
                totalPaid: '1',
                paymentId: 0,
                method: ''
              })
            }
          >
            Adicionar Produto
          </Button>
          <Button
            loading={form.formState.isSubmitting}
            className="w-full bg-white text-black hover:bg-white/70"
            type="submit"
          >
            Dar saida
          </Button>
        </div>
      </form>
    </Form>
  );
}
