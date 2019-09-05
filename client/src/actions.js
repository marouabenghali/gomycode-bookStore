import axios from "axios";

// export const getbooksadmin = () => dispatch => {
//   axios.get("/bookadmin-list").then(res =>
//     dispatch({
//       type: "GET_BOOKSADMIN",
//       payload: res.data
//     })
//   );
// };
export const getbooksadmin = () => dispatch => {
  axios
    .get("/book-list")
    .then(res =>
      dispatch({
        type: "GET_BOOKSADMIN",
        payload: res.data
      })
    )
    // .then(res => console.log(res.data));
 };

export const addBookAdmin = bookadmin => dispatch => {
  axios.post("/book-list", bookadmin).then(res => dispatch(getbooksadmin()));
};

export const deleteBookAdmin = id => dispatch => {
  axios.delete(`/book-list/${id}`).then(res => dispatch(getbooksadmin()));
};

export const updateBookAdmin = (id, bookadmin) => dispatch => {
  axios
    .put(`/book-list/${id}`, bookadmin)
    .then(res => dispatch(getbooksadmin()));
};


export const userSignupRequest = userData => dispatch => {
  const { name, email, password, passwordconfirmation } = userData;
  const newCustmer = {
    name,
    email,
    password,
    passwordconfirmation
  };
  axios.post("/customer-list/register", newCustmer).then(res =>
    dispatch({
      type: "SIGN_UP",
      payload: res.data
    })
  );
};
export const userLoginRequest = userData => dispatch => {
  const { email, password } = userData;
  const newlogin = {
    email,
    password
  };
  axios.post("/customer-list/login", newlogin).then(res =>
    dispatch({
      type: "LOGIN_UP",
      payload: res.data
    })
  );
};
export const adminSignupRequest = userData => dispatch => {
  const { name, email, password, passwordconfirmation } = userData;
  const newAdmin = {
    name,
    email,
    password,
    passwordconfirmation
  };
  axios.post("/admin-list/register", newAdmin).then(res =>
    dispatch({
      type: "SIGN_UP",
      payload: res.data
    })
  );
};
export const adminLoginRequest = userData => dispatch => {
  const { email, password } = userData;
  const newloginadmin = {
    email,
    password
  };
  axios.post("/admin-list/login", newloginadmin).then(res =>
    dispatch({
      type: "LOGIN_UP",
      payload: res.data
    })
  );
};
export const getbooks = () => dispatch => {
  axios
    .get("/book-list")
    .then(res =>
      dispatch({
        type: "GET_BOOKS",
        payload: res.data
      })
    )
    .then(res => console.log(res.data));
};
export const selectBook = payload => dispatch => {
  dispatch({ type: "SELECT_BOOK", payload });
};
export const buyArticle = payload => dispatch => {
  dispatch({ type: "BUY_ARTICLE", payload });
};
export const filterName = payload => {
  return { type: "FILTER_NAME", payload };
};
export const filterType = payload => {
  return { type: "FILTER_TYPE", payload };
};
export const filterStock = payload => {
  return { type: "FILTER_STOCK", payload };
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