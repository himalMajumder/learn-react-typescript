
type InputProps = {
    value : string,
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) =>{
    // const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event);
    // }
    return <input type="text" onChange={props.handleChange} value={props.value} />
}