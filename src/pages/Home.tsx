import { ChangeEvent } from "react";
import { useState } from "react";
import useUsername from "../hooks/useUsername";
import UsernameForm from "../components/forms/UsernameForm";
import Rules from "../components/text/Rules";
import SeeRulesButton from "../components/buttons/SeeRulesButton";

function Home() {
  const [username, setUsername] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { setUsername: setUsernameFromHook } = useUsername();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleCreateGame = () => {
    setUsernameFromHook(username);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <UsernameForm
          isVisible={isVisible}
          username={username}
          handleChange={handleChange}
          handleCreateGame={handleCreateGame}
        />
        <div className="show-hide-box flex flex-col items-center">
          <Rules isVisible={isVisible} />
          <SeeRulesButton
            isVisible={isVisible}
            toggleVisibility={toggleVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
