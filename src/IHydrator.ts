import {EntityProperties} from './IEntity';

export interface IHydrator<D = {}, E = EntityProperties> {
    hydrate(data: D): E;
    extract(entity: E): D;
}
