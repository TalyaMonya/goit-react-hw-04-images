import { useEffect, useState } from "react";
import * as API from '../components/services/PixabayApi';
import { SearchBar } from "./Searchbar/Searchbar";
import { toast} from "react-hot-toast";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { EmptyGallery } from "./ImageGallery/ImageGallery.styled";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";



export const App = () => {

  const [textSearch, settextSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (textSearch === '') {
      return;
  }
    
  async function addImages() {
    try {
      setIsLoading(true);

      const data = await API.getImages(textSearch, currentPage);

      if (data.hits.length === 0) {
        return toast.error("Sorry, image not found...");
      }

      const normolizedImages = API.normalizedImages(data.hits)

      setImages(prevImages => [...prevImages, ...normolizedImages]);
      setIsLoading(false);
      setTotalPages(Math.ceil(data.totalHits / 12));
    } catch(error) {
      toast.error("Something went wrong! Please reload the page!")
    } finally {
      setIsLoading(false);
    }
  };
    addImages();
}, [textSearch, currentPage])
  

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  }

  const handleSubmit = textSearch => {
    settextSearch(textSearch);
    setImages([]);
    setCurrentPage(1);
  };


    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (<EmptyGallery>Image gallery is empty... 🤷‍♂️</EmptyGallery>)}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={loadMore} />
        )}
      </div>
    )
}
