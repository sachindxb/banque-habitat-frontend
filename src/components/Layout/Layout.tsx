// Layout.tsx
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}