import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = (state) => state.contacts.items;

export const selectFilterValue = (state) => state.filters.name;

export const getIsLoading = (state) => state.contacts.isLoading;

export const getError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectUsers, selectFilterValue],

  (users, filterValue) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
