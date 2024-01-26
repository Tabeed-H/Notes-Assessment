import React from "react";
import "./Note.css";

const Note = ({ note, onNoteEdit, onNoteDelete, onNotePin }) => {
  const handleEdit = () => {
    onNoteEdit(note);
  };
  const handleDelete = () => {
    onNoteDelete(note);
  };
  const handlePin = () => {
    onNotePin(note);
  };
  return (
    <div className="note-container">
      <div className="note-content">
        <h1>{note.title}</h1>
        <h5>{note.tagline}</h5>
        <p>{note.body}</p>
      </div>
      <div className="note-header">
        <button onClick={handlePin} className="edit-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.7598 1.00009C16.4369 0.995994 17.1077 1.12795 17.7334 1.388C18.359 1.64804 18.9266 2.03082 19.4037 2.51356C19.8807 2.99627 20.2576 3.56933 20.5133 4.19921C20.7689 4.82907 20.8984 5.50361 20.8943 6.18382C20.8903 6.86404 20.7529 7.53696 20.4898 8.16367C20.2275 8.78856 19.8452 9.35548 19.3644 9.83144L11.3058 17.9752L11.3004 17.9805C10.7202 18.5495 9.99625 18.9706 9.15388 18.9874C8.29904 19.0044 7.53661 18.6013 6.89877 17.9616C6.14878 17.2094 5.94279 16.3064 6.05131 15.4997C6.15401 14.7363 6.53228 14.0692 6.94729 13.6357L6.95275 13.63L13.1011 7.40812C13.4893 7.01528 14.1224 7.01152 14.5153 7.39971C14.9081 7.78791 14.9119 8.42106 14.5237 8.8139L8.38743 15.0236C8.2318 15.1883 8.07295 15.4728 8.03346 15.7663C7.99942 16.0194 8.04811 16.2817 8.31503 16.5494C8.69411 16.9296 8.96044 16.9908 9.11409 16.9878C9.27944 16.9845 9.54207 16.9019 9.89517 16.5574L17.9547 8.41268C18.2491 8.1219 18.4842 7.77426 18.6457 7.38949C18.8073 7.00469 18.8919 6.59084 18.8944 6.172C18.8968 5.75316 18.8171 5.33823 18.6601 4.95138C18.5031 4.56454 18.2721 4.21386 17.9811 3.91934C17.69 3.62485 17.3448 3.39238 16.9658 3.23482C16.5867 3.07727 16.181 2.99758 15.7719 3.00006C15.3629 3.00253 14.9582 3.08713 14.5811 3.24926C14.204 3.41139 13.8616 3.64802 13.5742 3.946L13.5658 3.95473L5.45484 12.1626L5.44968 12.1677C4.99589 12.6138 4.63362 13.1474 4.38454 13.7379C4.13544 14.3283 4.00466 14.9635 4.00012 15.6062C3.99558 16.249 4.11737 16.8861 4.35813 17.4803C4.58381 18.0372 5.12588 18.786 5.60643 19.2723C6.10021 19.772 6.94793 20.4178 7.48314 20.6399C8.06705 20.8822 8.69228 21.0044 9.32258 20.9999C9.95289 20.9953 10.5763 20.864 11.1566 20.6133C11.737 20.3626 12.2631 19.9972 12.704 19.5379L12.709 19.5327L20.2887 11.8623C20.6769 11.4695 21.31 11.4657 21.7029 11.8539C22.0957 12.2421 22.0995 12.8753 21.7113 13.2681L14.1416 20.9284C13.5182 21.5763 12.7734 22.0935 11.9498 22.4493C11.124 22.8061 10.2358 22.9933 9.33706 22.9998C8.43832 23.0063 7.54753 22.832 6.7166 22.4872C5.83696 22.1221 4.77137 21.2726 4.18383 20.678C3.58306 20.0701 2.85902 19.1062 2.50453 18.2313C2.16513 17.3937 1.99378 16.4967 2.00017 15.5921C2.00656 14.6876 2.19057 13.793 2.54181 12.9605C2.89207 12.1302 3.40184 11.3777 4.0422 10.7468L12.1391 2.55297C12.6093 2.06665 13.1707 1.67862 13.7912 1.41187C14.4136 1.14426 15.0828 1.00419 15.7598 1.00009Z"
              fill="gold"
            />
          </svg>
        </button>
        <button onClick={handleEdit} className="edit-button">
          <svg
            xmlns="http://www.w3.org/1000/svg"
            width="20"
            height="20"
            stroke="none"
          >
            <path
              d="M16.4324 2C16.2266 2 16.0227 2.04055 15.8325 2.11933C15.6423 2.19811 15.4695 2.31358 15.3239 2.45914L3.25659 14.5265L2.42524 17.5748L5.47353 16.7434L17.5409 4.67608C17.6864 4.53051 17.8019 4.3577 17.8807 4.16751C17.9595 3.97732 18 3.77348 18 3.56761C18 3.36175 17.9595 3.1579 17.8807 2.96771C17.8019 2.77752 17.6864 2.60471 17.5409 2.45914C17.3953 2.31358 17.2225 2.19811 17.0323 2.11933C16.8421 2.04055 16.6383 2 16.4324 2ZM15.0671 0.271568C15.5 0.0922788 15.9639 0 16.4324 0C16.9009 0 17.3648 0.0922786 17.7977 0.271568C18.2305 0.450858 18.6238 0.713646 18.9551 1.04493C19.2864 1.37621 19.5492 1.7695 19.7285 2.20235C19.9077 2.63519 20 3.09911 20 3.56761C20 4.03611 19.9077 4.50003 19.7285 4.93288C19.5492 5.36572 19.2864 5.75901 18.9551 6.09029L6.69996 18.3454C6.57691 18.4685 6.42387 18.5573 6.25597 18.6031L1.26314 19.9648C0.916928 20.0592 0.546666 19.9609 0.292916 19.7071C0.0391662 19.4534 -0.0591621 19.0831 0.0352593 18.7369L1.39694 13.7441C1.44273 13.5762 1.53154 13.4231 1.6546 13.3001L13.9097 1.04493C14.241 0.713645 14.6343 0.450857 15.0671 0.271568Z"
              fill="white"
            />
          </svg>
        </button>
        <button onClick={handleDelete} className="delete-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="red"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 4C7 2.34315 8.34315 1 10 1H14C15.6569 1 17 2.34315 17 4V5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H19.9394L19.1153 20.1871C19.0164 21.7682 17.7053 23 16.1211 23H7.8789C6.29471 23 4.98356 21.7682 4.88474 20.1871L4.06055 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7V4ZM9 5H15V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V5ZM6.06445 7L6.88085 20.0624C6.91379 20.5894 7.35084 21 7.8789 21H16.1211C16.6492 21 17.0862 20.5894 17.1191 20.0624L17.9355 7H6.06445Z"
              fill="red"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Note;
