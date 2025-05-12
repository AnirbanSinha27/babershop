import './globals.css';

export const metadata = {
  title: 'PMC Barber | Premium Barber Services',
  description: 'Traditional techniques meet modern style',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}