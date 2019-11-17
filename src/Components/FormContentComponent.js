import React from 'react';

function FormContentComponent(props) {
    const hide = {
        display:"none"
    }


    const inputs = props.dynamicInputForms.map((input, index) => {
        return (
            <label>
                Add Subtask
                <input
                    key={index}
                    type="text"
                    value={input}
                    onChange={(event)=> props.handleDynamicInputForms(event, index)}
                    placeholder="Text here"
                />
            </label>)
            
    })

    return (
        <form style={props.displayForm ? null : hide}>
            <div className="section-title"><span>1</span>Task</div>
            <div className="inner-wrap">
                <label>Task Title
                    <input 
                        type="text"
                        name="field"
                        placeholder="Title"
                        value={props.mainInputForm}
                        onChange={(event)=> props.handleMainInputForm(event)}
                    />
                </label>
                <label>Description <textarea name="field"></textarea></label>
            </div>
            <div className="section-title"><span>2</span>Subtasks</div>
            <div className="inner-wrap">
                {inputs}
            </div>
            
            <button type="button" className="button-section">Submit!</button>
        </form>
    )
}

export default FormContentComponent;
