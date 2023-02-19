const initialState = [
  {
    id: 0,
    enterVehicle: "3 Wheeler 550 Kgs - 4ft 8 inch long",
    enterGrace: "1 hour",
    enterUom: "7978",
    enterAmount: "100/hour",
  },
  {
    id: 1,
    enterVehicle: "4 Wheeler 850 Kgs - 4ft 8 inch long",
    enterGrace: "2 hour",
    enterUom: "7078",
    enterAmount: "150/hour",
  },
];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      state = [...state, action.payload];
      return state;

    case "DELETE_LIST":
      const contactFilter = state.filter((listData) =>
        listData.id === action.payload ? null : listData
      );
      state = contactFilter;
      return state;

    case "UPDATE_LIST":
      const contactUpdate = state.filter((listData) =>
        listData.id === action.payload.id
          ? Object.assign(listData, action.payload)
          : listData
      );
      state = contactUpdate;
      return state;

    case "RESET_LIST":
      state = [{ name: null, email: null, phone: null }];
      return state;
    default:
      return state;
  }
};
