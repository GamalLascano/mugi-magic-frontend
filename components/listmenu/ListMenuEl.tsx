const ListMenuEl = ({ name }: { name: String }) => {
  return (
    <li className="text-white text-lg py-1">
      <a href="#">{name}</a>
    </li>
  );
};
export default ListMenuEl;
