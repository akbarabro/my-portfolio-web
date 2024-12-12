"use client";
import { useState } from 'react';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    gmail: '',
    number: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('/api/sendEmail', { // Fixed typo in URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', gmail: '', number: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send email.');
      }
    } catch {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <p className="C-Title">Contact</p>
        <div className="C-main-div">
          <div className="C-div">
            <div className="C-Detail">
              <div className="C-Detail-div">
                <p className="C-D-title">Contact Details</p><hr className="C-D-line1"/>
                <div className="C-D-div"><p>Gmail</p><p>ghulamakbarabbbro110@gmail.com</p></div><hr className="C-D-line2"/>
                <div className="C-D-div"><p>Number</p><p>+92 326 2268830</p></div><hr className="C-D-line2"/>
                <div className="C-D-div"><p>Linkedin</p><p>www.linkedin.com/in/akbarabro</p></div><hr className="C-D-line2"/>
                <div className="C-D-div"><p>Github</p><p>github.com/akbarabro</p></div><hr className="C-D-line2"/>
                <div className="C-D-div"><p>Behance</p><p>www.behance.net/akbarabro</p></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="C-ReachNow">
              <p className="C-Reach-title">Reach Now</p>
              <input className="C-Reach-input" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required/>
              <input className="C-Reach-input"  type="email" name="gmail" placeholder="Your Email" value={formData.gmail} onChange={handleChange} required />
              <input className="C-Reach-input"  type="text" name="number" placeholder="Your Number" value={formData.number} onChange={handleChange} />
              <textarea className="C-Reach-msg pt-[10px]" rows={4} cols={50} name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              <input type="submit" value="Send" className="submit-b" />
            <div className='h-[30px] w-[auto] flex items-center justify-center'> {status && <p className={` text-center w-[120%] ${status.includes('success') ? 'text-[#2898a7]' : 'text-[#ED4338]'}`}>{status}</p>}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
