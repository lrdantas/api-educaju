import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Curso extends Entity {
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
  descricao: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  docentes?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  discentes?: object[];

  @property({
    type: 'date',
    required: true,
  })
  dataCadastro: string;

  @property({
    type: 'date',
  })
  dataEncerramento?: string;

  @property({
    type: 'string',
    required: true,
  })
  preco: string;

  constructor(data?: Partial<Curso>) {
    super(data);
  }
}

export interface CursoRelations {
  // describe navigational properties here
}

export type CursoWithRelations = Curso & CursoRelations;
