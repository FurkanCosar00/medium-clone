import { signOut } from "@/app/login/actions";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./header.css"
import { redirect } from "next/navigation";

export default async function Header() {
  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  return (
    <header className="header">
      <Link href="/"><h1>Medium</h1></Link>

      <ul className="navigation">
        <li><Link href="/new-story">Write</Link></li>
        <li><form action={signOut}><button>Log Out</button></form></li>
        <li><Link href={`/profile/${"@" + user.email.split("@")[0]}`}>profile</Link></li>
      </ul>
    </header>
  )
}