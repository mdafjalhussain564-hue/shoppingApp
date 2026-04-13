import PropTypes from 'prop-types';
function Button({ children, ...rest }) {
return (
<button className="btn btn-primary" {...rest}>
{children}
</button>
);
}
Button.propTypes = { children: PropTypes.node };
export default Button;