import { useState } from "react";
import { Img, ListItem } from "./ImageGalleryItem.styled";
import { Modal } from "components/Modal/Modal";


export const ImageGalleryItem = ({ image }) => {
    const [showModal, setShowModal] = useState(false);
   

    // Метод для преключення модального вікна
    const toggleModal = () => {
        setShowModal(prevModal => !prevModal);
    };

        return (
            <ListItem>
                <Img
                    src={image.webformatURL}
                    alt={image.tags}
                    onClick={toggleModal} />
                {showModal && (
                    <Modal
                        largeImageURL={image.largeImageURL}
                        tags={image.tags}
                        onClose={toggleModal} />
                )}
            </ListItem>
        )
    }