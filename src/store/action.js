export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORT_TYPE: `main/changeSortType`,
  CHANGE_ACTIVE_ID_CITY: `main/changeActiveIdCity`
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeOffersSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeActiveCityId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_ID_CITY,
    payload: id
  })
};
