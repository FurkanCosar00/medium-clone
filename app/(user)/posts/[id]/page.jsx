import { createClient } from "@/utils/supabase/server";
import { addComments, like, likeDelete } from "./actions";
import "./post-detail.css";

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
        <div className="container">
            <div className="details-title">
                <h1>{post.title} </h1>

                <div className="like-section">
                    {userLiked ?
                        (
                        <form action={likeDelete}>
                            <input type="hidden" name="post_id" value={params.id} />
                            <button>Dislike</button>
                            <p>{likeCounter}</p>
                        </form>
                        )
                        :
                        (
                        <form action={like}>
                            <input type="hidden" name="post_id" value={params.id} />
                            <button>Like</button>
                            <p>{likeCounter}</p>
                        </form>
                        )
                    }
                </div>
            </div>

            <h2>{post.content}</h2>
            
            <div className="comments">
                <form action={addComments}>
                    <input type="text" name="comments" placeholder="What are your thoughts?"></input>
                    <input type="hidden" name="post_id" value={params.id} />
                    <button type="submit">Respond</button>
                </form>

                {comments.reverse().map(x =>
                    <div className="comment-item"  key={x.id}>
                        <p>{x.content}</p>
                    </div>
                )}
            </div>
        </div>
    )
}