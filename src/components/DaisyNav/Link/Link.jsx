import PropTypes from 'prop-types';

const Link = ({ route }) => {
  return (
    <li className="hover:bg-lime-500 p-2 rounded-lg text-center ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Link;
