import styles from '../../styles/Bloggers.module.css';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { bloggers: data }
  }
};

const AllBloggers = ({ bloggers }) => {
  return (
    <div>
      <h1>Bloggers List</h1>
      {bloggers.map(bloger => (
        <div key={bloger.id}>
          <a className={styles.single}>
            <h3>{bloger.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
};

export default AllBloggers;
