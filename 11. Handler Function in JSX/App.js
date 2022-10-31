const Search = () => {
   const handleChange = (event) => {
      console.log(event);
};

return (
   <div>
	<label htmlFor="search">Search: </label>
	<input id="search" type="text" onChange={handleChange} />
   </div>
 );
};