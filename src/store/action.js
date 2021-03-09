export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_OPTION: `main/activeOption`,
  CHANGE_ACTIVE_OFFER: `main/changeActiveIdCity`,
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeOption: (type) => ({
    type: ActionType.CHANGE_OPTION,
    payload: type
  }),
  сhangeActiveOffer: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: id
  })
};
