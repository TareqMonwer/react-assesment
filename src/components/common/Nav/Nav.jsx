import Container from "../../Container";
import NavItem from "../NavItem/NavItem";
import { leftNavItems, rightNavItems } from 'assets/navItemsData';

const Nav = () => {
  return (
    <div className="py-3 bg-indigo-900 text-white">
      <Container otherClasses="flex justify-between">
          <div className="flex items-center">
            {leftNavItems.map((item, index) => (
              <NavItem key={`navL${index}`} {...item} />
            ))}
          </div>
          <div>
            {rightNavItems.map((item, index) => (
              <NavItem key={`navR${index}`} {...item} />
            ))}
          </div>

      </Container>
    </div>
  );
};

export default Nav;
