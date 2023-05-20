import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
      <ul>
        {contacts.length !== 0 ? (
          contacts.map(({ name, id, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
            <li className={css.nocontacts}>No contacts found</li>
        )}
      </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

  