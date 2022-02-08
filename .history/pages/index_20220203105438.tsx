import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import Center from "../components/Center"
import login from "../login"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
