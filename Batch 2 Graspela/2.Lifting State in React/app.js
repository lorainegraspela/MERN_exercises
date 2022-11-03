const App = () => {
	const stories = [ ... ];
		const [searchTerm, setSearchTerm] = React.useState('');
			const handleSearch = (event) => {
			setSearchTerm(event.target.value);
};

const searchedStories = stories.filter(function (story) {
	return story.title.includes(searchTerm);
});
	