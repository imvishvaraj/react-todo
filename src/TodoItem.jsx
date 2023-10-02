
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <li>
        <label className="text-lg">
        <input type="checkbox" class="default:ring-2 mr-5 " checked={completed}  onChange={e => toggleTodo(id, e.target.checked)} />
          {/* <input
            type="checkbox"
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          /> */}
          {title}

        </label>



        {/* <button onClick={() => deleteTodo(id)} className="ml-2 mr-2 mt-2 mb-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button> */}
        <span onClick={() => deleteTodo(id)} className="ml-5 mr-5 text-red-500 hover:text-red-600 ">
          X
        </span>
      </li>
    )
  }

  