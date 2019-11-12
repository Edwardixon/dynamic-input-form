import React from 'react';

function Form(props) {
    const hide = {
        display:"none"
    }


    const inputs = props.dynamicInputForms.map((input, index) => {
        return (
            <input
                key={index}
                type="text"
                value={input}
                onChange={(event)=> props.handleDynamicInputForms(event, index)}
                placeholder="Text here"
            />)
    })

    return (
        <form style={props.displayForm ? null : hide}>
            <input 
                type="text"
                value={props.mainInputForm}
                onChange={(event)=> props.handleMainInputForm(event)}
                placeholder="Title"
            />
            {inputs}
            <button type="button">Submit!</button>
        </form>
    )
}

export default Form;