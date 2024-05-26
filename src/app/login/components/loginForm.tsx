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
import { Input } from '@/components/ui/input';
import { useLogin } from '@/hooks/useLogin';

export function LoginForm() {
  const { form } = useLogin();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl px-10 py-5 w-[490px]">
        <Form {...form}>
          <form className="flex flex-col gap-4" onSubmit={form.handleSubmit((a) => console.log(a))}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Usuário:</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu usuário." {...field} />
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
                    <Input placeholder="Digite sua senha." {...field} />
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
