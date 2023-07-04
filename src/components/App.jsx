import React from "react";
import PostList from "../components/PostList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";

function App() {
  const [isOpened, setIsOpened] = useState(true);

  const closeModalHandler = () => {
    setIsOpened(false);
  };

  const showModalHandler = () => {
    setIsOpened(true);
  };

  return (
    <React.Fragment>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={isOpened} onStopPosting={closeModalHandler} />
      </main>
    </React.Fragment>
  );
}

export default App;
