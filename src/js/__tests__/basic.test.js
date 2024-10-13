import ErrorRepository from '../ErrorRepository';
describe('Check error', () => {
  const errors = new ErrorRepository();

  test('error checker case', () => {
    errors.translate(1, 'Lanoriya')
    errors.translate(2, 'MissLansha')
    const result = [
      errors.translate(1),
      errors.translate(2),
      errors.translate(2),
      errors.translate(3)
    ];
    
    expect(result).toEqual(['Lanoriya', 'MissLansha', 'MissLansha', 'Unknown error']);
  });
})