import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <ul>
      <li>Full Stack Solution</li>
      <li>File Based Solution</li>
      <li>Additional Features like router from next navigation</li>
      <li>Optimized render</li>

      </ul>
    </div>
  );
}
