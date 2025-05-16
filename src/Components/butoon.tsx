interface Props {
  color: string;
  text: string;
}

function Knap({ color, text }: Props) {
  return (
    <button type="button" className={`btn btn-${color}`}>
      {text}
    </button>
  );
}

export default Knap;
