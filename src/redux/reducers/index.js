const initialState = {
  allCharacters: [],
  character: {},
  charactersFav: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
      };
    case "GET_CHARACTER":
      return {
        ...state,
        character: action.payload[0],
      };
    case "ADD_CHARACTER_FAV":
      return {
        ...state,
        charactersFav: [...state.charactersFav, action.payload],
      };
    case "DELETE_CHARACTER_FAV":
      const charFav = state.charactersFav.filter((c) => {
        return c.char_id !== action.payload;
      });

      return {
        ...state,
        charactersFav: charFav,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
