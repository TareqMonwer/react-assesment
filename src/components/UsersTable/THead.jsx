const THead = ({ columns }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th key={`th-${index}`}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
