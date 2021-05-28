import { signIn, signOut, useSession, getSession } from 'next-auth/client';

export default function Page({session}) {
  //const [ session, loading ] = useSession();

  console.log(session);

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
  return {
    props: {session}, // will be passed to the page component as props
  }
}