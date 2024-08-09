import { atom, atomFamily, selectorFamily } from "recoil";
// import { TODOS } from "../todos";
import axios from "axios";

// export const todosAtomFamily = atomFamily({
//     key: 'todosAtomFamily',
//     default: (id) => {
//         return TODOS.find(x => x.id === id)
//     }
// })

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get:
      (id: number) =>
        async () => {
          await new Promise((r) => setTimeout(r, 5000))
          const res = await axios.get(
            `https://sum-server.100xdevs.com/todo?id=${id}`
          );
          return res.data.todo;
        },
  }),
});

export const todoAtom = atom({
  key: "todoAtom",
  default: 1,
});
