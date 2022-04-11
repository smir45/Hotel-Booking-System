export const getStaticPaths = async () => {
    const paths = await fetch('http://localhost:8000/api/blogs/getblogs')
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
    const res = await fetch(`http://localhost:8000/api/blogs/getblogs${context.params.slug}`);
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
            <h1>Trial</h1>
            <h1>{post.title}</h1>
        </div>
    )
}

export default BlogPost
