import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import "./navbarcomponent.css";

export default function NavbarComponent() {
  return (
    <>
      <div className="navbar flex flex-wrap justify-content-around align-content-center">
        <div className="logo">
          <img src="" alt="Your Logo" />
        </div>
        <div className="search mt-2 h-2rem">
          <InputText
            placeholder="Search"
            type="text"
            className="w-8rem sm:w-auto"
          />
        </div>
        <div className="menus">
          <ul className="flex justify-content-around gap-6 list-none color-black-alpha-70 align-content-center mt-2">
            <li>
              <a href="WWW.">HOME</a>
            </li>
            <li>
              <a href="WWW.">NEW IN</a>
            </li>
            <li>
              <a href="WWW.">TRACK ORDER</a>
            </li>
            <li>
              <a href="WWW.">CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="profile flex gap-5">
          <div className="pi pi-user" style={{ fontSize: "1.5rem" }} />

          <div
            className="login pi pi-cart-plus"
            style={{ fontSize: "1.5rem" }}
          />
        </div>
      </div>
    </>
  );
}
