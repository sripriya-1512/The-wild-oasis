import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 3000;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
        },
      },
    });

    if (error) {
      if (
        error.message.includes("email rate limit exceeded") &&
        attempt < MAX_RETRIES
      ) {
        console.warn(`Rate limit exceeded. Retrying attempt ${attempt}...`);

        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        continue;
      }

      console.error("Signup error:", error);
      throw new Error(error.message);
    }

    return data;
  }
  throw new Error(
    "Failed to sign up after multiple attempts due to rate limiting."
  );
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session || !session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData = {};
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. update avatar in the user itself
  const avatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: avatarUrl,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
