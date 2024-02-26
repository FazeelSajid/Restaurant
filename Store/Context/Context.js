import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addtoFavouritesids: (id) => {},
  removeFavouritesids: (id) => {},
});

let FavouritesContextProvider = ({ children }) => {
  let [FavoritesIds, setFavouritesIds] = useState([]);

  let addtoFavouritesids = (id) => {
    setFavouritesIds((prevValue) => [...prevValue, id]);
  };

  let removeFavouritesids = (id) => {
    setFavouritesIds((prevValue) =>
      prevValue.filter((mealId) => mealId !== id)
    );
  };
  let value = {
    ids: FavoritesIds,
    addtoFavouritesids: addtoFavouritesids,
    removeFavouritesids: removeFavouritesids,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
export default FavouritesContextProvider;
