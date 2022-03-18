import React, {useState, useEffect} from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@mui/material'
import DestinationSuggestion from '../../components/componentsFiles/DashComponents/suggestions/destinationSuggesting';
import {FaCheck, FaInfoCircle, FaMapMarkerAlt, FaUserFriends} from 'react-icons/fa';
import GoogleApiWrapper from '../../components/componentsFiles/map'

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
            item: data.data
        }
    }

}

const slug = ({item}) => {

    return (
        <div>
            <head>
                <title>{item.map(itm => (itm.title))}</title>
            </head>
            {item.map(i => {
                return (
                    <div key={i.id}>
                        {
                            localStorage.setItem('city', JSON.stringify(i.city))
                        }
                        <div>

                            <div className="flex justify-center w-4/5 mx-auto mt-5 ">

                                <div className="w-2/5 border mx-5 " style={{height: "500px"}}>
                                    <div className="">
                                        <div className="my-2 px-2">
                                            <h1 className="text-4xl font-bold text-primary">{i.name}</h1>
                                            {i.hotel_reviews.map(review => {
                                                return (
                                                    <div className="flex px-2 mx-auto" key={review.id}>
                                                        <p className="my-1 text-lg">{review.stars * 100 / 5 / 100 * 5}{" "}
                                                            <span
                                                                className="text-sm text-primary">/ 5</span></p>
                                                        <p className="my-2 mx-2 text-blue-600">Reviews</p>

                                                        {[...Array(review.stars)].map((e, i) => (
                                                            <span className="my-2" style={{color: "goldenrod"}}
                                                                  key={i}>&#9733;</span>

                                                        ))}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <div className=" flex">
                                                <span className="my-1 text-primary text-lg mx-2"> <FaCheck/> </span>
                                                <p className="font-bold text-primary">Availability: <span
                                                    className="font-light">Yes</span></p>
                                            </div>
                                            <div className=" flex">
                                                <span
                                                    className="my-1 text-primary text-lg mx-2"> <FaInfoCircle/> </span>
                                                <p className="font-bold text-primary">Recommanded
                                                    time: <span className="font-light">2-3 hrs</span></p>
                                            </div>
                                            <div className=" flex">
                                                <span
                                                    className="my-1 text-primary text-lg mx-2"> <FaMapMarkerAlt/> </span>
                                                <p className="font-bold text-primary flex">Address: &nbsp;<span
                                                    className="font-light">{i.Addresses.map(address => {
                                                    return (
                                                        <p className="font-light"
                                                           key={address.id}>{address.city}{" "}{address.country}</p>
                                                    )
                                                })}</span></p>
                                            </div>

                                        </div>
                                        <div className="border relative z-10" style={{height: "200px"}}>
                                            {/*<GoogleApiWrapper/>*/}

                                        </div>

                                        <div className="bg-blue-100 my-2 p-2">
                                            <div className="flex">
                                                    <span
                                                        className="my-1 text-primary text-lg mx-2"> <FaUserFriends/> </span>
                                                <p className="font-bold text-primary flex">What visitors Say: &nbsp;
                                                </p>
                                            </div>
                                            <p className="capitalize w-11/12 mx-auto"
                                               style={{color: "#808080"}}><span
                                                className="font-light">{i.hotel_reviews.map(rev => {
                                                return (
                                                    <p className="font-light"
                                                       key={rev.id}>{rev.Comment}</p>
                                                )
                                            })}</span></p>
                                        </div>
                                        {/*<div className="" style={{marginTop: "1vh", height: "200px"}}>*/}
                                        {/*    <GoogleApiWrapper className={{height: "100px", position: "relative"}}/>*/}
                                        {/*</div>*/}
                                    </div>


                                </div>
                                <div className=" w-3/5">
                                    <Carousel animation={"slide"} duration={500} indicators={false}
                                              navButtonsAlwaysVisible={true}>
                                        {
                                            i.images.map(img => {
                                                return (
                                                    <img className="w-full bg-pmry contain" style={{
                                                        height: "500px",
                                                    }} src={img.name}
                                                         alt={img.name}/>
                                                )
                                            })
                                        }
                                    </Carousel>

                                </div>

                            </div>
                            <div>
                                <h1 className="capitalize w-9/12 my-5 mx-auto text-3xl text-primary font-bold">Explore {i.city}</h1>
                                <DestinationSuggestion/>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};
export default slug;