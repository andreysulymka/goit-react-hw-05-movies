import { useState } from "react";
import { Form, Input, Label, Button, Div } from './InputBar.styled';


export default function InputBar ({handleSearchSubmit}) {

    const [input, setInput] = useState("");
    

    const onChange = e => {
        setInput(e.currentTarget.value.toLowerCase());
    };
    
    const onSubmit = e => {
        e.preventDefault();
        handleSearchSubmit(input);
         setInput("");
    }

    return (
        <Div>
            <Form onSubmit={onSubmit}>
                    <Button type="submit">🔍
                        <Label>Search</Label>
                    </Button>
                
                    <Input
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search movies"
                        value={input}
                        onChange={onChange}
                    />
            </Form>
        </Div>
    );
};