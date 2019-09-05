import axios from 'axios';
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify({ email, password });

    axios
        .post('/customer-list/login', body, config)
        .then(res =>
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data
            })
        )
        .catch(err => {
          
            dispatch({
                type: "LOGIN_FAIL"
            });
        });
};

