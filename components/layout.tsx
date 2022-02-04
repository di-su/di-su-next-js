import Footer from "./footer";
import Nav from "./nav";

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
