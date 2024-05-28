'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { TextField } from '@/components/ui/textfield';
import { useLogin } from '@/hooks/useLogin';
import Image from 'next/image';

export function LoginForm() {
  const { form, handleSingIn } = useLogin();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl px-10 py-5 w-[490px]">
        <div className="flex justify-center items-center pt-4 pb-5">
          <Image src="/logo.png" alt="Logo fashionberteli" width={220} height={220} />
        </div>
        <Form {...form}>
          <form className="flex flex-col gap-4" onSubmit={handleSingIn}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Usuário:</FormLabel>
                  <FormControl>
                    <TextField.Input placeholder="Digite seu usuário." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Senha:</FormLabel>
                  <FormControl>
                    <TextField.Password placeholder="Digite sua senha." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center mt-6">
              <Button className="bg-[#E59688] hover:bg-[#E59688]/80 w-full" type="submit">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
