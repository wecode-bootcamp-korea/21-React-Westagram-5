import React from 'react';
import './Feeds.scss';
class Feeds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      commentLists: [],
    };
  }

  HandleChangeInput(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };
  addComment = () => {
    // 1. 배열 복사하는 방법 (... // spread operator => 사용 X)
    this.setState({
      commentLists: this.state.commentLists.concat(this.state.comment),
      comment: '',
    });
  };

  render() {
    console.log(this.state.newComment);
    return (
      <>
        <div className="feeds-like-info">
          <div className="like-info-img">
            <img
              alt="wholike"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Color_icon_blue_%26_purple.png"
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
          <span id="feedName">groundcover_</span>

          <span id="feedWrite">무안 바다를 보며 1박캠핑!</span>
        </div>

        <div className="feeds-wrote-time">
          <span id="wrote-time">1일 전</span>
        </div>

        <div className="comment">
          <ul className="commnetul">
            <li>
              <div className="comment-container">
                <span id="commentText">
                  <span id="commentName">headbingbing__</span>
                  <span id="liComment">
                    ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ줄바꿈ㅋㅋㅋㅋㅋㅋㅋㅋ
                  </span>
                </span>
              </div>
            </li>
            {/*  */}
            {this.state.commentLists.length > 0 &&
              this.state.commentLists.map((comment, idx) => {
                return (
                  <li key={idx}>
                    <div className="comment-container">
                      <span id="commentText">
                        <span id="commentName">headbingbing__</span>
                        <span id="liComment">{comment}</span>
                      </span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="commentInput">
          <input
            name="comment"
            placeholder="댓글 달기..."
            type="text"
            value={this.state.comment}
            onKeyPress={this.handleKeyPress}
            onChange={e => this.HandleChangeInput(e)}
          />
          <button
            style={
              this.state.comment.length > 0
                ? { color: 'black' }
                : { color: 'rgba(64, 149, 225, 0.35)' }
            }
            className="upload-btn"
            onClick={this.addComment}
          >
            <span>게시</span>
          </button>
        </div>
      </>
    );
  }
}

export default Feeds;
