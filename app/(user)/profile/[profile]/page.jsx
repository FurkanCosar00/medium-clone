import { createClient } from "@/utils/supabase/server";
import "./profile.css";
import Link from "next/link";

export default async function Profile({ params }) {
    const supabase = createClient();
    const { data : { user }  } = await supabase.auth.getUser();

    let { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('user_id', user.id);
    console.log(posts)

    return (
        <div className="container">
            <div className="user-info">
                <h1>{user.email}</h1>
            </div>

            <div className="user-posts">
                {posts.map((x, i) => 
                    <Link href={`/posts/${x.id}`} className="post-item" key={i}>
                        <h3>{x.title}</h3>
                        <p>{x.content}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}