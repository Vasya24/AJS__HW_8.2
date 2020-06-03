import { ErrorRepository } from '../index'

test('Which error is it?', () => {
    const a = new ErrorRepository;
    expect(a.translate(3)).toBe('Type error')
})