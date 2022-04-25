export function StaticModal() {
  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        How to play
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Memory Card Game
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-start">
              Welcome to Memory Card Game! In this game, you are presented with
              multiple images of dog/cat. Everytime you click an image, the
              order of the images will be shuffled. Your objective is to click
              all of the dog, but you can't click on one dog more than once! If
              you do so, your score will be reset to zero. Can you get to the
              max score?
            </div>
            <div className="modal-footer">
              <small className="text-dark text-opacity-50 me-auto">
                copyright yosuanicolaus 2022
              </small>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Let's go!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
