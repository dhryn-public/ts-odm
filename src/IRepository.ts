import {IRootEntity} from './IEntity';

export interface IRepository<E = IRootEntity> {
    find(token: string): Promise<E>;
    flush(entity: E): Promise<void>;
}
