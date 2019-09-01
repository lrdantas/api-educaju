import {DefaultCrudRepository} from '@loopback/repository';
import {Discente, DiscenteRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DiscenteRepository extends DefaultCrudRepository<
  Discente,
  typeof Discente.prototype.id,
  DiscenteRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Discente, dataSource);
  }
}
