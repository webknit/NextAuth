import { signIn, signOut, useSession } from 'next-auth/client';

export default function Test(session) {
  
    console.log(session);

  return <>
    <h1>test</h1>
  </>
}