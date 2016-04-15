import { Session } from './session.model';

describe('Session model', () => {

  let mockSession: Session = { id: 1, name: 'Super Cat', level: 'nine' };

  it('has name', () => {
    let session = mockSession;
    expect(session.name).toEqual('Super Cat');
  });

  it('has id', () => {
    let session = mockSession;
    expect(session.id).toEqual(1);
  });

  it('has level', () => {
    let session = mockSession;
    expect(session.level).toEqual('nine');
  });

});
