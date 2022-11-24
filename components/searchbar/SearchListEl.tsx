import { useRouter } from "next/router";
const SearchListEl = (props:{name:string,setArray:()=>void})=>{
  const router = useRouter();
    const clickListener = (event: React.MouseEvent<HTMLElement>)=>{
        event.preventDefault();
        props.setArray();
        router.push('/card/' + props.name);
        //props.searchF(props.name);
    }
    return <div className="my-0.5 flex w-96 rounded-lg border border-gray-600 bg-gray-600 p-3 text-center text-gray-300">
    <div className="text-left text-xl cursor-pointer" onClick={clickListener}>{props.name}</div>
  </div>
}
export default SearchListEl;