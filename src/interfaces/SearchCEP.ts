interface IRegiaoData {
  id: number;
  sigla: string;
  nome: string;
}

export interface IStateData {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiaoData;
}

export interface ICityData {
  id: number;
  nome: string;
  municipio: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
        id: number;
        nome: string;
        UF: {
          id: number;
          sigla: string;
          nome: string;
          regiao: {
            id: number;
            sigla: string;
            nome: string;
          };
        };
      };
    };
  };
}

export interface ICEPData {
  cep: number;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: number;
  gia: number;
  ddd: number;
  siafi: number;
  erro?: boolean;
}
