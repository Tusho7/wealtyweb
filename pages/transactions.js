import Navbar from "../components/Layouts/NavbarTwo";
import Sidebar from "../components/Layouts/Sidebar";
import TransactionDescription from "../components/TransactionDescription/TransactionDescription";

const transactions = () => {
  return (
    <div>
      <Navbar />
      <div className="profile-main-content">
        <Sidebar />
        <TransactionDescription />
      </div>
    </div>
  );
};

export default transactions;
