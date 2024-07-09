export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Nữ',
      featured: [
        {
          name: 'Sản phẩm mới',
          href: '/',
          imageSrc: 'https://bizweb.dktcdn.net/100/507/559/products/den-hnvlu025-5-20231115144231-f7.jpg?v=1708419942593',
          imageAlt: 'Người mẫu ngồi tựa lưng vào nhau, mặc áo thun Basic màu đen và xương.',
        },
        {
          name: 'Áo thun cơ bản',
          href: '/',
          imageSrc: 'https://bizweb.dktcdn.net/100/507/559/products/den-hnvlu026-1-20230109130328-75.jpg?v=1708420057527',
          imageAlt: 'Cận cảnh bộ sưu tập áo thun Basic với màu trắng nhạt, vàng đất, ô-liu và đen.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Quần áo',
          items: [
            { name: 'Sản phẩm hot', id: 'top', href: '{women/clothing/tops}' },
            { name: 'Áo thun', id: 'aothun' },
            { name: 'Áo khoác ', id: 'aokhoac' },
            { name: 'Váy', id: 'vay' },
            { name: 'Quần-Jean ', id: 'quanjean' },

          ],
        },
        {
          id: 'accessories',
          name: 'Phụ kiện',
          items: [
            { name: 'Đồng hồ', id: 'donghonu' },
            { name: 'Túi xách', id: 'tuixach' },
            { name: 'Mũ nữ', id: 'munu' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Nam',
      featured: [
        {
          name: 'Sản phẩm mới',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Áo có dây rút với khóa vòng đàn hồi và lớp lót bên trong có họa tiết.',
        },
        {
          name: 'Áo thun nghệ thuật',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Ba áo sơ mi màu xám, trắng và xanh được sắp xếp trên bàn với cùng một hình vẽ tay của các hình dạng chồng chéo nhau ở mặt trước của áo.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Quần áo',
          items: [
            { name: 'Áo khoác nam', id: 'aokhoacnam' },
            { name: 'Quần-jean nam', id: 'quanjeannam' },
            { name: 'Áo thun nam', id: 'aothunnam' },
            { name: 'Áo khoác', id: 'aokhoacnam' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Phụ kiện',
          items: [
            { name: 'Đồng hồ nam', id: 'donghonam' },
            { name: 'Ví', id: 'vinam' },
            { name: 'Mũ', id: 'munam' },
            { name: 'Giày Nam', id: 'giaynam' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Thông tin chúng tôi', id: '/' },
    { name: 'Blog', id: '/' },
  ],
};
