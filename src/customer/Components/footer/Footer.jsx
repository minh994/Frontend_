import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
                  Công Ty
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Giới Thiệu
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Tuyển Dụng
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Báo Chí
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Đối Tác
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
                  Giải Pháp
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Tiếp Thị
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Phân Tích
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Thương Mại
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Thông Tin Chi Tiết
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Hỗ Trợ
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
                  Tài Liệu
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Hướng Dẫn
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Trạng Thái API
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
                  Pháp Lý
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Khiếu Nại
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Quyền Riêng Tư
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
                  Điều Khoản
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
                  © 2024 Công ty của tôi. Bảo lưu mọi quyền.
        </Typography>
        <Typography variant="body2" component="p" align="center">
                  Được tạo ra bằng tình yêu của Tôi
        </Typography>
        <Typography variant="body2" component="p" align="center">
                  Biểu tượng được tạo bởi {' '}
                  <Link href="https://www.facebook.com/profile.php?id=100030778963465" color="inherit" underline="always">
            
          </Link>{' '}
                 {' '}
                  <Link href="https://www.facebook.com/profile.php?id=100030778963465" color="inherit" underline="always">
                      Minh Lê
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
