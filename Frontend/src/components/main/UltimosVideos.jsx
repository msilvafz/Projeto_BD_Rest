import React from "react";

export const UltimosVideos = () => {
  return (
    <div className="album py-5 bg-light my-5">
      <h1 className="text-center my-5">Ultimos Videos</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="https://i.postimg.cc/DfcKWrXK/JS.png"
                alt="video1"
              ></img>
              <div className="card-body">
                <p className="card-text"></p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-info">
                    Assista
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="https://i.postimg.cc/nzt6rrVz/java.png"
                alt="video2"
              ></img>
              <div className="card-body">
                <p className="card-text"></p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-info">
                    Assista
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="https://i.postimg.cc/3N8VjqvQ/Testes.png"
                alt="video3"
              ></img>
              <div className="card-body">
                <p className="card-text"></p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-info">
                    Assista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
