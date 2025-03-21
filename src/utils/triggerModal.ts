import { showModalState, messageModalState } from "../store/slices/modalSlice";
import { store } from "../store/store";

export function triggerModal(message: string) {
  store.dispatch(messageModalState(message));
  store.dispatch(showModalState(true));
}
