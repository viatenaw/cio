import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PublishPost extends Component {
  state = {
    value: ""
  };
  onChangeHandler = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <form className="PublishPostTextArea form-group shadow-textarea">
          {/* <i className="fa fa-pen-square" />{" "} */}
          <label>
            <textarea
              className="TextAreaPublishPost form-control z-depth-1"
              id="PublishText"
              rows="6"
              type="text-area"
              placeholder="Start Typing Let's Go Yeah!!....."
              onChange={this.onChangeHandler}
              value={this.state.value}
            />
          </label>

          <br />
          <div>
            <button
              type="submit"
              id="PublishPostSubmitButton"
              className=" btn btn-outline-success"
            >
              Publish
            </button>
            <div className="iconsPublishPost">
              <FontAwesomeIcon
                icon="user-tag"
                size="2x"
                title="Tag Players"
                className="PublishPostIcons"
                id="userTagIcon"
              />
              <FontAwesomeIcon
                icon="images"
                size="2x"
                title="Add Media"
                id="imagesIcon"
                className="PublishPostIcons"
              />
              <FontAwesomeIcon
                icon="video"
                size="2x"
                id="videoIcon"
                title="Go Live"
                className="PublishPostIcons"
              />
            </div>
          </div>
          <hr id="belowSubmitLine" />
        </form>
        <div className="iconsHomePage">
          <FontAwesomeIcon
            icon="bolt"
            size="3x"
            id="scoresBoltIcon"
            title="Scores"
          />
          <FontAwesomeIcon
            icon="running"
            size="3x"
            id="matchesRunningIcon"
            title="Ongoing Matches Near You"
          />
          <FontAwesomeIcon icon="poll" size="3x" id="pollIcon" title="Polls" />
          <FontAwesomeIcon
            icon="crown"
            size="3x"
            id="quizCrownIcon"
            title="Play Quiz"
          />
        </div>
      </div>
    );
  }
}

export default PublishPost;
