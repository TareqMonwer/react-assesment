const TBody = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data && data.length > 0 ? (
        data.map((user, index) => {
          const { name, email, gender } = user;
          const cell = user.cell || user.phone;
          let fullName;
          if (typeof name === 'object') {
            fullName = `${name.title} ${name.first} ${name.last}`;
          } else {
            fullName = name;
          }
          
          return (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cell}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {gender}
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td
            colSpan={4}
            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
          >
            Loading...
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TBody;