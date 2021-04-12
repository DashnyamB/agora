import { SearchRounded } from '@material-ui/icons';
import React from 'react';

function Search(props) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div>
            <SearchRounded />
            <input
                type="text"
                placeholder="Эндээс хүссэнээ олоорой..."
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;