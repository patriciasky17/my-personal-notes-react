import Input from "./input";

const Navbar = ({ search, updateQuery }) => {
  return (
    <header>
      <h1 className="title-website">Notes<sub style={{fontSize:"12px"}}>Personal</sub></h1>
      <Input
        value={search}
        onChange={updateQuery}
        type="search"
        id="searchNote"
        placeholder="Find notes..."
      />
    </header>
  );
};

export default Navbar;