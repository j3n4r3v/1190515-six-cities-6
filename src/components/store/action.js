export const ActionType = {
  CHANGE_CITY: `main/changeCity`, // почему тут мейн?
  FILTERED_OFFERS: `main/filteredOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
};
