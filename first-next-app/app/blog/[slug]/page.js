export default  async function BlogPostPage({ params }){
  const {slug} = await params;
  return <main>
    <h1>Blog Test</h1>
    <p>{slug}</p>
  </main>
}