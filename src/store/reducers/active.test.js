import subject from './active';
import { loop, Cmd } from 'redux-loop';
import { toggleActive } from 'store/actions';
import { runGame } from 'store/effects';

describe('TOGGLE_ACTIVE', () => {
  it('start playing', () => {
    const state = false;
    const action = toggleActive();

    const result = subject(state, action);

    expect(result).toEqual(
      loop(true, Cmd.run(runGame, { args: [Cmd.getState, Cmd.dispatch] }))
    );
  });

  it('stop playing', () => {
    const state = true;
    const action = toggleActive();

    const result = subject(state, action);

    expect(result).toEqual(loop(false, Cmd.none));
  });
});
