import { fireEvent, render } from '@testing-library/react';
import Input, {IInputProps} from "../Input";

const renderComponent = (props:IInputProps) => render(<Input {...props}/>);
const mockOnChange = jest.fn();

describe('src/view/common/input', ()=>{
    
    let props: IInputProps;
})