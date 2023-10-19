import { Component } from "react";
import * as API from '../components/services/PixabayApi';
import { SearchBar } from "./Searchbar/Searchbar";
import { toast} from "react-hot-toast";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { EmptyGallery } from "./ImageGallery/ImageGallery.styled";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";



export class App extends Component {
  state = {
    textSearch: '', // Зберігає текст для запиту
    images: [], // Зберігає масив зображень
    currentPage: 1, // Зберігає поточний номер сторінки
    error: false, // Зберігає повідомлення про помилку
    isLoading: false,  // Індикатор завантаження
    totalPages: 0, // Зберігає загальну кількість сторінок
  }

  // Метод життєвого циклу: визивається при оновленні компонента
  componentDidUpdate(_, prevState) {
    if (
      prevState.textSearch !== this.state.textSearch ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  // Метод для обробки форми пошуку
  handleSubmit = textSearch => {
    this.setState({
      textSearch: textSearch, // Записуємо введене значення в стейт
      images: [], // Очищаємо масив з зображеннями
      currentPage: 1, // Зкидуємо номер поточної сторінки на першу
    });
  };


  //Метод для отримання та довання зображень в стейт
  addImages = async () => {
    const { textSearch, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await API.getImages(textSearch, currentPage);

      if (data.hits.length === 0) {
        return toast.error("Sorry, image not found...")
      }

      const normolizedImages = API.normalizedImages(data.hits)

      this.setState(state => ({
        images: [...state.images, ...normolizedImages],
        loading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: true });
      toast.error("Something went wrong! Please reload the page!")
    } finally {
      this.setState({ isLoading: false })
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }))
  }


  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;
    
    
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (<EmptyGallery>Image gallery is empty... 🤷‍♂️</EmptyGallery>)}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </div>
      

    )
  }

}
