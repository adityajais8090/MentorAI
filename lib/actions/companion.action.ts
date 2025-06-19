'use server';

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async( formData : CreateCompanion) => {
  const {userId: author} = await auth();
  const supabase = createSupabaseClient();
  
  const { data, error } = await supabase
  .from('companions')
  .insert({ ...formData, author })
  .select(); // <-- only this chain


    if(error || !data) throw new Error(error?.message ||  'Failed to Create a Companion');
    return data[0]; 
}