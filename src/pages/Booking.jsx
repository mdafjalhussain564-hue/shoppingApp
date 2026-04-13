import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
import services from '../data/services.json';

function Booking() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // mock save to localStorage
        const existing = JSON.parse(localStorage.getItem('orders') || '[]');
        existing.push({ ...data, date: new Date().toISOString() });
        localStorage.setItem('orders', JSON.stringify(existing));
        alert('Order submitted!');
    };
    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <h2>Book a Service</h2>
            <Input label="Name" {...register('name', { required: true })}
                error={errors.name} />
            <Input label="Phone" {...register('phone', { required: true })}
                error={errors.phone} />
            <label>Select Service</label>
            <select {...register('service', { required: true })}
                className="input">
                <option value="">-- Choose --</option>
                {services.map(s => <option key={s.id} value={s.name}>{s.name}</
                option>)}
            </select>
            {errors.service && <p className="error">Service is required</p>}
            <Input label="Pick-up Date" type="date" {...register('date', {
                required: true
            })} error={errors.date} />
            <Input label="Pick-up Time" type="time" {...register('time', {
                required: true
            })} error={errors.time} />
            <Input label="Address" {...register('address', {
                required:
                    true
            })} error={errors.address} />
            <Button type="submit">Submit Order</Button>
        </form>
    );
}
export default Booking;