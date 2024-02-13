import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
      <h1 className="h1-bold">hello this is devoverflow</h1>
    </div>
  );
}
