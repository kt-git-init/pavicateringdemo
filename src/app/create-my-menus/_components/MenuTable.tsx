import React from "react";

export interface TableItem {
  name: string;
  feeds: number;
  total: number;
}

interface TableProps {
  items: TableItem[];
}

const Table: React.FC<TableProps> = ({ items }) => (
  <table className="w-full text-sm ">
    <thead>
      <tr className="bg-[#3D803D] text-white">
        <th className="text-left px-2">Item</th>
        <th className="text-left px-2 ">Feeds</th>
        <th className="text-left px-2 ">Total</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td className="pb-2 ">{item.name}</td>
          <td className="px-4 pb-2">{item.feeds}</td>
          <td className="px-2 pb-2">${item.total}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
