// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

