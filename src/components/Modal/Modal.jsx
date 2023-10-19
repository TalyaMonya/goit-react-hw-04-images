import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalImg, ModalWindow, Overlay } from "./Modal.styled";


// Обʼєкт модального вікна в ДОМ-дереві
const modalRoot = document.querySelector('#modal-root');


export class Modal extends Component {

    // Метод життєвого циклу: визивається після монтування компоненту
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'hidden';
    }

    // Метод життєвого циклу: визивається перед розмонтуванням компоненту
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'visible';
    }

    // Обробник подіі натискання клавіши
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose(); // Закриваємо модальне вікно при натисканні Escape
        }
    };

    // Обробник кліку по бекдропу
    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { largeImageURL, tags } = this.props;

        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalWindow>
                    <ModalImg src={largeImageURL} alt={tags}/>
                </ModalWindow>
            </Overlay>,
            modalRoot
        )
    }
}