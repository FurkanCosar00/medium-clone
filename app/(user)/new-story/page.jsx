import { SavePost } from "./actions";

export default function NewPost() {
    return (
        <form action={SavePost}>
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="content" placeholder="Tell your story..."/>
            <button>Publish</button>
        </form>
    )
}