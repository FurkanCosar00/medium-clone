import { signOut } from "@/app/login/actions";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Header() {
  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  return (
    <header className="header">
        <Link href="/"><h1>Medium</h1></Link>

        <Link href="new-story">Write</Link>

        <form action={signOut}>
          <button>Log Out</button>
        </form>
    </header>
  )
}