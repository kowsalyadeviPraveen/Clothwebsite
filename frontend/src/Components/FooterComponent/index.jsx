import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

import "./footercomponent.css";

function FooterComponent() {
  return (
    <div className="footer flex flex-wrap justify-content-around">
      <div className="footer-left flex flex-wrap gap-8 pt-4">
        <ul className="list-none">
          <li>
            <a href="www.">SHIPPING INFO</a>
          </li>
          <li>
            <a href="www.">Payments</a>
          </li>
          <li>
            <a href="www.">Shipping & Exchange</a>
          </li>
          <li>
            <a href="www.">Bulk queries</a>
          </li>
          <li>
            <a href="www.">Terms & Conditions</a>
          </li>
          <li>
            <a href="www.">Privacy Policy</a>
          </li>
          <li>
            <a href="www.">Fabric/Print disclaimer</a>
          </li>
        </ul>
        <ul className="list-none">
          <li>THE COMPANY</li>
          <li>
            <a href="www.">About</a>
          </li>
          <li>
            <a href="www.">Our Company</a>
          </li>
          <li>
            <a href="www.">Contact us</a>
          </li>
          <li>
            <a href="www.">Store Locato</a>r
          </li>
          <li>
            <a href="www.">Franchise Enquiry</a>
          </li>
        </ul>
        <ul className="list-none">
          <li>
            <a href="www.">MY ACCOUNT</a>
          </li>
          <li>
            <a href="www.">Track Order</a>
          </li>
          <li>
            <a href="www.">Exchange Request</a>
          </li>
        </ul>
      </div>
      <div className="footer-right p-2 pt-4 ">
        <h2 className="mt-2 mb-4">EXCLUSIVE BENEFITS</h2>

        <IconField>
          <input type="text"  className=" h-2rem bg-black-alpha-90" placeholder="Enter mail Here"/>
          <InputIcon className="pi pi-arrow-right pl-4"> </InputIcon>
        </IconField>
        <p className="w-8 mt-2">
          Apply for our free membership to receive exclusive deals, news and
          events
        </p>
        <div className="logo flex justify-content-around w-5 mt-4">
          <span className="pi pi-facebook" style={{ fontSize: "26px" }} />
          <span className="pi pi-instagram" style={{ fontSize: "26px" }} />
          <span className="pi pi-youtube" style={{ fontSize: "26px" }} />
          <span className="pi pi-pinterest" style={{ fontSize: "26px" }} />
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
