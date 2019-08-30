import axios from "axios";

export const userSignupRequest = userData =>dispatch=> {
const {name,email,password,passwordconfirmation}=userData
const newCustmer={
    name,
    email,
    password,
    passwordconfirmation
}
    axios.post("/customer-list/register",  newCustmer ).then(res =>
      dispatch({
        type: "SIGN_UP",
        payload: res.data
      })
    )
  
};


// export const addContact = conatct => dispatch => {
//   axios.post("/contact-list", conatct).then(res => dispatch(getcontacts()));
// };

export const filterName = payload => {
  return { type: "FILTER_NAME", payload };
};
export const filterType = payload => {
  return { type: "FILTER_TYPE", payload };
};
export const filterStock = payload => {
  return { type: "FILTER_STOCK", payload };
};

export const buyArticle = payload => {
  return { type: "BUY_ARTICLE", payload };
};
export const addArticle = payload => {
  return { type: "ADD_ARTICLE", payload };
};
export const minusArticle = payload => {
  return { type: "MINUS_ARTICLE", payload };
};
export const confirmOrder = payload => {
  return { type: "CONFIRM_ORDER", payload };
};
export const deletearticle = payload => {
  return { type: "DELETE_ARTICLE", payload };
};
export const filterByStars = payload => {
  return { type: "FIND_RATING", payload };
};
export const filterLabel = payload => {
  return { type: "FILTER_LABEL", payload };
};
export const selectBook = payload => {
  return { type: "SELECT_BOOK", payload };
};
