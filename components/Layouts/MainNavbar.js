import Image from "next/image";
import Link from "next/link";
const MainNavbar = () => {
  return (
    <div className="main-navbar-container">
      <nav className="main-navbar">
        <div>
          <Image src="/images/logo.png" alt="logo" width={95} height={45} />
        </div>
        <div className="main-navbar-links-container">
          <div className="main-navbar-links">
            <div>
              <Link href="/">მთავარი</Link>
            </div>
            <div>
              <Link href="/">ჩვენ შესახებ</Link>
            </div>
            <div>
              <Link href="/">ფასები</Link>
            </div>
            <div>
              <Link href="/">ბლოგი</Link>
            </div>
            <div>
              <Link href="/">კონტაქტი</Link>
            </div>
          </div>
          <div className="main-navbar-user">
            <Image src="/images/user.svg" alt="user" width={24} height={24} />
            <p>სახელი გვარიშვილი</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
