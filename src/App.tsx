// import { useRecoilValue } from "recoil";
import { useRecoilValueLoadable } from "recoil";
// import { useRecoilStateLoadable } from "recoil";
import Header from "./Header";
import { todosAtomFamily } from "./state/atomfamily";

function App() {
  return (
    <div>
      <Header />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
    </div>
  );
}

type TodoProps = {
  id: number;
};

const Todo = ({ id }: TodoProps) => {
  // const currentTodo = useRecoilValue(todosAtomFamily(id));
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  console.log(todo);
  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <>
        {todo?.contents.title}
        {todo?.contents.description}
        <br />
      </>
    );
  } else if (todo.state === "hasError") {
    return <div>Error getting data from backend</div>;
  }
};

export default App;
