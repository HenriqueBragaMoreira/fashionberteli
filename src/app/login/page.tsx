import { Metadata } from 'next';
import { LoginForm } from './components/loginForm';

export const metadata: Metadata = {
  title: 'Login'
};

export default function LoginPage() {
  return (
    <div className="px-8">
      <LoginForm />
    </div>
  );
}
