import { signOut } from "@/app/login/actions";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = createClient();
  const { data: {user} } = await supabase.auth.getUser();

  return (
    <header className="header">
        <h1>Medium</h1>

        <form action="">
          <button className="write-button">Write</button>
        </form>

        <form action={signOut}>
          <button>Log Out</button>
        </form>
    </header>
  )
}