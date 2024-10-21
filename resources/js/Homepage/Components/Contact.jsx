import React, { useState } from 'react';
import axios from 'axios';
import { ShowToast } from '@/utils/helpers';
import { FaCheck, FaEnvelope, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { Form, Input, Button, Spin, Alert } from 'antd';
import { FaAddressBook, FaAddressCard, FaLocationDot, FaLocationPin } from 'react-icons/fa6';

function Contact() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [sentMessage, setSentMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (values) => {
        setLoading(true);
        setErrorMessage('');
        setSentMessage('');

        try {
            const response = await axios.post('/api/queries', values);
            ShowToast({ message: `Your message has been sent. Thank you!`, icon: <FaCheck color='green' /> });
            setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        } catch (error) {
            setErrorMessage('There was an error sending your message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="container !m-auto newsletter mt-3 bg-white wow fadeIn bg-white p-3 container py-5 my-5  !sm:p-0" style={{ width: "100%" }}>
            <div className="text-center mb-8 pb-5">
                <span className="text-primary text-lg font-semibold">Contact</span>
                <h2 className="text-secondary text-2xl font-semibold">Sumbit Your Queries</h2>
            </div>
            <div className="flexjustify-content-center">
                <section className="contact p-0">
                    <div className="container">
                        <div className="row">
                            <div class="col-lg-5 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div class="info flex flex-col justify-center gap-4">
                                    <div class="phone flex items-center gap-3">
                                        <FaLocationDot className='icofont-envelope' size={30} color='purple' />
                                        <div className='p-0 m-0'>
                                            <h4 className='p-0 m-0'>Location:</h4>
                                            <p className='p-0 m-0'>autopulsetrading center</p>
                                        </div>
                                    </div>

                                    <div class="phone flex items-center gap-3">
                                        <FaEnvelope className='icofont-envelope' size={30} color='orangered' />
                                        <div className='p-0 m-0'>
                                            <h4 className='p-0 m-0'>Email:</h4>
                                            <p className='p-0 m-0'>info@autopulsetrading.com</p>
                                        </div>
                                    </div>

                                    <div class="phone flex items-center gap-3">
                                        <FaWhatsapp className='icofont-envelope' size={30} color='green' />
                                        <div className='p-0 m-0'>
                                            <h4 className='p-0 m-0'>Call:</h4>
                                            <p className='p-0 m-0'>+1307 2950382</p>
                                        </div>
                                    </div>

                                    <iframe style={{ width: '100%', height: '100%', marginTop: "30px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.185441233687!2d72.3141563!3d30.031537299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393c95446603cf47%3A0xa4c7c9803430aee0!2sCOMSATS%20University%20Islamabad%2C%20Vehari%20Campus!5e0!3m2!1sen!2s!4v1721902981979!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                </div>

                            </div>
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex  align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <Form
                                    style={{ width: '100%', padding: '20px', boxShadow: 'none' }}

                                    onFinish={handleSubmit}
                                    initialValues={formData}
                                    layout="vertical"
                                    className='php-email-form bg-white border'
                                >
                                    <div className="form-row">
                                        <Form.Item
                                            name="user_name"
                                            label="Your Name"
                                            className="form-group col-md-6"
                                            rules={[{ required: true, message: 'Please enter your name' }]}
                                        >
                                            <Input
                                                value={formData.user_name}
                                                onChange={handleChange}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="user_email"
                                            label="Your Email"
                                            className="form-group col-md-6"
                                            rules={[{ required: true, message: 'Please enter your email' }]}
                                        >
                                            <Input
                                                type="email"
                                                value={formData.user_email}
                                                onChange={handleChange}
                                            />
                                        </Form.Item>
                                    </div>
                                    <Form.Item
                                        name="subject"
                                        label="Subject"
                                        rules={[{ required: true, message: 'Please enter a subject' }]}
                                    >
                                        <Input
                                            value={formData.subject}
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="message"
                                        label="Message"
                                        rules={[{ required: true, message: 'Please enter your message' }]}
                                    >
                                        <Input.TextArea
                                            rows={10}
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </Form.Item>
                                    <div className="mb-3">
                                        {loading && <Spin tip="Loading..." />}
                                        {errorMessage && <Alert message={errorMessage} type="error" />}
                                        {sentMessage && <Alert message={sentMessage} type="success" />}
                                    </div>
                                    <div className="text-center">
                                        <button className='primary-btn' htmlType="submit" disabled={loading}>
                                            Send Message
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
