type PropTypes = {
  text: string;
};

export default function ({ text }: PropTypes) {
  return <p className="text-error text-xs font-bold">{text}</p>;
}
