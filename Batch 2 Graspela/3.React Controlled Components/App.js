const App = () => {
	const stories = [ ... ];
	   const [searchTerm, setSearchTerm] = React.useState('React');
...
return (
<div>
	<h1>My Hacker Stories</h1>
         <Search search={searchTerm} onSearch={handleSearch} />
...
</div>
);
};
	

		const Search = (props) => (
<div>
<label htmlFor="search">Search: </label>
<input
	id="search"
		type="text"
			value={props.search}
onChange={props.onSearch}
/>
</div>
);