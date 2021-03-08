export const ActionType = { // Описываю название самого действия
  CHANGE_CITY: `main/changeCity`, // как формируется название значения ключа CHANGE_CITY ?
};

export const ActionCreator = {
  changeCity: (city) => ({ // Для описания actions в виде обьектов
    type: ActionType.CHANGE_CITY,
    payload: city // почему здесь именно city ?
    // filter: offers.filter((offer) => {
    //   return offer.city.name;
    // })
  })
};
