import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../../layout/Layout';
import Loader from 'react-loaders';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';
import AnimateLetters from '../../animations/animatedLetters/AnimateLetters';
import 'leaflet/dist/leaflet.css';

const MyAwesomeMap = dynamic(() => import('./MapDynamic'), { ssr: false });

const ContactPage = () => {
  const [letterClass, setLetterClass] = useState<string>('text-animate');

  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_0pocn8k', form.current, 'BrpzIWl1Fjx3EG4MJ')
      .then(
        () => {
          alert('Message successfully sent!');
          form.current.reset();
          if (typeof window !== 'undefined') {
            // Client-side-only code
            // window.location.reload(false);
          }
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <Layout title=" | Contact">
      <div className={`container ${styles['contact-page']}`}>
        <div className={styles['text-zone']}>
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
            <br />
          </h1>

          <div className={styles.desc}>
            <p style={{ animation: 'pulse 2s' }}>
              I am interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
              <br />
            </p>
          </div>

          <div className={styles['contact-form']}>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className={styles.half}>
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    autoComplete="off"
                    required
                  />
                </li>
                <li className={styles.half}>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    autoComplete="off"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className={styles['flat-button']}
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <MyAwesomeMap />
      </div>
      <Loader type="ball-scale-multiple" active />
    </Layout>
  );
};

export default ContactPage;
