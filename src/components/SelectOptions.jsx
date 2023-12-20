import { useEffect, useState } from "react"

const SelectOptions = ({options,isSearch}) => {
  const [selectOptions, setSelectOptions] = useState(options);
  const [checked, setChecked] = useState({})
  const [input, setInput] = useState("")
  const handleChange = (e) => {
    let filter_options = options.filter(d => d.name.toLowerCase().search(e.target.value.toLowerCase()) > -1);
    setInput(e.target.value);
    setSelectOptions(filter_options);
  }

  const handleCheckbox = (e) => {
    setChecked(d => {
      return {...d,[e.target.value]: e.target.checked}
    })
  }
  useEffect(() => {
    let checked_data = {}
    options.map(d => checked_data[d.id] = d.checked ? d.checked : false)
    setChecked(checked_data);
  },[])
  return (
    <div className="absolute inset-0 top-full">
      <ul className="bg-white px-4 flex flex-col gap-2 border border-gray-300 rounded-sm">
        {isSearch && <SelectSearchInput handleChange={handleChange} value={input} />}
        {selectOptions.map(d => (
          <li key={d.id}><SelectLabel data={d} checked={checked[d.id]} hanleChange={handleCheckbox} /></li>
        ))}
        {selectOptions.length == 0 && <li>No data found</li>}
      </ul>
      {JSON.stringify(checked)}
    </div>
  )
}

const SelectSearchInput = ({value = "",handleChange}) => {
  return <input type="text" placeholder="Plase start search" className="flex px-2 py-1 rounded-full shadow-sm border border-gray-300 mx-2 mt-2" onChange={handleChange} value={value} />
}

const SelectLabel = ({data, hanleChange,checked = false}) => {
  return (
    <label htmlFor={`checkbox-${data.id}`} className="flex gap-2 items-center">
      <input type="checkbox" id={`checkbox-${data.id}`} checked={checked} onChange={hanleChange} value={data.id} />
      <span>{data.name}</span>
    </label>
  )
}

export default SelectOptions;