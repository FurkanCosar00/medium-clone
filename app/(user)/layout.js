import Header from "@/components/user/header";

export default  function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}