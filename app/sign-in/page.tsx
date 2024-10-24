'use client'

import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const login = async () => {
    setTimeout(() => {
      localStorage.setItem("login", "true");
      router.push("../my-page");
    }, 1000);
  };

  login();

  return (
    <div>
      <h1>Signing In</h1>
    </div>
  );
};

export default SignInPage;