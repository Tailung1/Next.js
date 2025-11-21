import Header from "./components/Header";
import Footer from "./components/Footer";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <StyledComponentsRegistry>
          {" "}
          {children}
        </StyledComponentsRegistry>

        <Footer />
      </body>
    </html>
  );
}
