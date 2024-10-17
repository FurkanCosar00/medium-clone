import Header from "@/components/user/Header/Header";

export default  function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}