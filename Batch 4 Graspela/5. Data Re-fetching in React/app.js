React.useEffect(() => {
    if (!searchTerm) return;

    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    fetch(`${API_ENDPOINT}react`)
    fetch(`${API_ENDPOINT}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        dispatchStories({
@@ -72,7 +74,7 @@ const App = () => {
      .catch(() =>
        dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
      );
  }, []);
  }, [searchTerm]);

  const handleRemoveStory = (item) => {
    dispatchStories({
@@ -85,10 +87,6 @@ const App = () => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.data.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
@@ -109,10 +107,7 @@ const App = () => {
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List
          list={searchedStories}
          onRemoveItem={handleRemoveStory}
        />
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );