import { Component } from "react";
import { Img, ListItem } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";


export class ImageGalleryItem extends Component {
    state = {
        showModal: false, // Зберігає стан модального вікна
    };

    // Метод для преключення модального вікна
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }))
    }


    render() {
        const { showModal } = this.state;
        const { image } = this.props;

        return (
            <ListItem>
                <Img
                    src={image.webformatURL}
                    alt={image.tags}
                    onClick={this.toggleModal} />
                {showModal && (
                    <Modal
                        largeImageURL={image.largeImageURL}
                        tags={image.tags}
                        onClose={this.toggleModal} />
                )}
            </ListItem>
        )
    }
}