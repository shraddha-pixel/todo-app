import React, { useState } from 'react';


export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [timetaken, setTimeTaken] = useState("");
    const [action, setAction] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc || !timetaken || !action) {
            alert("All areas to be filled ,it cannot be blank");
        }
        else {
            addTodo(title, desc, timetaken, action);
            setTitle("");
            setDesc("");
            setTimeTaken("");
            setAction("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Activity</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Status</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <div className="mb-3">
                    <label htmlFor="timetaken" className="form-label">Time Taken</label>
                    <input type="text" value={timetaken} onChange={(e) => setTimeTaken(e.target.value)} className="form-control" id="timetaken" />
                </div>

                <div className="mb-3">
                    <label htmlFor="action" className="form-label">Action</label>
                    <input type="text" value={action} onChange={(e) => setAction(e.target.value)} className="form-control" id="action" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add New Property</button>
               
            </form>
        </div>
    )
}

