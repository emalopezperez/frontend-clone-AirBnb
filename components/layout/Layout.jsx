import Head from "next/head";
import Nav from "../nav/Nav";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>{`AirBnb- ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Nav />
      {children}
      
    </>
  );
};

export default Layout;
