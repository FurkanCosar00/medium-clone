import Header from "@/components/user/Header/Header";

export default function RootLayout({ children }) {
  return (
    <>
        <Header />
        
        <div>
            {children}
        </div>
    </>
  );
}
