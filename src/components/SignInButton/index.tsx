import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Styles from "./styles.module.scss";

export const SignInButton = () => {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button type="button" className={Styles.signInButton}>
      <FaGithub color="#04D361" />
      weslleycz
      <FiX color="#737380" className={Styles.closeIcon}></FiX>
    </button>
  ) : (
    <button type="button" className={Styles.signInButton}>
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
};
