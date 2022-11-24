import SearchListEl from "./SearchListEl";
const SearchList = (props: {elements:string[],setArray:()=>void})=>{
return <div className="flex flex-col items-center py-1">
    <div className="max-h-64 overflow-y-auto bg-slate-200 p-3 border rounded-lg">
    {props.elements.map((el:string)=><SearchListEl key={el} name={el}  setArray={props.setArray}/>)}
    </div>
</div>
}
export default SearchList;