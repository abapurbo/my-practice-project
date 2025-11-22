import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ImgHosting(imageData) {
    const [img, setImg] = useState('')
    useEffect(() => {
        // if you image empty .as a don't call api call
        if (!imageData) return;

        // jodi tumar image thake
        const IMG_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imag_api_key}`
        axios.post(IMG_API_URL, imageData)
            .then(res => {
                setImg(res.data.data.display_url)
            })
            .catch(err=>console.log(err))

    }, [imageData])

    return img;
}
