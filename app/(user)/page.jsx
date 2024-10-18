import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import "./main-page.css";

export default async function Home() {
  const supabase = createClient();
  let { data: posts } = await supabase
  .from('posts')
  .select('*')

  return (
    <div className="container">
      <div className="posts">
        {posts.map(x => 
          <Link href={`/posts/${x.id}`} className="post-item" key={x.id}>
            {/* <small>{x.user_id}</small> */}
            <h3>{x.title}</h3>
            <p>{x.content}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
