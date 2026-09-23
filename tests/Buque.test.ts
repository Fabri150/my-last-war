import { describe, expect, test } from "vitest";
import { Buque } from "../src/Buque";

describe("Buque", () => {

    test("el buque inicia con 3 de vida", () => {
        const buque = new Buque();

        expect(buque.vida).toBe(3);
    });

    test("el buque inicia vivo", () => {
        const buque = new Buque();

        expect(buque.estoyVivo()).toBe(true);
    });

    test("el buque muere al recibir tres disparo", () => {
        const buque = new Buque();

        buque.recibirDisparo();
        buque.recibirDisparo();
        buque.recibirDisparo();

        expect(buque.estoyVivo()).toBe(false);
    });

    test("el buque puede disparar a otra unidad", () => {
        const b1 = new Buque();
        const b2 = new Buque();

        b1.disparar(b2);

        expect(b2.vida).toBe(2);
    });

});