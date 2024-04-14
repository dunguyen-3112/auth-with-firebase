import useAuth from "@/hooks/useAuth";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <div className="flex-1 flex justify-center items-center h-screen relative">
      <button
        onClick={signOut}
        className="bg-green-100 px-4 py-2 absolute top-5 right-5 rounded-md text-blue-300 font-bold"
      >
        Sign Out
      </button>
      <h1 className="font-bold text-4xl text-green-500">Home Page</h1>
    </div>
  );
}
