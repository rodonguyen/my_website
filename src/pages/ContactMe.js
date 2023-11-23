import { createHyperlink, changeWindowTitle } from '../components/utils';


const ContactMe = () => {
  changeWindowTitle(window.location.pathname);

  return (
    <div className="container contact-list">
        <h1 className='center'>
          Yo, let's be friends :)
        </h1>
        
        <ul className='text-align-left center'>
          <li>Email: rodonguyendd at gmail.com </li>
          <li>{createHyperlink('https://twitter.com/rodonguyen','X')}</li>
          <li>{createHyperlink('https://www.linkedin.com/in/rodonguyen/','LinkedIn')}</li>
          <li>{createHyperlink('https://github.com/rodonguyen/','Github')}</li>
          <li>{createHyperlink('https://dev.to/rodonguyen','Dev.to')}</li>
          <li>{createHyperlink('https://rodonguyen.medium.com/','Medium')}</li>
        </ul>
    </div>
  );
};

export default ContactMe;
