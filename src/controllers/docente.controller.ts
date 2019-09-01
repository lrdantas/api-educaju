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
import {Docente} from '../models';
import {DocenteRepository} from '../repositories';

export class DocenteController {
  constructor(
    @repository(DocenteRepository)
    public docenteRepository : DocenteRepository,
  ) {}

  @post('/docentes', {
    responses: {
      '200': {
        description: 'Docente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Docente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Docente, {exclude: ['id']}),
        },
      },
    })
    docente: Omit<Docente, 'id'>,
  ): Promise<Docente> {
    return this.docenteRepository.create(docente);
  }

  @get('/docentes/count', {
    responses: {
      '200': {
        description: 'Docente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Docente)) where?: Where<Docente>,
  ): Promise<Count> {
    return this.docenteRepository.count(where);
  }

  @get('/docentes', {
    responses: {
      '200': {
        description: 'Array of Docente model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Docente)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Docente)) filter?: Filter<Docente>,
  ): Promise<Docente[]> {
    return this.docenteRepository.find(filter);
  }

  @patch('/docentes', {
    responses: {
      '200': {
        description: 'Docente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Docente, {partial: true}),
        },
      },
    })
    docente: Docente,
    @param.query.object('where', getWhereSchemaFor(Docente)) where?: Where<Docente>,
  ): Promise<Count> {
    return this.docenteRepository.updateAll(docente, where);
  }

  @get('/docentes/{id}', {
    responses: {
      '200': {
        description: 'Docente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Docente)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Docente> {
    return this.docenteRepository.findById(id);
  }

  @patch('/docentes/{id}', {
    responses: {
      '204': {
        description: 'Docente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Docente, {partial: true}),
        },
      },
    })
    docente: Docente,
  ): Promise<void> {
    await this.docenteRepository.updateById(id, docente);
  }

  @put('/docentes/{id}', {
    responses: {
      '204': {
        description: 'Docente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() docente: Docente,
  ): Promise<void> {
    await this.docenteRepository.replaceById(id, docente);
  }

  @del('/docentes/{id}', {
    responses: {
      '204': {
        description: 'Docente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.docenteRepository.deleteById(id);
  }
}
