import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  //const [ session, loading ] = useSession();
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // const session = await getSession(context);
  // return {
  //   props: { session }, // will be passed to the page component as props
  // };
  return {
    props: {},
  };
}
