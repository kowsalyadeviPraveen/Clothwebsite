import "./categories.css"

function Categories() {
  return (
    <div className="categories">
      <ul className="flex justify-content-around gap-6 list-none color-black-alpha-70">
        <li>
        <a href="www.">Men's</a>
        </li>
        <li>
        <a href="www.">Women's</a>
        </li>
        <li>
        <a href="www.">Kid's</a>
        </li>
        <li>
        <a href="www.">New Arrival's</a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
