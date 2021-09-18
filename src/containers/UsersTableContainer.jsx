import { useState } from 'react';
import _ from 'lodash';
import TBody from "components/UsersTable/TBody";
import THead from "components/UsersTable/THead";

const UsersTableContainer = ({ columns, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortingKey, setSortingKey] = useState();

  const handleSetSortingKey = async (key) => {
    await setSortingKey(key);
    switch (key) {
      case 'name':
        const sortedByName = _.sortBy(data, o => {
          return typeof o.name === 'object' ? o.name.first : o.name;
        })
        setSortedData(sortedByName)
        break;
      
      case 'email':
        setSortedData(_.sortBy(data, o => o.email))
        break;
      
      case 'phone':
        setSortedData(_.sortBy(data, o => o.phone))
        break;
      
      case 'gender':
        setSortedData(_.sortBy(data, o => o.gender))
        break;
    
      default:
        setSortedData(data);
    }
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <THead columns={columns} setSortingKey={handleSetSortingKey} />
      <TBody data={sortedData} />
    </table>
  );
}

export default UsersTableContainer;