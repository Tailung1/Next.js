
export default async function Post({ params }: { params: any }) {
  const getParams = await params;
  const id = await getParams.postID;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post = await response.json();

  return (
    <div>
      <p>{post.id}</p>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
