import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface Props {
  label: string
  options: { title: string, value: number }[]
  onChange: (value: number) => void
  value?: number
}

export default function InputSelect({label, options, onChange, value}: Props) {
  return (
    <>
      <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          name="location"
          defaultValue="Canada"
          value={value}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
          onChange={(e)=>onChange(Number(e.target.value))}
        >
          {options.map((option) => (
            <option key={option.title} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </>
  )
}