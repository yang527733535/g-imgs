import { UserButton } from '@clerk/nextjs';
import { getAuth, buildClerkProps, clerkClient } from '@clerk/nextjs/server'
import { GetServerSideProps } from 'next'

import type { NextPage } from 'next'
import type { InferGetServerSidePropsType } from 'next'


const Page: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  return (
    <div>
      <h1>Foo</h1>
      <UserButton />
    </div>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Use `getAuth()` to get the user's ID
  const { userId } = getAuth(ctx.req)
  // Protect the route by checking if the user is signed in
  if (!userId) {
    // Handle when the user is not signed in
  }
  // Initialize the Backend SDK
  const client = await clerkClient()

  // Get the user's full `Backend User` object
  const user = userId ? await client.users.getUser(userId) : undefined

  return { props: { ...buildClerkProps(ctx.req, { user }) } }
}