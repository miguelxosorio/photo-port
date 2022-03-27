import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './App.css';

// Parent Component
// App() before lifting
// function App() {
//   return (
//     <div>
//       <Nav />
//       <main>
//         <Gallery />
//         <About />
//       </main>
//     </div>
//   );
// }

// after lifting - needed to do because the Gallery component is not a child of Nav component
function App() {
  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects', },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    {/* Passing the getter and setter functions into the Nav component will allow this component to modify the state in the App component, which will conditionally render based on the user's selection */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {/* react fragments <> </> */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About />
          </>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;
