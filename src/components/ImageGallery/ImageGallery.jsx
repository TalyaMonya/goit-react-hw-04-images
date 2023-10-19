import { ImageList } from "./ImageGallery.styled"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"


export const ImageGallery = ({ images}) => {
    return (
        <ImageList>
            {images.map(image => (
    <ImageGalleryItem key={image.id} image={image}/>
))}
        </ImageList>
    )
}