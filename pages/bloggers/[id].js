
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(blogger => {
    return {
      params: { id: blogger.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}

export default Details;
