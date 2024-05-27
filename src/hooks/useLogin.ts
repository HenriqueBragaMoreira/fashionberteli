import { useToast } from '@/components/ui/use-toast';
import { authCookieOptions, authToken } from '@/constants/auth';
import { authService } from '@/services/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loignSchema = z.object({
  username: z.string().min(1, 'Digite um usuário válido!'),
  password: z.string().min(1, 'Digite uma senha válida!')
});

export function useLogin() {
  const form = useForm({
    resolver: zodResolver(loignSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const route = useRouter();
  const { toast } = useToast();

  const handleSingIn = form.handleSubmit(async (data) => {
    try {
      const res = await authService.login(data);
      form.reset();
      setCookie(null, authToken, res.token.accessToken, authCookieOptions);
      toast({
        variant: 'success',
        title: 'Sucesso',
        description: 'Login feito com sucesso'
      });
      route.push('/');
    } catch (error) {
      toast({
        variant: 'error',
        title: 'Erro ao fazer login',
        description: 'Tente novamente!'
      });
    }
  });

  return {
    form,
    handleSingIn
  };
}
