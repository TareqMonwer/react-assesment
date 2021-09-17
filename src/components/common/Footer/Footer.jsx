import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer border-t-4 border-gray-300 p-10 flex w-full bg-gray-200">
      <span className="w-1/3">
        <b>Daffodil Polytechnic Institute</b> <br />
        Daffodil Polytechnic Institute is a private polytechnic Institute
        located in Dhaka, Bangladesh.The campus is located at Dhanmondi.
      </span>
      <span className="w-1/3">
        <b>Diploma in Computer Engineering</b>
      </span>
      <span className="w-1/3">
        <b className="capitalize">passing year: &nbsp;</b>
        2021
      </span>
    </div>
  );
};

export default Footer;
