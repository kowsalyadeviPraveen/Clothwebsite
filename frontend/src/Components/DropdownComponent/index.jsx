import { Dropdown } from "primereact/dropdown";
import 'primeflex/primeflex.css';
import PropTypes from "prop-types";

export default function DropdownComponent({ value, onchange }) {
  const dresses = [
    { name: "Leggings" },
    { name: "Saress" },
    { name: "Kurties" },
    { name: "Jeans" },
    { name: "Shirts" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        onChange={(e) => onchange(e.value)}
        options={dresses}
        optionLabel="name"
        placeholder={value}
        className="w-full md:w-10rem border-yellow-200 box-shadow-0"
      />
    </div>
  );
}

DropdownComponent.propTypes = {
  value: PropTypes.string,
  onchange: PropTypes.func,
};

Dropdown.defaultProps = {
  value: "",
  onchange: () => {},
};
