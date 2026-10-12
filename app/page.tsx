import Posts from "./components/Posts";
import PostButton from "./components/PostButton";

// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <h1 className="text-4xl font-bold mb-1">Welcome to ProgForum!</h1>

      <div className="relative flex min-h-screen flex-col items-center justify-start p-8 bg-gray-100 rounded-lg shadow-md mt-6 w-full h-auto max-w-4xl">
        <PostButton className="absolute top-4 right-4" />
        <Posts className="mt-4" />
      </div>

<<<<<<< HEAD
      <div className="relative flex min-h-screen flex-col items-center justify-start p-8 bg-gray-100 rounded-lg shadow-md mt-6 w-full h-auto max-w-4xl">
        <PostButton className="absolute bottom-4 right-4" />
        <Posts className="mt-1" />
      </div>
      <div className="relative flex min-h-screen flex-col items-center justify-start p-8 bg-gray-100 rounded-lg shadow-md mt-6 w-full h-auto max-w-4xl">
        <PostButton className="absolute top-4 right-4" />
        <Posts className="mt-3" />
      </div>

      <p className="mt-2 text-lg text-yellow-600">Type shittings</p>
=======
      <p className="mt-4 text-lg text-gray-600">Lol lol lol lolol lolol loll ololololololololololo lololololo lolo merge conflict go brr</p>
>>>>>>> 5e03f41 (asdasd)
    </main>
  );
}