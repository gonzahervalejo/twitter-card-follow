import ButtonCard from "./ButtonCard";
import "./App.css";

const TwitterFollowCard = ({ children, userName }) => {
  return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={`https://unavatar.io/twitter/${userName}`}
            alt="avatar"
          />
          <div className="tw-followCard-info">
            <strong>{children}</strong>
            <span className="tw-followCard-infoUserName">@{userName}</span>
          </div>
        </header>
        <ButtonCard />
      </article>
    </>
  );
};
export default TwitterFollowCard;
