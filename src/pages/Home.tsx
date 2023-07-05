import { ChangeEvent } from "react";
import useUsername from "../hooks/useUsername";

function Home() {
  const { username, setUsername } = useUsername();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <p>enter your username:</p>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <p>Current username: {username}</p>
    </div>
  );
}

export default Home;
