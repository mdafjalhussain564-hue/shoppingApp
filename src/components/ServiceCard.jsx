import PropTypes from 'prop-types';
function ServiceCard({ name, description, price, image }) {
    return (
        <div className="card">
            <img src={image} alt={name} loading="lazy" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p><strong>₹{price}</strong></p>
        </div>
    );
}
ServiceCard.propTypes = {
    name: PropTypes.string, description: PropTypes.string,
    price: PropTypes.number, image: PropTypes.string
};
export default ServiceCard;