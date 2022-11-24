import Navbar from "../../components/navbar/Navbar";
import React,{Fragment} from "react";
const testOverlay = ()=>{return <Fragment>
    <div className="bg-black -z-1 fixed w-full h-full opacity-30">
   
  <Navbar/>
</div>
<nav id="sidebar-menu" className="fixed block z-9 bg-gray-800 w-64 h-full top-0 right-0">
    <div className="flex justify-between">
        <h3 className="text-white text-xl pb-2 flex">List</h3>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.5} stroke="currentColor" className="w-10 h-7 flex">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
    

    <ul className="justify-evenly text-center w-full h-auto m-auto max-h-[calc(100vh-36px)] border rounded-sm bg-slate-400 overflow-y-auto">
      <li className="text-white text-lg py-1"><a href="#">Lightning bolt</a></li>
      <li className="text-white text-lg py-1"><a href="#">Ancestral Recall</a></li>
      <li className="text-white text-lg py-1"><a href="#">Blog</a></li>
      <li className="text-white text-lg py-1"><a href="#">About</a></li>
      <li className="text-white text-lg py-1"><a href="#">Contact</a></li>
    </ul>
  </nav> 
    

</Fragment>}
export default testOverlay;