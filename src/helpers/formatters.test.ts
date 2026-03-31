import { formatCEP, validateEmail, formatPhone, formatUF} from "./formatters";
import { describe, test, expect } from 'vitest';


describe('Technician Validators & Formatters', () => {

  test('deve formatar o CEP corretamente com hífen', () => {
    expect(formatCEP('37556140')).toBe('37556-140');
  });

  test('deve formatar telefone com parênteses e espaço', () => {
    expect(formatPhone('35988887777')).toBe('(35) 98888-7777');
  });

  test('deve validar e-mails corretamente', () => {
    expect(validateEmail('emailjdkoism')).toBe(false); 
    expect(validateEmail('teste@praticabr.com')).toBe(true);
  });

  test('deve transformar UF em maiúsculo e limitar a 2 caracteres', () => {
    expect(formatUF('mg')).toBe('MG');
    expect(formatUF('minas')).toBe('MI');
  });
});
