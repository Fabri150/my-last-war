export abstract class UnidadDelEjercito {
    protected _vida: number;

    constructor(vidaInicial: number) {
        this._vida = vidaInicial;
    }

    get vida(): number {
        return this._vida;
    }

    disparar(tropa: UnidadDelEjercito): void {
        tropa.recibirDisparo();
    }

    recibirDisparo(): void {
        this._vida -= 1;
    }

    estoyVivo(): boolean {
        return this._vida > 0;
    }
}