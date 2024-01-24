import { useSelector } from "react-redux";

const UserProfileDescription = () => {
  const user = useSelector((state) => state.credentials);

  return (
    <div className="profile-description-container">
      <div className="description">
        <div className="profile-details">
          <p>
            <span className="details-description">სახელი: </span>
            <span className="details-description-value">{user.firstName}</span>
          </p>
          <p>
            <span className="details-description">გვარი: </span>
            <span className="details-description-value">{user.lastName}</span>
          </p>
          <p>
            <span className="details-description">პირადი ნომერი: </span>
            <span className="details-description-value">
              {user.personalNumber}
            </span>
          </p>
          <p>
            <span className="details-description">ელ-ფოსტა: </span>
            <span className="details-description-value">{user.email}</span>
          </p>
          <div></div>
          <p>
            <span className="details-description">ტელეფონი: </span>
            <span className="details-description-value">
              +995 {user.phoneNumber}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDescription;
