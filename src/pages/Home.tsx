import { ChangeEvent } from "react";
import useUsername from "../hooks/useUsername";
import { useState } from "react";
import UsernameForm from "../components/forms/UsernameForm";
import Rules from "../components/text/Rules";
import SeeRulesButton from "../components/buttons/SeeRulesButton";

function Home() {
  const { username, setUsername } = useUsername();
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
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
