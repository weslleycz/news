import Styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: String;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <>
      <button type="button" className={Styles.subscribeButton}>
        Subscribe now
      </button>
    </>
  );
};
