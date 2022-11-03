const App = () => {
...
const handleSearch = (event) => {
setSearchTerm(event.target.value);
localStorage.setItem('search', event.target.value);
};
...
);