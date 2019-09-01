import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Docente extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  cpf: string;

  @property({
    type: 'string',
  })
  ocupacao?: string;

  @property({
    type: 'number',
  })
  idade?: number;


  constructor(data?: Partial<Docente>) {
    super(data);
  }
}

export interface DocenteRelations {
  // describe navigational properties here
}

export type DocenteWithRelations = Docente & DocenteRelations;
