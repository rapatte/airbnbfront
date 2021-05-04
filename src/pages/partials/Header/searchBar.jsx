function SearchBar() {
  return (
    <form>
        <label htmlFor="city">City</label>
        <input type="search" name="city" id="" />
        <label htmlFor="guests">Guests</label>
        <input type="search" name="guests" id=""/>
        <button>Validate</button>
    </form>
  );
}

export default SearchBar;
