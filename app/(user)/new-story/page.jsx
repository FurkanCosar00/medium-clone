import { SavePost } from "./actions";
import "./new-story.css"

export default function NewPost() {
    return (
        <form action={SavePost} className="new-story">
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="content" placeholder="Tell your story..."/>
            <button>Publish</button>
        </form>
    )
}