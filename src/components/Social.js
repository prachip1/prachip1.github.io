import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Social() {
    return (
        <div className="social" className='flex justify-center'>
            <a href="https://www.prachipweb.co.in" target="_blank" className="inline-flex items-center text-pink-light w-10 h-10 focus:outline-none hover:bg-black-light rounded text-base mt-4 md:mt-0">
             <FontAwesomeIcon icon={faTwitter} ></FontAwesomeIcon>
            </a>
            <a href="https://www.prachipweb.co.in" target="_blank" className="inline-flex items-center text-pink-light w-10 h-10 focus:outline-none hover:bg-black-light rounded text-base mt-4 md:mt-0">
             <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
            </a>
            <a href="https://www.prachipweb.co.in" target="_blank" className="inline-flex items-center text-pink-light w-10 h-10 focus:outline-none hover:bg-black-light rounded text-base mt-4 md:mt-0">
             <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
            </a>
         
        </div>
            );
            }