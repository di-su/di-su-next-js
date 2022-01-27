export default function Button({ text }: { text: string }) {
  return (
    <button
      className="btn btn-primary"
      //@ts-ignore
      onClick={(event) => (event.target.innerText = "You clicked me!")}
    >
      {text}
    </button>
  );
}
