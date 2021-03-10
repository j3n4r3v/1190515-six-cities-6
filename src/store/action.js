export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_OPTION: `main/activeOption`,
};

export const ActionCreator = { // Для описания actions в виде обьектов
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeOption: (option) => ({
    type: ActionType.CHANGE_OPTION,
    payload: option
  })
};
