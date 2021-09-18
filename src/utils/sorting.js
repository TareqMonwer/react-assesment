import _ from "lodash";


chars = _.orderBy(chars, ["name"], ["asc"]); // Use Lodash to sort array by 'name'

this.setState({ characters: chars });