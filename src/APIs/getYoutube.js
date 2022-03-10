import React from 'react';
const getYoutube = (params) => {
    if(!params) return;
    let param = `/${params.kind}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet` ;
    for (var key in params) {
        if(key !== 'kind') {
            param = `${param}&${key}=${params[key]}`
        }
    }
    console.log('param', param);
    return  param;
};

export default getYoutube;
