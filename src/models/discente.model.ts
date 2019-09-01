import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Discente extends Entity {
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
    type: 'number',
  })
  idade?: number;


  constructor(data?: Partial<Discente>) {
    super(data);
  }
}

export interface DiscenteRelations {
  // describe navigational properties here
}

export type DiscenteWithRelations = Discente & DiscenteRelations;
