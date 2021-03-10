export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_ACTIVE_SORT_TYPE: `main/activeOption`,
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeActiveSortType: (option) => ({
    type: ActionType.CHANGE_ACTIVE_SORT_TYPE,
    payload: option
  })
};
