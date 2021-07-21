import React from 'react';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>

            <Link to='/construction'>How it works</Link>
            <Link to='/construction'>Testimonials</Link>
            <Link to='/construction'>Careers</Link>
            <Link to='/construction'>Investors</Link>
            <Link to='/construction'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='https://github.com/Alexva397/the-diy-solution'>Contact</Link>
            <Link to='/construction'>Support</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>

            <Link to='/construction'>Instagram</Link>
            <Link to='/construction'>Facebook</Link>
            <Link to='/construction'>Youtube</Link>
            <Link to='/construction'>Twitter</Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            
          </div>
          <small class='website-rights'>The DIY Solution © 2020</small>
          {/* <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            The DIY Solution &reg; {new Date().getFullYear()}
          </Box> */}
          <div class='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

// // Footer component to be rendered later on Home page
// import React from "react";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";

// export default function Footer() {
//   return (
//     <footer>
//       <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}
//         px={{ xs: 3, sm: 10 }}
//         py={{ xs: 5, sm: 10 }}
//         bgcolor="#173e43"
//         color="white"
//       >
//         <Container maxWidth="lg">
//           <Grid>
//             <Grid item xs={12} sm={4}>
//               <Box borderBottom={1}>Help</Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Contact
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Support
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Privacy
//                 </Link>
//               </Box>
//             </Grid>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Grid>
//               <Box borderBottom={1}>Account</Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Login
//                 </Link>
//               </Box>
//               <Box>
//                 <Link href="/" color="inherit">
//                   Register
//                 </Link>
//               </Box>
//             </Grid>
//           </Grid>
//           <div class='social-icons'>
//             <Link
//               class='social-icon-link facebook'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <i class='fab fa-facebook-f' />
//             </Link>
//             <Link
//               class='social-icon-link instagram'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <i class='fab fa-instagram' />
//             </Link>
//             <Link
//               class='social-icon-link youtube'
//               to='/'
//               target='_blank'
//               aria-label='Youtube'
//             >
//               <i class='fab fa-youtube' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               <i class='fab fa-twitter' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <i class='fab fa-linkedin' />
//             </Link>
//           </div>
//           <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
//             The DIY Solution &reg; {new Date().getFullYear()}
//           </Box>
//         </Container>
//       </Box>
//     </footer>
//   );
// }
