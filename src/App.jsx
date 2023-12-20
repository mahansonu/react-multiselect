import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SelectOptions from "./components/SelectOptions";

const App = ({data,displayText = 'Pease select',OpenIcon = ChevronDown,CloseIcon = ChevronUp, isOpen = false,isSearch = true}) => {
  const [open, toggleOpen] = useState(isOpen)
  const selectRef = useRef(null)
  return (
    <div className="mx-4 my-8 relative">
      <div onClick={() => toggleOpen( d => !d)} className="flex justify-between border border-gray-300 rounded-sm shadow-sm px-4 py-2 items-center cursor-pointer">
        <span>{displayText}</span>
        {open ? <CloseIcon /> : <OpenIcon />}
      </div>
      {open && <SelectOptions options={data} isSearch={isSearch} />}
    </div>
  )
}

export default App;