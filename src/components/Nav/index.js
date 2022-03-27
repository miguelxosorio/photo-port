import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// Nav component - App() child
function Nav(props) {
  
  // doing conditional rendering to the nav component
  // initializing the category state as an array of a few objects
  // use the useState hook here so that we can have the option to change the categories at some point in the future
  // const [categories] = useState([
  //   { name: "commercial", description: "Photos of grocery stores, food trucks, and other commercial projects", },
  //   { name: "portraits", description: "Portraits of people in my life" },
  //   { name: "food", description: "Delicious delicacies" },
  //   { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature", },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  // useEffect to Change the DOM - Hook to trigger a re-render on a variable value change
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* mapping over the array categories via map()*/}
          {/* Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM */}
          {/* When you map over an array in a JSX expression, you should return only a single JSX element—like how you can only return a single element from a React component */}
          {categories.map((category) => (
            <li className={`mx-1 ${
              // currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`} key={category.name}>
              {/* onClick() method then provide a function name to the method */}
              {/* The onClick() attribute is expecting a callback function declaration */}
              {/* It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well */}
              <span onClick={() => {setCurrentCategory(category)
              setContactSelected(false)
              }} >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
  </header>  
  );
}
  
export default Nav;