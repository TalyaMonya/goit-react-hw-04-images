import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalImg, ModalWindow, Overlay } from "./Modal.styled";


// Обʼєкт модального вікна в ДОМ-дереві
const modalRoot = document.querySelector('#modal-root');


export const Modal = ({ largeImageURL, tags, onClose }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose(); // Закриваємо модальне вікно при натисканні Escape
            }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'visible';
        };
    }, [onClose]);

    // Обробник кліку по бекдропу
    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

        return createPortal(
            <Overlay onClick={handleBackdropClick}>
                <ModalWindow>
                    <ModalImg src={largeImageURL} alt={tags}/>
                </ModalWindow>
            </Overlay>,
            modalRoot
        )
    }
