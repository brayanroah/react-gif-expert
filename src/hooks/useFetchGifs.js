import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (categoria) => {


    const [image, setimage] = useState([]);
    const [isloading, setIsloading] = useState(true)
    
        
        
        const getImages = async() => {
            
            
            const newImage =  await getGifs(categoria)
            setimage(newImage)
            setIsloading(false)
            

            
        }
        
        
        useEffect(() => {

            getImages();
            
        },[categoria])
        
    
        return {
            image,
            isloading
        }

}