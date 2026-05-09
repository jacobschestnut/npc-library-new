import Image from 'next/image';
import { createClient } from '../../../lib/supabase/server';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function LoginForm() {
  const signIn = async (provider: 'github' | 'google') => {
    'use server';

    const supabase = await createClient();

    const headersList = await headers();
    const origin = headersList.get('origin');

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      console.error(error);
      return;
    }

    return redirect(data.url);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex gap-4">

        {/* GitHub */}
        <form action={signIn.bind(null, 'github')}>
          <button className="hover:bg-gray-800 p-8 rounded-xl cursor-pointer w-full">
            <Image
              className="mx-auto mb-3"
              src="/github-mark-white.png"
              width={80}
              height={80}
              alt="GitHub logo"
            />

            <div>Sign in with GitHub</div>
          </button>
        </form>

        {/* Google */}
        <form action={signIn.bind(null, 'google')}>
          <button className="hover:bg-gray-800 p-8 rounded-xl cursor-pointer w-full">
            <Image
              className="mx-auto mb-3"
              src="/google-logo.png"
              width={80}
              height={80}
              alt="Google logo"
            />

            <div>Sign in with Google</div>
          </button>
        </form>

      </div>
    </div>
  );
}