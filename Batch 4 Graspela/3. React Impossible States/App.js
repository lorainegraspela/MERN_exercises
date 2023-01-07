const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'SET_STORIES':
        return action.payload;
      case 'STORIES_FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'STORIES_FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case 'REMOVE_STORY':
        return state.filter(
          story => action.payload.objectID !== story.objectID
        );
        return {
          ...state,
          data: state.data.filter(
            story => action.payload.objectID !== story.objectID
          ),
        };
      default:
        throw new Error();
    }
  @@ -60,23 +80,22 @@ const App = () => {
  
    const [stories, dispatchStories] = React.useReducer(
      storiesReducer,
      []
      { data: [], isLoading: false, isError: false }
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
  
    React.useEffect(() => {
      setIsLoading(true);
      dispatchStories({ type: 'STORIES_FETCH_INIT' });
  
      getAsyncStories()
        .then(result => {
          dispatchStories({
            type: 'SET_STORIES',
            type: 'STORIES_FETCH_SUCCESS',
            payload: result.data.stories,
          });
          setIsLoading(false);
        })
        .catch(() => setIsError(true));
        .catch(() =>
          dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
        );
    }, []);
  
    const handleRemoveStory = item => {
  @@ -90,7 +109,7 @@ const App = () => {
      setSearchTerm(event.target.value);
    };
  
    const searchedStories = stories.filter(story =>
    const searchedStories = stories.data.filter(story =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  @@ -109,9 +128,9 @@ const App = () => {
  
        <hr />
  
        {isError && <p>Something went wrong ...</p>}
        {stories.isError && <p>Something went wrong ...</p>}
  
        {isLoading ? (
        {stories.isLoading ? (
          <p>Loading ...</p>
        ) : (
          <List
  