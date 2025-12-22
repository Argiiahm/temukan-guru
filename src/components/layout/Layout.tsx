import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  showBottomBar?: boolean;
}

const Layout = ({ children, showFooter = true, showBottomBar = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      {showFooter && <Footer />}
      {showBottomBar && <BottomBar />}
    </div>
  );
};

export default Layout;
