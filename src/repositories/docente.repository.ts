import {DefaultCrudRepository} from '@loopback/repository';
import {Docente, DocenteRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DocenteRepository extends DefaultCrudRepository<
  Docente,
  typeof Docente.prototype.id,
  DocenteRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Docente, dataSource);
  }
}
