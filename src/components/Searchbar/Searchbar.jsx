import { useState } from "react";
import { SearchBtn, SearchForm, SearchInput, SearchSpan } from "./Searchbar.styled";
import { FcSearch } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import { toasterOption } from "components/toasterOption/toasterOption";



export const SearchBar = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = e => setInputValue(e.target.value.toLowerCase())
   
    const handleSubmit = e => {
            e.preventDefault();
            if (inputValue.trim() === '') {
                return toast('Please enter key words for search', toasterOption);
            }
            onSubmit(inputValue);
            setInputValue('');
    }

        return (
            <header>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchBtn>
                        <FcSearch size="22"/>
                        <SearchSpan>Search</SearchSpan>
                    </SearchBtn>
                    <SearchInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={handleChange} />
                </SearchForm>
                <Toaster />
            </header> 
        )
    }






