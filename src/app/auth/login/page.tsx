import Image from 'next/image';
import { createClient } from '../../../lib/supabase/server';
import { redirect } from 'next/navigation';

function ThemedLogo({
  light,
  dark,
  alt,
}: {
  light: string;
  dark: string;
  alt: string;
}) {
  return (
    <>
      <Image
        className="mx-auto mb-3 block dark:hidden"
        src={light}
        width={80}
        height={80}
        alt={alt}
      />
      <Image
        className="mx-auto mb-3 hidden dark:block"
        src={dark}
        width={80}
        height={80}
        alt={alt}
      />
    </>
  );
}

export default function LoginForm() {
  const signIn = async (provider: 'github' | 'google') => {
    'use server';

    const supabase = await createClient();

    const redirectTo = `${process.env.SITE_URL}/auth/callback`;

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo,
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
          <button className="hover:bg-gray-200 dark:hover:bg-gray-800 p-8 rounded-xl cursor-pointer w-full">
            <ThemedLogo
              light="/GitHub_Invertocat_Black.png"
              dark="/GitHub_Invertocat_White.png"
              alt="GitHub logo"
            />

            <div>Sign in with GitHub</div>
          </button>
        </form>

        {/* Google */}
        <form action={signIn.bind(null, 'google')}>
          <button className="hover:bg-gray-200 dark:hover:bg-gray-800 p-8 rounded-xl cursor-pointer w-full">
            <ThemedLogo
              light="/assets/google-logo-black.png"
              dark="/google-logo-white.png"
              alt="Google logo"
            />

            <div>Sign in with Google</div>
          </button>
        </form>

      </div>
    </div>
  );
}