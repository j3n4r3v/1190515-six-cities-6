export const ActionType = { // Описываю название самого действия
  CHANGE_CITY: `main/changeCity`, // как формируется название значения ключа CHANGE_CITY ?
};

export const ActionCreator = {
  change: (city, offers) => ({ // Для описания actions в виде обьектов
    type: ActionType.CHANGE_CITY,
    town: city, // почему здесь именно city ?
    filter: offers.filter((offer) => {
      return offer.city.name;
    })
  })
};
