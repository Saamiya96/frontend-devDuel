import { ChangeEvent } from "react";
import { useState } from "react";

import useUsername from "../hooks/useUsername";

import FadeInTransition from "../components/divs/FadeInTransition";
import UsernameForm from "../components/forms/UsernameForm";
import RulesMenu from "../components/menus/RulesMenu";

const homeContainer = "home-container p-16 space-y-60";

function Home() {
  const [username, setUsername] = useState("");
  const { setUsername: setUsernameFromHook } = useUsername();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleCreateGame = () => {
    setUsernameFromHook(username);
  };

  return (
    <FadeInTransition>
      <div className={`${homeContainer}`}>
        <UsernameForm
          username={username}
          handleChange={handleChange}
          handleCreateGame={handleCreateGame}
        />
        <RulesMenu />
      </div>
    </FadeInTransition>
  );
}

export default Home;
