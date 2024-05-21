import Header from "./Header";
import Footer from "./Footer";

interface FrontLayoutProps {}

export default function FrontLayout({ children }: React.PropsWithChildren<FrontLayoutProps>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
