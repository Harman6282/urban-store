import Footer from "@/components/footer";
import Header from "@/components/shared/header";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper">
             {children}
             <Toaster position="bottom-right" />
        </main>
        <Footer/>

      </div>
    );
  }
  