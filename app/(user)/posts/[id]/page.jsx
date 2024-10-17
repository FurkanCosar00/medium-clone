import { createClient } from "@/utils/supabase/server";
import { addComments, like, likeDelete } from "./actions";

export default async function PostDetailPage({ params }) {
    const supabase = createClient();
    const { data : { user }  } = await supabase.auth.getUser();

    const { data: post } = await supabase.from("posts")
    .select()
    .eq("id", params.id)
    .single();

    let { data: likes } = await supabase
    .from('post_likes')
    .select()
    .eq('post_id', params.id);

    const userLiked = likes.find(like => like.user_id === user.id);
    const likeCounter = likes ? likes.length : 0;

    let { data: comments } = await supabase
    .from('comments')
    .select()
    .eq("post_id", params.id)

    return (
        <div className="detail">
            <h1>{post.title} </h1>
            <h2>{post.content}</h2>
            
            {userLiked ?
                (
                <form action={likeDelete}>
                    <input type="hidden" name="post_id" value={params.id} />
                    <button>beğenme</button>
                </form>
                )
                :
                (
                <form action={like}>
                    <input type="hidden" name="post_id" value={params.id} />
                    <button>beğen</button>
                </form>
                )
            }

            <p>{likeCounter}</p>

            <form action={addComments}>
                <textarea name="comments" placeholder="Yorumunuzu yazın..."></textarea>
                <input type="hidden" name="post_id" value={params.id} />
                <button type="submit">Yorumu Gönder</button>
            </form>

            {comments.reverse().map(x =>
                <p key={x.id}>{x.content}</p>
            )}
        </div>
    )
}