const THead = ({ columns, setSortingKey }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th
            onClick={() => setSortingKey(column.index)}
            key={`th-${index}`}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 
            uppercase tracking-wider cursor-pointer"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
