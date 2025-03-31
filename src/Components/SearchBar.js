function SearchBar() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Enter sdkjbfskjd")    
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}

export default SearchBar;