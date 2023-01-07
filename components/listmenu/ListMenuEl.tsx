import Link from "next/link";
const ListMenuEl = ({ name }: { name: String }) => {
  return (
    <li className="text-white text-lg py-1">
      <Link href={`/card/${name}`}>{name}</Link>
    </li>
  );
};
export default ListMenuEl;
