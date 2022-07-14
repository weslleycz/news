import { signIn, signOut, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Styles from "./styles.module.scss";

export const SignInButton = () => {
  const { data: session } = useSession();

  console.log(session);

  return session ? (
    <button type="button" className={Styles.signInButton}>
      <FaGithub color="#04D361" />
      {session.user?.name}
      <FiX
        color="#737380"
        onClick={() => signOut()}
        className={Styles.closeIcon}
      ></FiX>
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn("github")}
      className={Styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
};
