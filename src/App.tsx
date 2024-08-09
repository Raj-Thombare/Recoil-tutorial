import { useRecoilValue } from "recoil";
import Header from "./Header";
import { todosAtomFamily } from "./state/atomfamily";

function App() {
  return (
    <div>
      <Header />
      <Todo id={1} />
      <Todo id={2} />
    </div>
  );
}

type TodoProps = {
  id: number;
};

const Todo = ({ id }: TodoProps) => {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {currentTodo?.title}
      {currentTodo?.description}
      <br />
    </>
  );
};

export default App;
