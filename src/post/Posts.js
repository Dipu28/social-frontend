import React, { Component } from "react";
import { list } from "./apiPost";
import DefaultPost from "../images/mountains.jpg";
import { Link } from "react-router-dom";
import "../post/Posts.css";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      page: 1,
    };
  }

  loadPosts = (page) => {
    list(page).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  };

  componentDidMount() {
    this.loadPosts(this.state.page);
  }

  loadMore = (number) => {
    this.setState({ page: this.state.page + number });
    this.loadPosts(this.state.page + number);
  };

  loadLess = (number) => {
    this.setState({ page: this.state.page - number });
    this.loadPosts(this.state.page - number);
  };

  renderPosts = (posts) => {
    return (
      <div>
        {posts.map((post, i) => {
          const posterId = post.postedBy ? `/user/${post.postedBy._id}` : "";
          const posterName = post.postedBy ? post.postedBy.name : " Unknown";

          return (
            <div className="posts__body" key={i}>
              <div className="posts__img">
                <img
                  src={`${process.env.REACT_APP_API_URL}/post/photo/${post._id}`}
                  alt={post.title}
                  onError={(i) => (i.target.src = `${DefaultPost}`)}
                />
              </div>

              <div className="posts__content">
                <h5 className="posts__title">{post.title}</h5>
                <p className="posts__text">{post.body.substring(0, 100)}</p>
                <p className="posts__date">
                  Posted by <Link to={`${posterId}`}>{posterName} </Link>
                  on {new Date(post.created).toDateString()}
                </p>
                <Link
                  to={`/post/${post._id}`}
                  className="btn btn-raised btn-primary btn-sm"
                >
                  Read more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { posts, page } = this.state;
    return (
      <div className="posts">
        <h2>{!posts.length ? "No more posts!" : "Recent Posts"}</h2>

        {this.renderPosts(posts)}

        {page > 1 ? (
          <button
            className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
            onClick={() => this.loadLess(1)}
          >
            Previous ({this.state.page - 1})
          </button>
        ) : (
          ""
        )}

        {posts.length ? (
          <button className="posts__button" onClick={() => this.loadMore(1)}>
            Next ({page + 1})
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Posts;
