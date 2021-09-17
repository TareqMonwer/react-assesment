import Container from "../../../containers/Container";
import NavItem from "../NavItem/NavItem";
import { leftNavItems, rightNavItems } from 'utils/navItemsData';
import clsx from "clsx";

const Nav = () => {
  return (
    <div className={
      clsx("py-3 bg-gray-900 text-white fixed w-full top-0 pl-60")}>
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
