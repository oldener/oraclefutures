
import * as Dialog from '@radix-ui/react-dialog';
import { X, User, Mail, Key } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (!isLogin && password !== confirmPassword) {
      setError(t?.auth?.passwordMismatch);
      setIsLoading(false);
      return;
    }

    const endpoint = isLogin ? 'login' : 'register';
    const body = isLogin ? { email, password } : { username, email, password };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `${isLogin ? 'Помилка входу' : 'Помилка реєстрації'}`);
      }

      if (isLogin) {
        setSuccess(t?.auth?.loginSuccess);
        localStorage.setItem('token', data.token);
      } else {
        setSuccess(t?.auth?.registerSuccess);
      }

      setTimeout(() => {
        onOpenChange(false);
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="relative p-8 bg-[#0a0a14]/90 border border-[#FF6B00]/30 rounded-lg shadow-2xl shadow-[#FF6B00]/10">
              <Dialog.Title className="text-2xl font-bold text-white text-center uppercase tracking-widest glow-orange mb-2">
                {isLogin ? t?.auth?.loginAction : t?.auth?.title}
              </Dialog.Title>
              <Dialog.Description className="text-gray-400 text-center mb-6">
                {isLogin ? t?.auth?.welcomeBack : t?.auth?.joinNetwork}
              </Dialog.Description>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder={t?.auth?.username}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition"
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder={t?.auth?.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition"
                  />
                </div>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    placeholder={t?.auth?.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={isLogin ? undefined : 8}
                    className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition"
                  />
                </div>
                {!isLogin && (
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="password"
                      placeholder={t?.auth?.confirm}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-[#FF6B00] focus:border-[#FF6B00] transition"
                    />
                  </div>
                )}
                
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                {success && <p className="text-green-500 text-sm text-center">{success}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#FF6B00] hover:bg-[#ff801a] border border-[#FF6B00]/50 rounded-md transition-all text-white uppercase tracking-wider text-sm mono-numeric disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (isLogin ? t?.auth?.loadingLogin : t?.auth?.loadingRegister) : (isLogin ? t?.auth?.loginAction : t?.auth?.submit)}
                </button>
              </form>

              <div className="text-center mt-4">
                <button onClick={() => setIsLogin(!isLogin)} className="text-sm text-gray-400 hover:text-white transition">
                  {isLogin ? t?.auth?.promptRegister : t?.auth?.promptLogin}
                </button>
              </div>

              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
                  <X className="w-6 h-6" />
                </button>
              </Dialog.Close>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
