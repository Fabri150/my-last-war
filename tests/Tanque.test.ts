import { describe, expect, test } from "vitest";
import { Tanque } from "../src/Tanque";

describe("Tanque", () => {

    test("el tanque inicia con 1 de vida", () => {
        const tanque = new Tanque();

        expect(tanque.vida).toBe(2);
    });

    test("el tanque inicia vivo", () => {
        const tanque = new Tanque();

        expect(tanque.estoyVivo()).toBe(true);
    });

    test("el tanque muere al recibir dos disparo", () => {
        const tanque = new Tanque();

        tanque.recibirDisparo();
        tanque.recibirDisparo();

        expect(tanque.estoyVivo()).toBe(false);
    });

    test("el tanque puede disparar a otra unidad", () => {
        const t1 = new Tanque();
        const t2 = new Tanque();

        t1.disparar(t2);

        expect(t2.vida).toBe(1);
    });

});