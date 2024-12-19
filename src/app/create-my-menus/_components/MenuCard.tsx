import React from "react";
import Table, { TableItem } from "./MenuTable";

interface Menu {
  title: string;
  price: number;
  mainCourse: TableItem[];
  side: TableItem[];
  appetizer: TableItem[];
}

interface MenuCardProps {
  menu: Menu;
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-bold mb-4 text-center">{menu.title}</h2>
      <p className="text-lg font-semibold text-center">Price: ${menu.price.toFixed(2)}</p>

      {/* Main Course */}
      <h3 className="text-xl mt-4 mb-2 font-medium text-center">Main Course</h3>
      <Table items={menu.mainCourse} />

      {/* Side */}
      <h3 className="text-xl mt-4 mb-2 font-medium text-center">Side</h3>
      <Table items={menu.side} />

      {/* Appetizer */}
      <h3 className="text-xl mt-4 mb-2 font-medium text-center">Appetizer</h3>
      <Table items={menu.appetizer} />

      {/* Pick Menu */}
      <div className="mt-6 flex justify-center items-center">
        <label>
          <input
            type="checkbox"
            className="mr-2"
          />
          Pick Menu
        </label>
      </div>
    </div>
  );
};

export default MenuCard;
