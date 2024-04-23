// import { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    // const [tasks, settasks] = useState([]);

    return (
        <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex  items-center flex-col">
            {/* <Header tasks={tasks} />
            <Create tasks={tasks} settasks={settasks} />
            <Show tasks={tasks} settasks={settasks} /> */}
            <Header />
            <Create />
            <Show />
        </div>
    );
};

export default App;
