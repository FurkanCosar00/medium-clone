import "./globals.css";

export const metadata = {
  title: "Medium Clone App",
  description: "Everyone has a story to tell. Medium is a home for human",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
