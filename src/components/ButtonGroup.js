import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className="flex items-center gap-2 mx-auto">
      <button
        aria-label="play_icon"
        className="text-rose-600"
        onClick={previous}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </button>
      <button
        aria-label="play_icon"
        className="text-rose-600 rotate-180"
        onClick={next}
      >
        <KeyboardBackspaceOutlinedIcon className="text-3xl " />
      </button>
    </div>
  );
};

export default ButtonGroup;
