import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import Button from '../components/Button';
function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert('Message sent!');
    return (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Us</h2>
            <Input label="Your Name" {...register('name', {
                required:
                    true
            })} error={errors.name} />
            <Input label="Your Email" type="email" {...register('email', {
                required: true
            })} error={errors.email} />
            <label>Message</label>
            <textarea className="input" {...register('message', {
                required:
                    true
            })}></textarea>
            {errors.message && <p className="error">Message is required</p>}
            <Button type="submit">Send</Button>
        </form>
    );
}
export default Contact;