// definition of App component
function App() {
return (
<div>
<h1>Food Ordering System</h1>
<Search />
<hr />
{/* creating an instance of List component */}
<List />
{/* creating another instance of List component */}
<List />
</div>
);
}
// definition of List component
function List() { ... }