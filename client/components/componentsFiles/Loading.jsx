import React from 'react';
import { motion } from 'framer-motion'

const loaderVarients = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition:{
            x: {
                yoyo: Infinity,
                duration: 0.5,
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
            }
        }
    }
}


const Loading = () => {
    return(
        <>
        <motion.div className="loader" variants={loaderVarients}
        animate= "animationOne"
        style={{
            width: "10px",
            height: "10px",
            margin: "40px auto",
            borderRadius: "50%",
            background: "black",
        }}>
        </motion.div>
        </>
    )
}

export default Loading;