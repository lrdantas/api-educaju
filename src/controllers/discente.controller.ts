import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Discente} from '../models';
import {DiscenteRepository} from '../repositories';

export class DiscenteController {
  constructor(
    @repository(DiscenteRepository)
    public discenteRepository : DiscenteRepository,
  ) {}

  @post('/discentes', {
    responses: {
      '200': {
        description: 'Discente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Discente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Discente, {exclude: ['id']}),
        },
      },
    })
    discente: Omit<Discente, 'id'>,
  ): Promise<Discente> {
    return this.discenteRepository.create(discente);
  }

  @get('/discentes/count', {
    responses: {
      '200': {
        description: 'Discente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Discente)) where?: Where<Discente>,
  ): Promise<Count> {
    return this.discenteRepository.count(where);
  }

  @get('/discentes', {
    responses: {
      '200': {
        description: 'Array of Discente model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Discente)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Discente)) filter?: Filter<Discente>,
  ): Promise<Discente[]> {
    return this.discenteRepository.find(filter);
  }

  @patch('/discentes', {
    responses: {
      '200': {
        description: 'Discente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Discente, {partial: true}),
        },
      },
    })
    discente: Discente,
    @param.query.object('where', getWhereSchemaFor(Discente)) where?: Where<Discente>,
  ): Promise<Count> {
    return this.discenteRepository.updateAll(discente, where);
  }

  @get('/discentes/{id}', {
    responses: {
      '200': {
        description: 'Discente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Discente)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Discente> {
    return this.discenteRepository.findById(id);
  }

  @patch('/discentes/{id}', {
    responses: {
      '204': {
        description: 'Discente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Discente, {partial: true}),
        },
      },
    })
    discente: Discente,
  ): Promise<void> {
    await this.discenteRepository.updateById(id, discente);
  }

  @put('/discentes/{id}', {
    responses: {
      '204': {
        description: 'Discente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() discente: Discente,
  ): Promise<void> {
    await this.discenteRepository.replaceById(id, discente);
  }

  @del('/discentes/{id}', {
    responses: {
      '204': {
        description: 'Discente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.discenteRepository.deleteById(id);
  }
}
