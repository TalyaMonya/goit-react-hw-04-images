import { Component } from "react";
import { SearchBtn, SearchForm, SearchInput, SearchSpan } from "./Searchbar.styled";
import { FcSearch } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';
import { toasterOption } from "components/toasterOption/toasterOption";




export class SearchBar extends Component {
    state = {
        inputValue: '',
    };

    handleChange = e => {
        this.setState({inputValue: e.target.value.toLowerCase()});
    }

    handleSubmit = e => {
        e.preventDefault();
         if (this.state.inputValue.trim() === '') {
        return toast('Please enter key words for search', toasterOption);
    }
    
        this.props.onSubmit(this.state.inputValue);
        this.setState(({ inputValue: '' }));
    }

    render() {
        return (
            <header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchBtn>
                        <FcSearch size="22"/>
                        <SearchSpan>Search</SearchSpan>
                    </SearchBtn>
                    <SearchInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                        onChange={this.handleChange} />
                </SearchForm>
                <Toaster />
            </header> 
        )
    }
}





