import "./style.css";

const Buttons = ({tasks, hideDoneTasks, toggleHideDoneTasks}) => (
    <div className="filters">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDoneTasks} className="filters__button">{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="filters__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </ >
        )}
    </div>
);

export default Buttons;