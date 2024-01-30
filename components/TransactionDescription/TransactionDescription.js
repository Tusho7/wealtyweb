const TransactionDescription = () => {
  return (
    <div className="transaction-description-container">
      <div className="description">
        <div className="transaction-details">
          <p>
            <span className="details-description">სახელი: </span>
            <span className="details-description-value">ფიოდორ</span>
          </p>
          <p>
            <span className="details-description">დრო: </span>
            <span className="details-description-value">11:00pm</span>
          </p>
          <p>
            <span className="details-description">ყიდვა: </span>
            <span className="details-description-value">10293847566</span>
          </p>
          <p>
            <span className="details-description">ტიკერი: </span>
            <span className="details-description-value">ტიკერი </span>
          </p>
          <p>
            <span className="details-description">აქციების რაოდენობა: </span>
            <span className="details-description-value">5</span>
          </p>
          <p>
            <span className="details-description">საშუალო ფასი: </span>
            <span className="details-description-value">32</span>
          </p>
          <p>
            <span className="details-description">ვალუტა : </span>
            <span className="details-description-value">5</span>
          </p>
          <p>
            <span className="details-description">ჯამური ღირებულება: </span>
            <span className="details-description-value">5</span>
          </p>
          <p>
            <span className="details-description">გადახდილი საკომისიო: </span>
            <span className="details-description-value">32</span>
          </p>
          <p>
            <span className="details-description">წმინდა მოგება: </span>
            <span className="details-description-value">5</span>
          </p>
          <p>
            <span className="details-description">ზარალი: </span>
            <span className="details-description-value">5</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDescription;
