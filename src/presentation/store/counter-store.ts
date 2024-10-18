import { create } from 'zustand';


export interface CounterState {
  count: number;

  incrementBy: (value: number) => void;
}


export const useCounterStore = create<CounterState>()( ( set, get ) =>({

  count: 10,

  incrementBy: ( value ) => {
    // utilizamos get() para obtener el estado actual del store
    set({ count: get().count + value });
  },


}))