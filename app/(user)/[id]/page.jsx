import { createClient } from "@/utils/supabase/server";

export default async function PostDetailPage({ params }) {
    const supabase = createClient();
    
    const { data: post } = await supabase.from("posts")
      .select()
      .eq("id", params.id)
      .single();

    if (!post) {
        return notFound();    
    }

    return (
        <div className="detail">
            <h1>{post.title} </h1>
            <h2>{post.content}</h2>
        </div>
    )
}