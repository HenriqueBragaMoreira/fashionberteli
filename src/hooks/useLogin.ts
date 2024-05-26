import { zodResolver } from '@hookform/resolvers/zod';
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

  return {
    form
  };
}
