import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    const navigation = [
      { link: "/services", text: "Cleaning Services" },
      { link: "/cleaning-process", text: "Our Cleaning Process" },
      { link: "/cleaning-tips", text: "Cleaning Tips" },
      { link: "/contact", text: "Contact Us" },
      // { link: "/special-offers", text: "Special Offers" },
      // { link: "/why", text: "Why Us" },
    ];
    return (
      <Html>
        <Head>
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Navbar navigation={navigation} />
          <Main />
          <NextScript />
          <Footer navigation={navigation} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
