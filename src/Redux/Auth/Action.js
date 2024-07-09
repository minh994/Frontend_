import axios from 'axios';
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGOUT
} from './ActionTypes';
import api, { API_BASE_URL } from '../../config/api'; // Import API base URL

// Action creators for registering a user
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        // Make POST request to register endpoint
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;

        // Save JWT token in localStorage
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }

        console.log("Registered user:", user);
        dispatch(registerSuccess(user));
    } catch (error) {
        console.error("Registration error:", error);
        dispatch(registerFailure(error.message));
    }
};

// Action creators for logging in a user
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        // Make POST request to login endpoint
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;

        // Save JWT token in localStorage
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }

        console.log("Logged in user:", user);
        dispatch(loginSuccess(user));
    } catch (error) {
        console.error("Login error:", error);
        dispatch(loginFailure(error.message));
    }
};

// Action creator for fetching user profile using token
export const getUser = (token) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
        // Make GET request to user profile endpoint with Authorization header
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const user = response.data;

        console.log("Fetched user profile:", user);
        dispatch({ type: GET_USER_SUCCESS, payload: user });
    } catch (error) {
        console.error("Fetch user profile error:", error);
        dispatch({ type: GET_USER_FAILURE, payload: error.message });
    }
};

// Action creator for logging out user (clearing localStorage)
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear(); // Clear JWT token from localStorage
};
