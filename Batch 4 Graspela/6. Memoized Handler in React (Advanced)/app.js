React.useEffect(() => {
    const handleFetchStories = React.useCallback(() => {
      if (!searchTerm) return;
  
      dispatchStories({ type: 'STORIES_FETCH_INIT' });
  @@ -76,6 +76,10 @@ const App = () => {
        );
    }, [searchTerm]);
  
    React.useEffect(() => {
      handleFetchStories();
    }, [handleFetchStories]);
  
    const handleRemoveStory = (item) => {
      dispatchStories({
        type: 'REMOVE_STORY',