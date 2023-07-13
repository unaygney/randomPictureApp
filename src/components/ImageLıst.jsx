import ImageItem from "./ImageItem";

function ImageList({imagePlaceHolder}) {
    return ( 
        <div className="img-main-container">
            {imagePlaceHolder.map((image , idx) => {
            return    <ImageItem key = {idx} image = {image}  />
            })}
        </div>
     );
}

export default ImageList;