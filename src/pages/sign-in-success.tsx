import { UserButton, useUser } from '@clerk/nextjs';
import { api } from '~/utils/api';
import {useAsyncEffect } from 'ahooks'
import { useToast } from '~/hooks/use-toast';
import { Button } from '~/components/ui/button';
import { useEffect } from 'react';
import { ToastAction } from '~/components/ui/toast';
const Page = () => {

    // TODO: 在这里处理我的业务逻辑
    // 1. 获取用户信息
    // 2. 存入数据库
    // 3. 跳转页面  
    const {mutateAsync} = api.user.create.useMutation()
    const { toast } = useToast()
    const { user } = useUser()
    
    // useAsyncEffect(async()=>{
    //     if(user){
    //      try{
    //         const userParam = {
    //             id: user.id,
    //             username: user.username ?? "", 
    //             email: user.emailAddresses[0]?.emailAddress ?? '',
    //             avatarUrl: user.imageUrl ?? ""
    //          }
    //          console.log("🚀 ~ Page ~ userParam:", userParam)
    //          const data =await mutateAsync(userParam)
    //          console.log("🚀 ~ useAsyncEffect ~ data:", data)
    //      }catch(err){
    //         console.log("🚀 ~ Page ~ err:", err)
    //         toast({
    //             variant: "destructive",
    //             title: "Uh oh! Something went wrong.",
    //             description:"Something went wrong. Please try again later."
    //             // description: err.message,
    //             // action: <ToastAction altText="Try again">Try again</ToastAction>,
    //           })
    //      }
    //     }
    // },[user])


  return (
    <div>
      <h1>注册成功</h1>
      <UserButton />
      <Button
      onClick={()=>{
        toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          })
      }}
      >Button</Button>
    </div>
  );
};

export default Page;

