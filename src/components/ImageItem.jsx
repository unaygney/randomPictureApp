

function ImageItem({image}) {
    console.log(image)
    return (
        <div className="img-container">
        <img src={image.urls.small} alt={image.alt_description} />
    </div>
 
    )
   
}

export default ImageItem;