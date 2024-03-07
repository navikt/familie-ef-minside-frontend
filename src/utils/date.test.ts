import { describe, expect, test } from 'vitest';
import { antallDagerMellomDatoer, erPåfølgendeDatoer } from './date';

describe('kalkulering - antall dager mellom datoer', () => {
  test('skal håndtere etterfølgende datoer', () => {
    const antallDagerEtterfølgende = antallDagerMellomDatoer('2024-01-23', '2024-01-24');
    const antallDagerForskjelligMåned = antallDagerMellomDatoer('2024-01-24', '2024-07-12');
    const antallDagerForskjelligTiår = antallDagerMellomDatoer('1996-01-24', '2024-03-07');

    expect(antallDagerEtterfølgende).toBe(1);
    expect(antallDagerForskjelligMåned).toBe(170);
    expect(antallDagerForskjelligTiår).toBe(10270);
  });

  test('skal håndtere datoer i feil rekkefølge', () => {
    const antallDagerEtterfølgende = antallDagerMellomDatoer('2024-01-24', '2024-01-23');
    const antallDagerForskjelligMåned = antallDagerMellomDatoer('2024-07-12', '2024-01-24');
    const antallDagerForskjelligTiår = antallDagerMellomDatoer('2024-03-07', '1996-01-24');

    expect(antallDagerEtterfølgende).toBe(-1);
    expect(antallDagerForskjelligMåned).toBe(-170);
    expect(antallDagerForskjelligTiår).toBe(-10270);
  });
});

describe('sjekk - er to datoer påfølgende', () => {
  test('skal returnere true', () => {
    const påfølgendeDatoer = erPåfølgendeDatoer('2024-01-23', '2024-01-24');
    const skuddårsdatoer1 = erPåfølgendeDatoer('2024-02-28', '2024-02-29');
    const skuddårsdatoer2 = erPåfølgendeDatoer('2024-02-29', '2024-03-01');

    expect(påfølgendeDatoer).toBe(true);
    expect(skuddårsdatoer1).toBe(true);
    expect(skuddårsdatoer2).toBe(true);
  });

  test('skal returnere false', () => {
    const påfølgendeDatoerFeilRekkefølge = erPåfølgendeDatoer('2024-01-24', '2024-01-23');
    const skuddårsdatoerIkkeSkuddår1 = erPåfølgendeDatoer('2023-02-28', '2023-02-29');
    const skuddårsdatoerIkkeSkuddår2 = erPåfølgendeDatoer('2023-02-29', '2023-03-01');

    expect(påfølgendeDatoerFeilRekkefølge).toBe(false);
    expect(skuddårsdatoerIkkeSkuddår1).toBe(false);
    expect(skuddårsdatoerIkkeSkuddår2).toBe(false);
  });
});
