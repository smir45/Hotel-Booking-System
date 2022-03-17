import React, {useState, useEffect} from 'react';

export const getStaticPaths = async ({query}) => {
    const res = await fetch(`http://localhost:8000/api/destinations/`)
    const data = await res.json();

    const paths = data.map(item => {
        return {
            params: {
                slug: item.slug.toString()
            }
        }
    });
    return {
        paths,
        fallback: false,

    }
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await fetch("http://localhost:8000/api/destinations/" + slug);
    const data = await res.json();


    return {
        props: {
            item: data
        }
    }
}
const slug = ({item}) => {

    return (
        <div>
            <head>
                <title>{item.name}</title>
            </head>
            <h1> This is dynamic data {item.name}</h1>
        </div>
    );
};
export default slug;