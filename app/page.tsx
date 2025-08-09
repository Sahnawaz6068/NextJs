import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Todo app</h1>
        <br />
        <Link className="border p-2 m-4" href="/signin"> SignIn to To-do app </Link>
        <br />
        <div className="mt-8">

        <Link className="border p-2 m-4 gap-4" href="/signup">Signup to Todo app</Link>
        </div>
      </div>
    </div>
  );
}
