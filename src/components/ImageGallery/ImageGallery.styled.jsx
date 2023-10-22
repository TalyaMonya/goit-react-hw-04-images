import styled from "styled-components";


export const ImageList = styled.ul`
    display: grid;
    max-width: calc()(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin: 0 auto;
    padding: 90px 20px 0 20px;
`

export const EmptyGallery = styled.p`
    padding-top: 150px;
    text-align: center;
    font-size: 26px;
`