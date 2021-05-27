import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';
class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />

        <body>
          <main>
            <section>
              <div className="feeds">
                <article>
                  <div className="feeds-nav">
                    <div className="feeds-profile">
                      <div className="imgBox">
                        <img
                          className="feeds-profile"
                          alt="profile"
                          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/130689853_2743696002514149_7606911086237819721_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=vs1HMDNwE20AX_Himy9&edm=ABfd0MgBAAAA&ccb=7-4&oh=c88d95692f3075c5c2437b94ab03118d&oe=60B0BD09&_nc_sid=7bff83"
                        />
                      </div>
                      <div className="feeds-profile-wrap">
                        <div className="feeds-profile-name">
                          <span className="profile-name">groundcover_</span>
                        </div>
                        <div className="feeds-profile-location">
                          <span className="profile-location">무안군</span>
                        </div>
                      </div>
                    </div>
                    <div className="feeds-option"></div>
                  </div>

                  <div className="feeds-img">
                    <img src="/images/IMG_7807.jpg" alt="feeds" />
                  </div>

                  <div className="feeds-icon-wrap">
                    <div className="feeds-icon-left">
                      <div className="feeds-like-icon">
                        <svg
                          className="_8-yf5 "
                          fill="#ed4956"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </div>
                      <div className="feeds-comment-icon">
                        <svg
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="feeds-share-icon">
                        <svg
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="feeds-icon-right">
                      <div className="feeds-bookMark-icon">
                        <svg
                          className="_8-yf5 "
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="feeds-like-info">
                    <div className="like-info-img">
                      <img
                        className="info-img"
                        alt="wholike"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/21690415_849658105189237_7965060341270839296_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=w5_0dMXRkQ0AX-DNban&edm=AEF8tYYBAAAA&ccb=7-4&oh=d85c0834fb66aa3ae200780849351c19&oe=60B15EA4&_nc_sid=a9513d"
                      />
                    </div>
                    <div className="like-info-text">
                      <span>jayorjaehyeok</span>님&nbsp;
                      <div>
                        외 <span>123</span>명
                      </div>
                      이 좋아합니다.
                    </div>
                  </div>

                  <div className="feeds-written">
                    <div className="feeds-written-name">
                      <span>groundcover_</span>
                    </div>
                    <div className="feeds-written-text">
                      <span>무안 바다를 보며 1박캠핑!</span>
                    </div>
                  </div>

                  <div className="feeds-comment-wrap">
                    <div className="comment">
                      <ul className="comment-ul">
                        <li class="comment-li">
                          <div className="comment-container">
                            <span className="comment-text">
                              <span className="comment-name">
                                headbingbing__
                              </span>
                              <span className="comment">
                                ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ줄바꿈ㅋㅋㅋㅋㅋㅋㅋㅋ
                              </span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="feeds-wrote-time">
                      <span id="wrote-time">1일 전</span>
                    </div>
                    <div className="feeds-comment">
                      <input
                        className="comment-input"
                        placeholder="댓글 달기..."
                        type="text"
                      />
                      <button className="upload-btn">
                        {' '}
                        <span>게시</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <div class="main-right-wrap">
                <div class="profileBox">
                  <div class="profilebox-profile">
                    <div class="profilebox-profile-img"></div>
                    <div class="profilebox-profile-name"></div>
                    <div class="porfilebox-profile-index"></div>
                  </div>

                  <div>
                    <div class="storyBox">
                      <div class="storyText">
                        <span>스토리</span>
                      </div>
                      <button class="stotyAll" type="button">
                        <span>모두 보기</span>
                      </button>
                      <ul class="storyList">
                        <li class="story-follwer">
                          <img
                            class="story-follower-img"
                            alt="follwer profile"
                          ></img>
                          <div class="story-follower-name"></div>
                          <div class="story-follower-time"></div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="recommendBox">
                    <div class="recommendText">
                      <span>회원님을 위한 추천</span>
                    </div>
                    <button class="recommendAll" type="button">
                      <span>모두 보기</span>
                    </button>
                    <ul class="recommendList">
                      <li class="recommend-follower">
                        <img
                          class="recommend-follower-img"
                          alt="recommend follower"
                        ></img>
                        <div class="recommend-follower-name"></div>
                        <div class="recommend-followed">
                          <span>회원님을 팔로우합니다</span>
                        </div>
                        <button class="recommendfollew" type="button">
                          <span>팔로우</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="footer">
                    <span>footer</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </body>
      </>
    );
  }
}

export default Main;
