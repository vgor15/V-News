render() {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">Top Headlines</h2>
  
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4 mb-4" key={article.url}>
                {/* Updated card structure */}
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={article.urlToImage || "news.png"}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {!article.title ? "Title is not available" : article.title}
                    </h5>
                    <p className="card-text">
                      {!article.description
                        ? "Description is not available"
                        : article.description}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        {article.publishedAt
                          ? `Last updated: ${new Date(article.publishedAt).toLocaleString()}`
                          : "Update time not available"}
                      </small>
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-danger"
            onClick={this.handlePreClk}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= 2}
            className="btn btn-danger"
            onClick={this.handleNextClk}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
  