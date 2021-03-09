export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_OPTION: `main/activeOption`,
  CHANGE_ACTIVE_ID_CITY: `main/changeActiveIdCity`,
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeOption: (sortType) => ({
    type: ActionType.CHANGE_OPTION,
    payload: sortType
  }),
  changeActiveCityId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_ID_CITY,
    payload: id
  })
};
