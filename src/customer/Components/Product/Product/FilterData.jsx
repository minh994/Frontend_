export const color = [
    "trắng",
    "Đen",
    "Đỏ",
    "Hồng đậm",
    "Kem",
    "Hồng",
    "Xanh lá",
    "Vàng",
];

export const filters = [
    {
        id: "màu_sắc",
        name: "Màu sắc",
        options: [
            { value: "white", label: "Trắng" },
            { value: "beige", label: "Kem" },
            { value: "blue", label: "Xanh dương" },
            { value: "brown", label: "Nâu" },
            { value: "green", label: "Xanh lá" },
            { value: "purple", label: "Tím" },
            { value: "yellow", label: "Vàng" },
        ],
    },

    {
        id: "kích_cỡ",
        name: "Kích cỡ",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },
];

export const singleFilter = [
    {
        id: "giá",
        name: "Giá",
        options: [
            { value: "99000-390000", label: "99.000VND Đến 390.000VND" },
            { value: "390000-499000", label: "390.000VND Đến 499.000VND" },
            { value: "499000-600000", label: "499.000VND Đến 600.000VND" },
            { value: "600000-700000", label: "600.000VND Đến 700.000VND" },
            { value: "700000-1000000", label: "700.000VND Đến 1.000.000VND" },
        ],
    },
    {
        id: "giảm_giá",
        name: "Mức giảm giá",
        options: [
            { value: "10", label: "10% Trở lên" },
            { value: "20", label: "20% Trở lên" },
            { value: "30", label: "30% Trở lên" },
            { value: "40", label: "40% Trở lên" },
            { value: "50", label: "50% Trở lên" },
            { value: "60", label: "60% Trở lên" },
            { value: "70", label: "70% Trở lên" },
            { value: "80", label: "80% Trở lên" },
        ],
    },
    {
        id: "tình_trạng",
        name: "Tình trạng",
        options: [
            { value: "in_stock", label: "Còn hàng" },
            { value: "out_of_stock", label: "Hết hàng" },
        ],
    },
];

export const sortOptions = [
    { name: "Giá: Từ thấp đến cao", query: "price_low", current: false },
    { name: "Giá: Từ cao đến thấp", query: "price_high", current: false },
];
