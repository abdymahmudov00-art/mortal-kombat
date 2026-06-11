
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./layout.scss";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
