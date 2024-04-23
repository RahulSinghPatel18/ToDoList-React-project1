import {useContext, useState } from "react";
import { todocontext } from "../Context/Context";

const Create = (props) => {
    // const tasks = props.tasks;;
    // const settasks = props.settasks;
    // const {tasks, settasks} = props;

    const [tasks, settasks] = useContext(todocontext);
    const [title, settitle] = useState("");

    const TaskSubmitHandler = (e) => {
        e.preventDefault();
        settasks([...tasks, { title: title, completed: false }]);
        settitle("");
    };

    
  return (
    <form
    onSubmit={TaskSubmitHandler}
    className="w-[35%] flex justify-between px-5 my-[2%]"
>
    <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        placeholder="write your next task..."
        className="px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700 "
        type="text"
    />
    <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
        <i className="ri-add-fill"></i>
    </button>
</form>
  )
}

export default Create
