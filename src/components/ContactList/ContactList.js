import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../../redux/contacts/contacts-operations';
import ContactItem from './ContactItem';
import PreLoader from '../PreLoader/PreLoader';
import styles from './ContactList.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteClick, isLoadingContacts } = this.props;
    return (
      <div className={styles.Thumb}>
        {isLoadingContacts && (
          // <h1 className={styles.TitleLoading}>Loading...</h1>
          <PreLoader />
        )}

        <ul className={styles.List}>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDeleteClick={onDeleteClick}
                id={id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const onFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  contacts: onFilteredContacts(state.contacts.items, state.contacts.filter),
  isLoadingContacts: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
