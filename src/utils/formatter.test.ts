import { describe, expect, test } from 'vitest';
import {
  formaterIsoDato,
  formaterIsoDatoTid,
  formaterIsoMånedÅr,
  formaterNullableIsoDato,
  formaterTallMedTusenSkille,
  harTallverdi,
} from './formatter';

describe('sjekk - formatering av tall, dato og tid', () => {
  test('nullable-iso-dato skal formateres riktig', () => {
    const datoStandard = formaterNullableIsoDato('2024-08-31');
    const datoTid = formaterNullableIsoDato('2024-08-31T12:30:14');
    const datoUndefined = formaterNullableIsoDato(undefined);

    expect(datoStandard).toBe('31.08.2024');
    expect(datoTid).toBe('31.08.2024');
    expect(datoUndefined).toBeUndefined;
  });

  test('iso-dato skal formateres riktig', () => {
    const dato = formaterIsoDato('2024-08-31');
    const datoTid = formaterIsoDato('2024-08-31T12:30:14');

    expect(dato).toBe('31.08.2024');
    expect(datoTid).toBe('31.08.2024');
  });

  test('iso-måned-år skal formateres riktig', () => {
    const månedÅr = formaterIsoMånedÅr('2024-08-31');
    const månedÅrTid = formaterIsoMånedÅr('2024-08-31T12:30:14');

    expect(månedÅr).toBe('08.2024');
    expect(månedÅrTid).toBe('08.2024');
  });

  test('iso-dato-tid skal formateres riktig', () => {
    const datoTid = formaterIsoDatoTid('2024-08-31T12:30:14');

    expect(datoTid).toBe('31.08.2024 kl.12:30');
  });

  test('skal formatere tall med tusenskille', () => {
    expect(formaterTallMedTusenSkille(10)).toBe('10');
    expect(formaterTallMedTusenSkille(100)).toBe('100');
    expect(formaterTallMedTusenSkille(1000)).toBe('1\xa0000');
    expect(formaterTallMedTusenSkille(10000)).toBe('10\xa0000');
    expect(formaterTallMedTusenSkille(100000)).toBe('100\xa0000');
    expect(formaterTallMedTusenSkille(1000000)).toBe('1\xa0000\xa0000');
    expect(formaterTallMedTusenSkille(10000000)).toBe('10\xa0000\xa0000');
    expect(formaterTallMedTusenSkille(100000000)).toBe('100\xa0000\xa0000');
    expect(formaterTallMedTusenSkille(1000000000)).toBe('1\xa0000\xa0000\xa0000');
  });

  test('sjekk - harTallverdi', () => {
    const ti = harTallverdi(10);
    const minusTi = harTallverdi(-10);
    const talletNull = harTallverdi(0);
    const tiStreng = harTallverdi('10');
    const minusTiStreng = harTallverdi('-10');
    const talletNullStreng = harTallverdi('0');

    const udefinert = harTallverdi(undefined);
    const verdienNull = harTallverdi(null);
    const streng = harTallverdi('streng');
    const tomStreng = harTallverdi('');

    expect(ti).toBe(true);
    expect(minusTi).toBe(true);
    expect(talletNull).toBe(true);
    expect(tiStreng).toBe(true);
    expect(minusTiStreng).toBe(true);
    expect(talletNullStreng).toBe(true);

    expect(udefinert).toBe(false);
    expect(verdienNull).toBe(false);
    expect(streng).toBe(false);
    expect(tomStreng).toBe(false);
  });
});
