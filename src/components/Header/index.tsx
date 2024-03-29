import { SignInButton } from "../SignInButton";
import Styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={Styles.headerContainer}>
      <div className={Styles.headerContent}>
        <img src="/images/logo.svg" alt="Ig.News" />
        <nav>
          <a href="#" className={Styles.active}>
            Home
          </a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton></SignInButton>
      </div>
    </header>
  );
};
