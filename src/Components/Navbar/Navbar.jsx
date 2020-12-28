// import React from 'react'
// import $ from 'jquery'
// function Navbar() {
//     React.useEffect(()=>{
//         $(document).ready(function(){
//             $(window).scroll(function(){
//               if(this.scrollY > 20){
//                 $(".navbar").addClass("sticky");
//                 $(".goTop").fadeIn();
//               }
//               else{
//                 $(".navbar").removeClass("sticky");
//                 $(".goTop").fadeOut();
//               }
//             });
//           // eslint-disable-next-line no-restricted-globals
//             $(".goTop").click(function(){scroll(0,0)});
          
//             $('.menu-toggler').click(function(){
//               $(this).toggleClass("active");
//               $(".navbar-menu").toggleClass("active");
//             });
          
//             $(".works").magnificPopup({
//               delegate: 'a',
//               type: 'image',
//               gallery:{enabled:true}
//             });
//           });
//     })
//     return (
//         <div>
//         <nav className="navbar">
//             <div className="inner-width">
//                 <a href="#" className="logo" />
//                 <button className="menu-toggler">
//                     <span />
//                     <span />
//                     <span />
//                 </button>
//                 <div className="navbar-menu">
//                     <a href="#home">Home</a>
//                     <a href="#about">About</a>
//                     <a href="#services">Services</a>
//                     <a href="#education">Education</a>
//                     <a href="#works">Works</a>
//                     <a href="#contact">Contact</a>
//                 </div>
//             </div>
//         </nav>
//         </div>

//     )
// }

// export default Navbar;
