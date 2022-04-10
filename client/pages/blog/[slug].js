export const getStaticPaths = async () => {
    const paths = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await paths.json()
    const pathsArr = posts.map(post => ({
        params: {
            slug: post.slug
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:8000/api/blog/post/get/${context.params.id}`);
    const post = await res.json();
    console.log(post);
    return {
        props: {
            post: post
        }
    }

  }

const BlogPost = ({ post }) => {
    
    return (
        <div>
            <h1>Trial</h1>ß
            <h1>{post.title}</h1>
        </div>
    )
}

export default BlogPost
