import { createClient } from '@supabase/supabase-js'

import { env } from '@/env'


const SUPABASE_URL = env.SUPABASE_URL;
const SUPABASE_ANON_KEY = env.SUPABASE_ANON_KEY;


// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// Upload file using standard upload
export async function uploadFile(file: File) {
  const { data, error } = await supabase
    .storage
    .from('users_display_pic')
    .upload("/src/app/(pages)/new/_components/User-form.tsx", file, {
      upsert: true,
      contentType: "image/jpeg"
    })

  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}
