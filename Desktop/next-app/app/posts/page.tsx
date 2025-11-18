import "../globals.css";
import Link from "next/link";

export default async function Posts() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const response = await posts.json();
  const reducedPosts = response.slice(1, 20);

  return (
    <div>
      {reducedPosts.map((post: any) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <div className='border-2 p-4 border-red-800'>
            <h1>{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
