import { SignIn, SignUp } from "@clerk/nextjs";

export default function Page() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  //  const { user } = useUser()
//   if (!user) return <SignIn />
  return (
    <>
     <SignIn />
     <SignUp forceRedirectUrl='/sign-in-success' />
    </>
  );
}
