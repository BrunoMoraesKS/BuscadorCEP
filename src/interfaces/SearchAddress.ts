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

export interface ICEPResponse {
  data: ICEPData;
  status: number;
}
