export class Negociacao{
   constructor(
      private _data: Date,
      public readonly _quantidade: number,
      public readonly _valor: number
   ){
   }

   get volume(): number{
    return this._quantidade * this._valor;
   }

   get data(): Date{
      const data = new Date(this._data.getTime());
      return this._data;
   }

   public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
      const exp = /-/g;
      const date = new Date(dateString.replace(exp, ','));
      const quantidade = parseInt(quantidadeString);
      const valor = parseFloat(valorString);
      return new Negociacao(date, quantidade, valor);
   }
}