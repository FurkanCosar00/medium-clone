import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  let { data: posts, } = await supabase
  .from('posts')
  .select('*')

  return (
    <div className="container">
      <div className="posts">
        {posts.map(x => 
          <div className="post-item" key={x.id}>
            <Link href={`/${x.id}`}>
              <h3>{x.title}</h3>
              <p>{x.content}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
