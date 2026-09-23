import { describe, expect, test } from "vitest";
import { Soldado } from "../src/Soldado";

describe("Soldado", () => {

    test("el soldado inicia con 1 de vida", () => {
        const soldado = new Soldado();

        expect(soldado.vida).toBe(1);
    });

    test("el soldado inicia vivo", () => {
        const soldado = new Soldado();

        expect(soldado.estoyVivo()).toBe(true);
    });

    test("el soldado muere al recibir un disparo", () => {
        const soldado = new Soldado();

        soldado.recibirDisparo();

        expect(soldado.estoyVivo()).toBe(false);
    });

    test("el soldado puede disparar a otra unidad", () => {
        const s1 = new Soldado();
        const s2 = new Soldado();

        s1.disparar(s2);

        expect(s2.vida).toBe(0);
    });

});