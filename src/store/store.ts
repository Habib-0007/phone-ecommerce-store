import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StoreState {
  items: number;
  increase: (by: number) => void;
}

const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        items: 0,
        increase: (by) => set((state) => ({ items: state.items + by })),
      }),
      { name: "Store" }
    )
  )
);

export default useStore;
