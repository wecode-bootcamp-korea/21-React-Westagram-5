// import React from 'react';

// import './Main.scss';
// import Nav from '../../../Components/Nav/Nav';
// //클래스형 표현

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       noDisplaying: 'none',
//       displaying: 'inline-block',
//       comment: '',
//       commentsList: [],
//     };
//   }
//   //하트채우기
//   heartLiked = () => {
//     if (this.state.displaying === 'inline-block') {
//       this.setState({ displaying: 'none' });
//       this.setState({ noDisplaying: 'inline-block' });
//     } else {
//       this.setState({ displaying: 'inline-block' });
//       this.setState({ noDisplaying: 'none' });
//     }
//   };
//   //댓글
//   handleInput = e => {
//     this.setState({
//       comment: e.target.value,
//     });
//   };
//   addComments = () => {
//     console.log('good');
//     this.setState({
//       commentsList: this.state.commentsList.concat(this.state.comment),
//     });
//   };
//   render() {
//     return (
//       <body>
//         <div className="main">
//           <div className="contentBox">
//             {/* 메뉴바  */}
//             <Nav />
//             {/* 메인컨텐츠_ */}
//             <div className="mainContent">
//               <article className="article">
//                 <div className="content_1">
//                   <img
//                     className="con1_img"
//                     alt="프로필사진"
//                     src="/images/kiwanlee/내얼굴.png"
//                   />
//                   <div className="con1_id">guy2895</div>
//                 </div>
//                 <div className="content_2">
//                   <img
//                     alt="게시사진"
//                     src="/images/kiwanlee/나이키.PNG"
//                     className="con2_img1"
//                   />
//                   <div className="con2_icon">
//                     <img
//                       className="con2_icon1"
//                       alt="하트"
//                       src="/images/kiwanlee/하트.png"
//                     />
//                     <img
//                       className="con2_icon5"
//                       alt="좋아요된하트"
//                       src="/images/kiwanlee/좋아요하트.png"
//                     />
//                     <img
//                       className="con2_icon2"
//                       alt="댓글"
//                       src="/images/kiwanlee/댓글.png"
//                     />
//                     <img
//                       className="con2_icon3"
//                       alt="공유"
//                       src="/images/kiwanlee/공유.png"
//                     />
//                     <img
//                       className="con2_icon4"
//                       alt="즐찾"
//                       src="/images/kiwanlee/즐찾.png"
//                     />
//                   </div>
//                 </div>
//                 <div className="reaction">
//                   <div className="liked_people">
//                     <img
//                       className="pic"
//                       src="/images/kiwanlee/위코드.PNG"
//                       alt="johnnyjsuh님의 프로필 사진"
//                     />
//                     <p>
//                       <span className="point_span">johnnyjsuh</span>님
//                       <span className="point_span">외 111,111명</span>이
//                       좋아합니다
//                     </p>
//                   </div>
//                   <div className="description">
//                     <span className="desc_id">guy6692</span>
//                     <span className="desc_tag"> @nike</span> 🌱
//                   </div>
//                   <div className="comment_section">
//                     <div className="comments">
//                       <span>
//                         <span className="desc_userID">postmalone</span>
//                         <span className="comment_contents">
//                           내가 신으면 더 잘어울릴 것 같아...!
//                         </span>
//                       </span>

//                       <div>
//                         <div className="comment_like">
//                           <img
//                             style={{ display: this.state.displaying }}
//                             onClick={this.heartLiked}
//                             className="comment_heart1"
//                             src="/images/kiwanlee/하트1.png"
//                             alt="하트1"
//                           />
//                           <img
//                             style={{ display: this.state.noDisplaying }}
//                             onClick={this.heartLiked}
//                             className="comment_heart_liked"
//                             src="/images/kiwanlee/좋아요하트.png"
//                             alt="좋아요된하트"
//                           />
//                         </div>
//                       </div>
//                       {this.state.commentsList.map((ele, idx) => {
//                         return (
//                           <span key={ele + idx}>
//                             <p>
//                               <span className="desc_userID">guy2895</span>
//                               <span className="comment_contents">{ele}</span>
//                             </p>
//                           </span>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//                 <form className="comment_form">
//                   <div className="input_box">
//                     <input
//                       onChange={this.handleInput}
//                       value={this.state.comment}
//                       id="comment_input"
//                       type="text"
//                       placeholder="댓글달기..."
//                     />
//                   </div>
//                   <div className="button_box">
//                     <button
//                       onClick={this.addComments}
//                       type="button"
//                       className="btn"
//                     >
//                       <span className="">게시</span>
//                     </button>
//                   </div>
//                 </form>
//               </article>
//               <div className="sideBar">
//                 <div className="myProfile">
//                   <img
//                     className="pic"
//                     src="/images/kiwanlee/위코드.png"
//                     alt="wecode님의 프로필 사진"
//                   />
//                   <span className="sub_span">Wecode_Bootcamp</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//     );
//   }
// }

// export default Main;
