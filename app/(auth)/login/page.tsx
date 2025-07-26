'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Sign in</h2>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
    </div>
  );
}
