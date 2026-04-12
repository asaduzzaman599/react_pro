interface Props  {
  onValueChange: (value: string) => void
  name: string
  placeholder: string
  type: string 
  value: string
}
const InputText = ({ onValueChange, name, type, placeholder, value, ...props }: Props) => {
    return (
         <input
         {...props}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onValueChange(e.target.value)}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
    );
};

export default InputText;