"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function like(formData) {
    const post_id = formData.get("post_id");
  
    const supabase = createClient();
    const { data : { user }  } = await supabase.auth.getUser();
  
    const { data, error } = await supabase
    .from('post_likes')
    .insert(
      { user_id: user.id, post_id: post_id },
    )
    .select()
    redirect(`/${post_id}`);
}

export async function likeDelete(formData) {
    const post_id = formData.get("post_id");
  
    const supabase = createClient();
    const { data : { user }  } = await supabase.auth.getUser();
  
    const { data, error } = await supabase
    .from('post_likes')
    .delete()
    .eq( 'post_id', post_id )
    .eq('user_id', user.id)
    redirect(`/${post_id}`);
}
  
export async function addComments(formData) {
  const content = formData.get("comments");
  const post_id = formData.get("post_id");

  const supabase = createClient();
  const { data : { user }  } = await supabase.auth.getUser();

  const { data, error } = await supabase
  .from('comments')
  .insert(
    { content, user_id: user.id, post_id: post_id }
  )
  .select()
  redirect(`/${post_id}`);
}

  