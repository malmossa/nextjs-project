
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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json();

  return {
    props: { blogger: data }
  }
}

const Details = ({ blogger }) => {
  return (
    <div>
      <h1>{ blogger.name }</h1>
      <p>{ blogger.email }</p>
      <p>{ blogger.website }</p>
      <p>{ blogger.address.city }</p>
    </div>
  );
}

export default Details;
