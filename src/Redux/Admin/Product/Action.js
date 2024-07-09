import axios from "axios";
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
} from "./ActionType";

// Định nghĩa URL cơ sở cho API của bạn
const API_BASE_URL = "http://localhost:3306/shop";

// Hàm action để lấy danh sách sản phẩm
export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST });

        const { data } = await axios.get(`${API_BASE_URL}/api/admin/products/`);

        console.log("Fetched products:", data); // Kiểm tra dữ liệu trả về từ API

        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCTS_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Hàm action để tạo mới sản phẩm
export const createProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PRODUCT_REQUEST });

        const { data } = await axios.post(
            `${API_BASE_URL}/api/admin/products/`,
            product
        );

        dispatch({
            type: CREATE_PRODUCT_SUCCESS,
            payload: data,
        });

        console.log("Created product:", data);
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Hàm action để cập nhật sản phẩm
export const updateProduct = (product) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const { data } = await axios.put(
            `${API_BASE_URL}/api/admin/products/{product.productId}`,
            product
        );

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// Hàm action để xóa sản phẩm
export const deleteProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        await axios.delete(`${API_BASE_URL}/api/admin/products/{productId}`);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: productId,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
