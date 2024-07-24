import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>This is About Us page!!</h1>
      <h3>{loggedInUser}</h3>
    </div>
  );
};

export default About;
