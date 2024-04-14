import Button from "@/components/Button";
import { AuthUser, signIn } from "@/services/auth";
import { FormEvent, useTransition } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [isPending] = useTransition();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as unknown as AuthUser;

    const user = await signIn(data);

    if (user) {
      console.log(user);
    }
  };

  console.log({ isPending });

  return (
    <div className="h-screen flex-1 flex justify-center items-center">
      {isPending && <h2>Loading...</h2>}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 py-10 px-14 rounded-lg flex flex-col gap-8 w-[80%] md:w-[500px]"
      >
        <h1 className="text-gray-500 font-bold text-4xl">Sign in</h1>
        <label className="flex-1 flex flex-col gap-2 items-start">
          <span className="font-semibold text-md">Email</span>
          <input
            type="email"
            name="email"
            className="w-full py-2 px-4 rounded-md outline-blue-400 font-semibold text-gray-300"
            required
          />
        </label>

        <label className="flex-1 flex flex-col gap-2 items-start">
          <span className="font-semibold text-md">Password</span>
          <input
            type="password"
            name="password"
            className="w-full py-2 px-4 rounded-md outline-blue-400 font-semibold text-gray-300"
            required
          />
        </label>

        <div className="flex justify-between flex-col gap-2">
          <Button
            type="submit"
            className="bg-orange-300 px-5 py-2 rounded-md text-white font-bold w-full"
          >
            Sign In
          </Button>

          <p>
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
