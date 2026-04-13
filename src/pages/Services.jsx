import services from '../data/services.json';
import ServiceCard from '../components/ServiceCard';
function Services() {
    return (
        <div className="container">
            <h2>Our Services</h2>
            <div className="grid grid-cols-2">
                {services.map(s => <ServiceCard key={s.id} {...s} />)}
            </div>
        </div>
    );
}
export default Services;