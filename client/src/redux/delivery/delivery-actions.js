export const SET_DELIVERY_ADDRESS = "SET_DELIVERY_ADDRESS"

export const setDeliveryAddress = address => async (dispatch, getState) => {
    dispatch({
        type: SET_DELIVERY_ADDRESS,
        payload: address
    })

    localStorage.setItem("deliveryAddress", JSON.stringify(address))
}

