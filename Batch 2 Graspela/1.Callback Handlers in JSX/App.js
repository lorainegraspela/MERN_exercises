const Search = (props) => {
	const [searchTerm, setSearchTerm] = React.useState('');

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
		
		// B
		props.onSearch(event);
	};

	return ( ... );
};