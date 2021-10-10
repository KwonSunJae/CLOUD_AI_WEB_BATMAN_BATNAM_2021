const list = ["섹터 a", "섹터 b", "섹터 c"];

const InputSectorPosition = () => {
  return (
    <div>
      Draggable
      {list.map((l, idx) => l)}
    </div>
  );
};

export default InputSectorPosition;
