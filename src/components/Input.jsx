import PropTypes from 'prop-types';
function Input({ label, error, ...rest }) {
    return (
        <div className="mt-2">
            <label>{label}</label>
            <input className="input" {...rest} />
            {error && <p className="error">This field is required</p>}
        </div>
    );

}
Input.propTypes = { label: PropTypes.string, error: PropTypes.object };
export default Input;