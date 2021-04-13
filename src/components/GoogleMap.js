import React from 'react'

const GoogleMap = props => {
    // let apiKey = "AAIzaSyBXuIEPYGbc0UvpcQO2v1Y6s3a49Hi4iVk"

    // if (address === ""){
    //     return null
    // } else {
        return (

            // <img src="" alt="Austin Map"></img>

            <iframe 
            title="map"
            width="450"
            height="350"
            frameBorder="0"
            // src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=q=Space+Needle,Seattle+WA`}
            src={`https://www.google.com/maps/embed/v1/place?key=AAIzaSyBXuIEPYGbc0UvpcQO2v1Y6s3a49Hi4iVk&q=Space+Needle,Seattle+WA`}

            allowFullScreen>
          </iframe>
        )
            
            
        
    // }
}

export default GoogleMap