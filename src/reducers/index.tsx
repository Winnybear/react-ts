import { EnthusiasmAction } from '../actions'
import { StoreState } from '../types/index'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, INCREMNT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type){
        case INCREMNT_ENTHUSIASM: 
            return {...state, enthusiasmLevel: state.enthusiasmLevel+1};
        case DECREMENT_ENTHUSIASM:
            return {...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
    }
    
    return state;
}