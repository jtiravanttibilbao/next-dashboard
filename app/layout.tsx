import { montserrat } from '@/app/ui/fonts';  
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}
      <footer className='py-10 flex justify-center items-center'>Esto es el footer</footer>
      </body>
    </html>
  );
}
