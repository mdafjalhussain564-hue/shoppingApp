import sampleOrders from '../data/sampleOrders.json';
function OrderSummary() {
    return (
        <div className="container">
            <h2>Sample Order History</h2>
            {sampleOrders.map(o => (
                <div key={o.orderId} className="card">
                    <p><strong>Order #{o.orderId}</strong> - ₹{o.total}</p>
                    <p>{o.date}</p>
                </div>
            ))}
        </div>
    );
}
export default OrderSummary;