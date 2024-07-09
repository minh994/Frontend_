import { useState } from "react";
import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../Redux/Customers/Product/Action";
import "./CreateProductForm.css";

const initialSizes = [
    { name: "S", quantity: 0 },
    { name: "M", quantity: 0 },
    { name: "L", quantity: 0 },
];

const CreateProductForm = () => {
    const [productData, setProductData] = useState({
        imageUrl: "",
        brand: "",
        title: "",
        color: "",
        discountedPrice: "",
        price: "",
        discountPersent: "",
        size: initialSizes,
        quantity: "",
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
        description: "",
    });

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSizeChange = (e, index) => {
        let { name, value } = e.target;
        name = name === "size_quantity" ? "quantity" : name;

        const sizes = [...productData.size];
        sizes[index][name] = value;
        setProductData((prevState) => ({
            ...prevState,
            size: sizes,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct({ data: productData, jwt }));
    };

    return (
        <Fragment className="createProductContainer ">
            <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center ">
                Add New Product
            </Typography>
            <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="imageUrl"
                            value={productData.imageUrl}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Brand"
                            name="brand"
                            value={productData.brand}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={productData.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Color"
                            name="color"
                            value={productData.color}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discounted Price"
                            name="discountedPrice"
                            value={productData.discountedPrice}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discount Percentage"
                            name="discountPersent"
                            value={productData.discountPersent}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Top Level Category</InputLabel>
                            <Select
                                name="topLavelCategory"
                                value={productData.topLavelCategory}
                                onChange={handleChange}
                                label="Top Level Category"
                            >
                                <MenuItem value="men">Men</MenuItem>
                                <MenuItem value="women">Women</MenuItem>
                                <MenuItem value="kids">Kids</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Second Level Category</InputLabel>
                            <Select
                                name="secondLavelCategory"
                                value={productData.secondLavelCategory}
                                onChange={handleChange}
                                label="Second Level Category"
                            >
                                <MenuItem value="clothing">Clothing</MenuItem>
                                <MenuItem value="accessories">Accessories</MenuItem>
                                <MenuItem value="brands">Brands</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Third Level Category</InputLabel>
                            <Select
                                name="thirdLavelCategory"
                                value={productData.thirdLavelCategory}
                                onChange={handleChange}
                                label="Third Level Category"
                            >
                                <MenuItem value="top">Tops</MenuItem>
                                <MenuItem value="aothun">Áo thun nữ</MenuItem>
                                <MenuItem value="aokhoac">Áo khoác nữ</MenuItem>
                                <MenuItem value="vay">Váy</MenuItem>
                                <MenuItem value="quanjean">Quần-Jean nữ</MenuItem>
                                <MenuItem value="donghonu">Đồng hồ nữ</MenuItem>
                                <MenuItem value="munu">Mủ nữ</MenuItem>
                                <MenuItem value="tuixach">Túi sách</MenuItem>


                                <MenuItem value="aokhoacnam">Áo khoác nam</MenuItem>
                                <MenuItem value="quanjeannam">Quần-Jean nam</MenuItem>
                                <MenuItem value="aothunnam">Áo thun nam</MenuItem>
                                <MenuItem value="donghonam">Đồng hồ nam</MenuItem>
                                <MenuItem value="vinam">Ví nam</MenuItem>
                                <MenuItem value="munam">Mủ nam</MenuItem>
                                <MenuItem value="giaynam">Giày nam</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={3}
                            onChange={handleChange}
                            value={productData.description}
                        />
                    </Grid>
                    {productData.size.map((size, index) => (
                        <Grid container item spacing={3} key={index}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Size Name"
                                    name="name"
                                    value={size.name}
                                    onChange={(event) => handleSizeChange(event, index)}
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Quantity"
                                    name="size_quantity"
                                    type="number"
                                    value={size.quantity}
                                    onChange={(event) => handleSizeChange(event, index)}
                                    required
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button variant="contained" sx={{ p: 1.8 }} className="py-20" size="large" type="submit">
                            Add New Product
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Fragment>
    );
};

export default CreateProductForm;
